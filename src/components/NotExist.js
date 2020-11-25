import React from "react";
import notExist from "../images/notexist.png";
import "../stylesheets/layouts/NotExist.scss";

const NotExist = () => {
  return (
    <div className="character-notexist">
      <img className="notfound-image" src={notExist} alt="Not found" />
    </div>
  );
};

export default NotExist;
