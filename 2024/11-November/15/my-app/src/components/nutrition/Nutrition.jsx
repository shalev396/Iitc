import React from "react";
import "./Nutrition.css";
export default function Nutrition() {
  return (
    <div className="nutrition">
      <h2 className="subtitle-nutrition">Nutrition</h2>
      <p className="p-nutrition">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="table-nutrition">
        <tr className="tr-nutrition">
          <td className="td-name-nutrition bordered-bottom">Calories</td>
          <td className="td-number-nutrition bordered-bottom">277kcal</td>
        </tr>
        <tr className="tr-nutrition">
          <td className="td-name-nutrition bordered-bottom">Carbs</td>
          <td className="td-number-nutrition bordered-bottom">0g</td>
        </tr>
        <tr className="tr-nutrition">
          <td className="td-name-nutrition bordered-bottom">Protein</td>
          <td className="td-number-nutrition bordered-bottom">20g</td>
        </tr>
        <tr className="tr-nutrition">
          <td className="td-name-nutrition ">Fat</td>
          <td className="td-number-nutrition ">22g</td>
        </tr>
      </table>
    </div>
  );
}
