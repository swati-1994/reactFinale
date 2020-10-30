import React, { Component } from 'react';
import Menu from "./menuComponent";
import DishDetail from "./dishDetailComponent";
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Home from './HomeComponent';
import {connect} from 'react-redux';
import {postComment,fetchDishes, fetchComments, fetchPromos} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
// import {COMMENTS} from "../shared/comments";
// import {LEADERS} from "../shared/leaders";
// import {PROMOTIONS} from "../shared/promotions";
import {TransitionGroup, CSSTransition} from 'react-transition-group';


const mapStateToProps=state=>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  }
}

const mapDispatchToProps=(dispatch)=>({

  postComment:(dishId, rating,author, comment)=>dispatch(postComment(dishId, rating,author, comment)),
  fetchDishes:()=>{dispatch(fetchDishes())},
  resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))},
  fetchComments:()=>{dispatch(fetchComments())},
  fetchPromos:()=>{dispatch(fetchPromos())}

})

class Main extends Component{
  constructor(props){
    super(props);
   
  }

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }


rendComments(dishDetail){
        if(dishDetail){
            return(
            <div>
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === this.props.selectedDish)[0]} />
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

      console.log("propsss in home", this.props);

        return(
          
          <Home 
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
        )
    }

    const AboutUs=()=>{
      console.log("leaders", this.props.leaders);
      return(
        <About leaders={this.props.leaders} />
      )
    }

    const DishWithId=({match})=>{
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            postComment={this.props.postComment}
            commentsErrMess={this.props.comments.errMess}
          />
    );
    }

    return (
      <div>
        <Header/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page">
        <Switch>

           
            <Route path="/home" component={HomePage}/>
            <Route path="/aboutus" component={AboutUs} />
            <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId}/>
            <Route exact path="/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
            <Redirect to="/home" />
       
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
