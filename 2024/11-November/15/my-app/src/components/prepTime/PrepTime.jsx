import React from "react";
import "./PrepTime.css";
export default function PrepTime() {
  return (
    <div className="prep-time">
      <h3 className="subtitle-prep">Preparation time</h3>
      <ul className="ul-prep">
        <li className="li-prep">
          <span className="prep-highlight">Total</span>: Approximately 10
          minutes
        </li>
        <li className="li-prep">
          <span className="prep-highlight">Preparation</span>: 5 minutes
        </li>
        <li className="li-prep">
          <span className="prep-highlight">Cooking</span>: 5 minutes
        </li>
      </ul>
    </div>
  );
}
