import React, { Component } from 'react';
import Menu from "./menuComponent";
import DishDetail from "./dishDetailComponent";
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from "./FooterComponent";
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';



class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES
    //   selectedDish: null
    }
  }

//   onDishSelect(dishId){
        
//     this.setState({selectedDish:dishId})
// }

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

    const HomePage=()=>{
        return(
            <Home />
        )
    }

    return (
      <div>
        <Header/>
        <Switch>

           
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */} 
        {/* <div  className="col-12 col-md-5 m-1">
                {this.rendComments(this.state.selectedDish)}
              </div> */}
        
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />  */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
