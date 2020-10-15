import React, { Component } from 'react';
import Menu from "./menuComponent";
import DishDetail from "./dishDetailComponent";
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from "../shared/promotions";




class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    //   selectedDish: null
    }
  }



rendComments(dishDetail){
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
            <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]} promotions={this.state.dishes.filter((promo)=>promo.featured)[0]} 
                  leader={this.state.leaders.filter((leader)=>leader.featured)[0]}  />
        )
    }

    const AboutUs=()=>{
      console.log("leaders", this.state.leaders);
      return(
        <About leaders={this.state.leaders} />
      )
    }

    const DishWithId=({match})=>{
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
    }

    return (
      <div>
        <Header/>
        <Switch>

           
            <Route path="/home" component={HomePage}/>
            <Route path="/aboutus" component={AboutUs} />
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId}/>
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
       
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
