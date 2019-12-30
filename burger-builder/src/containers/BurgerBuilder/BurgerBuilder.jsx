import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

//mapping of ingredients to prices
const INGREDIENT_PRICES = {
  lettuce: 0.3,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.8
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 3
  };

  //handles state change for addition of a single ingredient
  addIngredientHandler = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients
    });
  };

  removeIngredientHanlder = type => {};

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
