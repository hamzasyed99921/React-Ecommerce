import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Stars = ({ stars, reviews }) => {
  // console.log(stars);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" size={20} color={'orange'}/>
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" size={20} color={'orange'}/>
        ) : (
          <AiOutlineStar className="icon" size={20} color={'orange'}/>
        )}
      </span>
    );
  });
  return <>
    <div className="icon_style d-flex align-items-center">
        {ratingStar}
        <p style={{margin: '6px 0 0 0', paddingLeft: '8px',fontSize: '15px', fontWeight: 500}}>({reviews} customer reviews)</p>
    </div>
  </>;
};

export default Stars;
