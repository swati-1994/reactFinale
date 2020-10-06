import React from 'react';
import DishDetail from './dishDetailComponent'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


    // constructor(props){
    //     super(props);
    //     this.state={

    //     }  
    // }
    
    
    
    // function renderDish(dish){
    //     console.log("djnkjak", this.props);
        
    //     if(dish){
    //         console.log("dish is being rendered");
            
    //         return(
    //             <div>
    //             <Card>
    //             <CardImg top src={dish.image} alt={dish.name} />
    //             <CardBody>
    //               <CardTitle>{dish.name}</CardTitle>
    //               <CardText>{dish.description}</CardText>
    //             </CardBody>
    //         </Card>
            
    //         </div>
            
    //         )

    //     }
    //     else{
    //         return (
    //             <div></div>
    //         )
    //     }
    // }

   function RenderMenuItem({dish,onClick}){
       return(
        <Card key={dish.id}
        onClick={() => onClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
       )

   }

   const Menu=(props)=>{
    const menu= props.dishes.map((dish)=>{
        return (
            
            <div  className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
              
              
            </div>
          );
    });
   
    return(
        <div className="container">
        <div className="row">
            {menu}
        </div>
       
    </div>
    );

   }
        
   
export default Menu;
