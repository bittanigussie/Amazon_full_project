import React from 'react'
import { categoryInfos } from "./categoryFullInfos";
import CategoryCard from "./categoryCard";
import classes from "./category.module.css";

const category = () => {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((Infos) => (
        <CategoryCard data={Infos} />
      ))}
    </section>
  );
}

export default category
