import "./MainContainer.css";
import React from "react";
import { useState } from "react";
import FormComp from "../formComp/FormComp.jsx";
import ResultComp from "../resultComp/ResultComp.jsx";
export default function MainContainer() {
  const [userChoice, setUserChoice] = useState(1);
  const [didUserSubmit, setDidUserSubmit] = useState(false);

  return (
    <div className="mainContainer">
      {didUserSubmit ? (
        <ResultComp userChoice={userChoice} />
      ) : (
        <FormComp
          updateFunction={setUserChoice}
          setDidUserSubmit={setDidUserSubmit}
        />
      )}
    </div>
  );
}
