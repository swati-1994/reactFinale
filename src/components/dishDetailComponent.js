import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



class DishDetail extends Component{
  constructor(props){
    super(props);
    
  }
  render() {
var comments=this.props.dish.comments;
var dishImage=this.props.dish;
console.log("imageeeeee", this.props.dish)




  const details=comments.map((dishDetails)=>{
      return(
        //   <div className="row">
        //       <div className="col-12 col-md-5 m-1">
        //       <Card>
        //       <CardImg width="100%" src={dishDetails.image} alt={dishDetails.name} />
        //         <CardBody>
        //           <CardTitle>{dishDetails.name}</CardTitle>
        //           <CardText>{dishDetails.description}</CardText>
        //         </CardBody>
        //     </Card>
        //     </div>
        //     <div className="col-12 col-md-5 m-1">
                <Card key={dishDetails.id}>
                          <CardBody>
                              <div>
                              <div className="row">
                                  {dishDetails.author}
                                  </div>
                                  <div className="row">
                                  {dishDetails.comment}
                                  </div>
                              </div>
                              </CardBody>
                      </Card>
        //               </div>
        //   </div>

      )
  });



      return(
          <div className="row">
               <div className="col-12 col-md-5 m-1">
               <Card>
              <CardImg width="100%" src={dishImage.image} alt={dishImage.name} />
                <CardBody>
                  <CardTitle>{dishImage.name}</CardTitle>
                  <CardText>{dishImage.description}</CardText>
                </CardBody>
            </Card>
              
          </div>

          <div className="col-12 col-md-5 m-1">
              {details}
          </div>
          </div>
    
      )
    
  }
}

export default DishDetail;
