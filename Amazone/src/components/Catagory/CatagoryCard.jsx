import React from "react";
import classes from "./catagory.module.css"
const CatagoryCard = ({ data }) => {
  // Destructure `data` from props
  return (
    <div className={classes.catagory}>
      <a href="">
        <span>
          <h2>{data.title}</h2> {/* Fix typo: `titile` -> `title` */}
        </span>
        <img src={data.imgLink} alt={data.title} />{" "}
        {/* Use `imgLink` instead of `img` */}
        <p>Shop now</p>
      </a>
    </div>
  );
};

export default CatagoryCard;
