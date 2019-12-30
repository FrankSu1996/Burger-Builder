import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  //first get keys from ingredient prop (passed as object)
  let ingredientsTransformed = Object.keys(props.ingredients)
    .map(ingredient => {
      //first map to array of array of burger ingredients
      return [...Array(props.ingredients[ingredient])].map((_, index) => {
        return <BurgerIngredient key={ingredient + index} type={ingredient} />;
      });
    })
    //then reduce to single array of burger ingredients
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (ingredientsTransformed.length === 0) {
    ingredientsTransformed = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {ingredientsTransformed}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
