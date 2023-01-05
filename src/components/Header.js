import React from "react";
import "./styles/header.css";

function Header() {
  return (
    <nav className="header">
      <div className="header__fhalf">
        <div className="header__title">
          <b>
            VISHWAKARMA <br /> STUDENT PORTOL
          </b>
        </div>
      </div>
      <div className="header__shalf">
        <div>
          <b>HOME</b>
        </div>
        <div>
          <b> MY GROUP</b>
        </div>
        <div>
          <b>PROJECT</b>
        </div>
        <div>🔔</div>
        <div>HOME</div>
        <button type="button" className=" header__loginbutton btn btn-primary">
          <b> LOGIN</b>
        </button>
      </div>
    </nav>
  );
}

export default Header;
