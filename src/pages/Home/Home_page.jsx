import React, { Component } from "react";
import axios from "axios";

import "./home.scss";

import Clock from "../../components/Clock/Clock";
import Area from "../../components/Area/Area";
import Tasks from "../../components/Tasks/Tasks";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import Forcast from "../../components/Forcast/Forcast";

import { Col, Row, Container } from "react-bootstrap";

class Home_page extends Component {
  state = {
    weather: undefined,
    forecast: undefined,
    country: undefined,
    city: undefined,
    current_temp: undefined,
    bg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP1xAcELYeuCBDZfcIir3E5cDffP_ikZY57w&usqp=CAU",
  };

  location = async () => {
    const {
      data: { country, city },
    } = await axios.get("http://ip-api.com/json");
    await this.setState({
      country: country,
      city: city,
    });
  };

  callWeather = async () => {
    let forCastWeather = await `http://api.weatherapi.com/v1/forecast.json?key=a35c5daa43314912922104036201507&q=${this.state.city}&days=4`;
    const { current, forecast } = (await axios.get(forCastWeather)).data;
    this.setState({
      weather: current,
      forecast: forecast.forecastday,
      current_temp: current.temp_c,
    });
  };

  switchbg = (temp) => {
    return temp <= 15
      ? this.setState({ bg: "https://wallpaperaccess.com/full/2942914.jpg" })
      : temp >= 15
      ? this.setState({
          bg:
            "https://i.pinimg.com/originals/df/59/2e/df592e0edb477944999d5d68780b9eac.jpg",
        })
      : this.state.bg;
  };

  async componentDidMount() {
    await this.location();
    await this.callWeather();
    await this.switchbg(this.state.current_temp);
  }

  render() {
    return (
      <>
        <div className="bg-container">
          <div
            className="background"
            style={{ backgroundImage: `url(${this.state.bg})` }}
          />
        </div>
        <Container>
          <Row className="mx-3 first_row">
            <Col md={6}>
              <Clock />
            </Col>
            <Col md={6}>
              <Area country={this.state.country} city={this.state.city} />
            </Col>
          </Row>
          <Row className="mx-3 second_row">
            <Tasks />
          </Row>
          <Row className="mx-auto third_row">
            <div className="bg_color" />
            <Col md={4}>
              <CurrentWeather weather={this.state.weather} />
            </Col>
            <Col md={8}>
              <Forcast forecast={this.state.forecast} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home_page;
