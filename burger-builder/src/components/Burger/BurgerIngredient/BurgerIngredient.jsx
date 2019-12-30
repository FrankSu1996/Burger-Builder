import React, { Component } from "react";
import styles from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    //obtain ingredient choice from props
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={styles.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={styles.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={styles.Cheese}></div>;
        break;
      case "lettuce":
        ingredient = <div className={styles.Lettuce}></div>;
        break;
      case "bacon":
        ingredient = <div className={styles.Bacon}></div>;
        break;
      default:
        ingredient = null;
        break;
    }

    return ingredient;
  }
}

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
