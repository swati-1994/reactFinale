import React, { Component } from 'react';
 import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Comments from './CommentForm';





const required=(val)=>val && val.length;
const maxLength=(len)=>(val)=>!(val)||(val.length<=len);
const minLength = (len) => (val) => val && (val.length >= len);


function RenderDish({dish}){
  if({dish})
  return (
  <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
  <CardTitle>{dish.name}</CardTitle>
  <CardText>{dish.description}</CardText>
        </CardBody>
        </Card>
      </div>
  );

}

function RenderComments({comments, addComment, dishId}){
  if(comments!=null)
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {
          comments.map((comment)=>{
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
            <p>--{comment.author}</p>


                </li>
            )

          })
        }
        </ul>
        <div>
      <Comments dishId={dishId} addComment={addComment} />
   
      </div>
        </div>
  )
}




const DishDetail=(props)=>{

  function handleClick(e) {


    // <Route path="/comments" component={Comments}/>

    return(    
    <Comments isClicked="true"/>
    )
       
  }
 
  if(props.dish!=null)
  return (
    <div className="container">
    <div className="row">
        <Breadcrumb>

            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
        </div>                
    </div>
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} 
            addComment={props.addComment}
            dishId={props.dish.id}/>
        </div>
    </div>
   

    </div>
);
else
return(
  <div></div>
)
}




 export default DishDetail;



 