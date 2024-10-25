import React from "react";
import {  Link} from "react-router-dom";
import classes from "./category.module.css";

function CategoryCard({ data }) {
  // Destructure data from props
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.title} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
