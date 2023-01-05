import React from "react";
import  './styles/home.css'
import GroupInfo from "./GroupInfo";
import GroupDis from "./GroupDis";

function Home() {
  return (

    <div className="home">
      <div className="home__container">
        <div className="home__titles">
          <div className="home__title">
            <h1>
              PROJECT <br /> TITLE
            </h1>
          </div>
          <br />
          <div className="home__subTitle">
            <p>
              <b>ADD YOUR PROJECT TODAY!!</b>
            </p>
          </div>
          <div></div>
          <button type="button" className=" btn btn-primary"><b> ADD PROJECT</b></button>
        </div>
      </div>
      <GroupInfo/>
      <GroupDis/>
    </div>
  );
}

export default Home;
