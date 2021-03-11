import React from "react";
import Title from "./Title";
import Line from "./Line";
import movie from "../movie.json";
import emission from "../emission.json";

const Caroussel = () => {
  return (
    <>
      {movie.map((element, index) => {
        return (
          <>
            <Title title={element.category}></Title>
            <div className="Line">
              {element.images.map((ele, indax) => {
                return <Line image={ele}></Line>;
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Caroussel;
