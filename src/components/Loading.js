import React from "react";
import loading from "../images/loading2.gif";

const Loading = () => {
  return (
    <div className="character-notexist">
      <img className="notfound-image" src={loading} alt="Not found" />
    </div>
  );
};

export default Loading;
