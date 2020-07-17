import React, { useState } from "react";
import { Row } from "react-bootstrap";
import PopoverEle from "../Popover/Popover";

function SingleForcast({ date, day }) {
  const [show, setShow] = useState(false);
  const { avgtemp_c, condition } = day || {};
  const weekend = new Date(date).toString().split(" ")[0];
  return (
    <Row
      className="d-flex flex-column align-items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <PopoverEle
          text={day?.condition?.text}
          wind={day?.maxwind_kph}
          precipition={day?.totalprecip_in}
          humidity={day?.avghumidity}
        />
      )}
      <p>{weekend}</p>
      <div>
        <img src={`http:${condition?.icon}`} alt="" />
      </div>
      <h3>{avgtemp_c}°C</h3>
    </Row>
  );
}

export default SingleForcast;
