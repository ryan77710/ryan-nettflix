import React from "react";
import Title from "./Title";
import Line from "./Line";
import movie from "../movie.json";

const Caroussel = () => {
  return (
    <>
      {movie.map((element, index) => {
        return (
          <>
            <Title key={index} title={element.category}></Title>
            <div className="Line">
              {element.images.map((ele, indax) => {
                return <Line key={indax} image={ele}></Line>;
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Caroussel;
