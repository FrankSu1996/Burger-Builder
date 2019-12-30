import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  //first get keys from ingredient prop (passed as object)
  const ingredientsTransformed = Object.keys(props.ingredients).map(
    ingredient => {
      //return Burger Ingredient component
      return [...Array(props.ingredients[ingredient])].map((_, index) => {
        return <BurgerIngredient key={ingredient + index} type={ingredient} />;
      });
    }
  );
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {ingredientsTransformed}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
