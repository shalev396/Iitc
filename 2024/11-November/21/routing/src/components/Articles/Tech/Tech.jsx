import React from "react";
import { useParams } from "react-router-dom";
const { id } = useParams();
const Tech = () => {
  return <h2>id={id}</h2>;
};
export default Tech;
