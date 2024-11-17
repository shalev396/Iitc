import "./ResultComp.css";
import React from "react";

export default function ResultComp(props) {
  return (
    <div className="resultComp">
      <img
        className="resultIcon"
        src="/assets/images/illustration-thank-you.svg"
      />
      <p className="selection">You selected {props.userChoice} out of 5</p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
