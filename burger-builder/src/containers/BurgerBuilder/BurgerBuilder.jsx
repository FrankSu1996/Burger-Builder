import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

//mapping of ingredients to prices
const INGREDIENT_PRICES = {
  lettuce: 0.3,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.8,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 3,
    //purchasable = can burger be purchased?
    //purchasing = order now button clicked, displays modal with order summary
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    //fetch ingredients from db
    axios
      .get('https://burgerbuilder-1200b.firebaseio.com/orders/ingredients.json')
      .then((response) => {
        this.setState({ingredients: response.data});
      })
      .catch((error) => {
        this.setState({error: true});
      });
  }

  //function to update purchasable state attribute if burger has at least 1 ingredient
  updatePurchaseState(ingredients) {
    //obtain sum of all ingredients
    const sum = Object.values(ingredients).reduce((sum, el) => {
      return (sum += el);
    }, 0);
    this.setState({purchasable: sum > 0});
  }

  //handles state change for addition of a single ingredient
  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  //handles state change for removal of a single ingredient
  removeIngredientHanlder = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = updatedCount;
    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Frank Su',
        address: {
          street: '136 Whitney',
          postalCode: 'L8S2G7',
          country: 'Canada',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'Fastest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        console.log(response);
        this.setState({loading: false, purchasing: false});
      })
      .catch((error) => {
        console.log(error);
        this.setState({loading: false, purchasing: false});
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    //burger is also spinner if it is loading from db
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner></Spinner>
    );

    //if ingredients loaded from db set burger and ordersummary accordingly
    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients}></Burger>
          <BuildControls
            ordered={this.purchaseHandler}
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHanlder}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
          />
        </React.Fragment>
      );
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice.toFixed(2)}
          ingredients={this.state.ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner></Spinner>;
    }

    return (
      <React.Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
