import React from "react";
import { catagoryImage } from "./CatagoryFull"; // Import `catagoryImage`
import CatagoryCard from "./CatagoryCard";
import classes from "./catagory.module.css";

const Catagor = () => {
  return (
    <section className={classes.catagory_continear}>
      {catagoryImage.map((infos, index) => (
        <CatagoryCard key={index} data={infos} /> // Add `return` and `key`
      ))}
    </section>
  );
};

export default Catagor;
