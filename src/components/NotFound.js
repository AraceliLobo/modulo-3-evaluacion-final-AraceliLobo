import React from "react";
import notFound from "../images/notfound.png";
import "../stylesheets/layouts/NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="character-notfound">
      <Link className="nfgoback-link" to="/">
        <button className="nfback-btn">Go back</button>
      </Link>
      <img className="notfound-image" src={notFound} alt="Not found" />
    </div>
  );
};

export default NotFound;
