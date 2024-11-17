import React from "react";
import "./FormComp.css";
export default function FormComp(props) {
  console.log(props);

  const updateChoice = (e) => {
    props.updateFunction(+e.target.innerText);
  };
  const submitted = () => {
    props.setDidUserSubmit(true);
  };
  return (
    <div className="formComp">
      <img className="formIcon" src="/assets/images/icon-star.svg" />
      <h1>How did we do?</h1>
      <p className="formP">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rateButton">
        <button onClick={updateChoice}>1</button>
        <button onClick={updateChoice}>2</button>
        <button onClick={updateChoice}>3</button>
        <button onClick={updateChoice}>4</button>
        <button onClick={updateChoice}>5</button>
      </div>
      <button className="submitButton" onClick={submitted}>
        SUBMIT
      </button>
    </div>
  );
}
