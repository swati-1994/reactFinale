import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./menuComponent";
import DishDetail from "./dishDetailComponent";
import {DISHES} from '../shared/dishes'



class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId){
        
    this.setState({selectedDish:dishId})
}

rendComments(dishDetail){
    console.log("detailssssss", dishDetail);
        if(dishDetail){
            return(
            <div>
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }

    }

render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <div  className="col-12 col-md-5 m-1">
                {this.rendComments(this.state.selectedDish)}
              </div>
        
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />  */}
      </div>
    );
  }
}

export default Main;
