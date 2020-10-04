import React, {Component} from 'react';
import DishDetail from './dishDetailComponent'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component{

    constructor(props){
        super(props);
        this.state={

        }  
    }
    
    
    
    renderDish(dish){
        console.log("djnkjak", this.props);
        
        if(dish){
            console.log("dish is being rendered");
            
            return(
                <div>
                <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            
            </div>
            
            )

        }
        else{
            return (
                <div></div>
            )
        }
    }

    // rendComments(dishDetail){
    //     if(dishDetail!=null){
    //         return(
    //         <div>
    //         <DishDetail dishDetail={this.state.selectedDish}></DishDetail>

    //         </div>
    //         )
    //     }
    //     else{
    //         return(
    //             <div></div>
    //         )
    //     }

    // }

    render(){
        const menu= this.props.dishes.map((dish)=>{
            return (
                
                <div  className="col-12 col-md-5 m-1">
                  <Card key={dish.id}
                    onClick={() => this.props.onClick(dish.id)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                  </Card>
                  
                </div>
              );
        });
       
        return(
            <div className="container">
            <div className="row">
                {menu}
            </div>
            {/* <div className="row">
              <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.state.selectedDish)}
              </div> */}
              {/* <div  className="col-12 col-md-5 m-1">
                {this.rendComments(this.state.selectedDish)}
              </div> */}
            {/* </div>
             */}
        </div>
        );
    }

}
export default Menu;
