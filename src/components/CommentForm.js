import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, Label,
     FormGroup, Button, Col, Row} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import  {DishDetail} from './dishDetailComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';


const required=(val)=>val && val.length;
const maxLength=(len)=>(val)=>!(val)||(val.length<=len);
const minLength = (len) => (val) => val && (val.length >= len);

class Comments extends Component{

    constructor(props){
        super(props);   
        this.state={
            isModalOpen:false,
            isNavOpen:false
        }



        this.handleForm=this.handleForm.bind(this);
        this.toggleModal=this.toggleModal.bind(this);

    }

    

    
    handleForm(values){
        this.toggleModal();
        console.log("current state is:"+JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)


    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

render(){

    console.log("swati", this.props);
    


return(

    <div>
    <Button color="primary" onClick={this.toggleModal}>Add Comments</Button>
    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
    <ModalHeader toggle={this.toggleModal}> Submit Comment</ModalHeader>
    <ModalBody>

        <LocalForm onSubmit={(values)=>{this.handleForm(values)}}>
        <Row className="form-group">
                                <Label htmlFor="yourname" md={2}>your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="yourname"
                                        className="form-control"
                                        validators={{required, minLength:minLength(3), maxLength:maxLength(15)}}
                                        />
                                        <Errors className="text-danger" model=".yourname" show="touched" 
                                        messages={{
                                            required:'Required',
                                            minLength:'must be greater than 2 characters',
                                            maxLength:'must be 15 characters or less'
                                        }}/>
                                    
                                </Col>
                            </Row>

                            <Row className="form-group">
                               
                                <Col md={{size: 10, offset: 1}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                          
                            <Row className="form-group">
                            <Label htmlFor="message" md={2}>
                            Comment
                            </Label>
                            <Col md={10}>
                                <Control.textarea model=".comment"  id="comment" name="comment" placeholder="comment" className="form-control"
                                row="12"
                                 /> 
                                </Col>
                            </Row>


                            <FormGroup>
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Send comment
                                        </Button>
                                    </Col>
                                </FormGroup>

            </LocalForm>
    </ModalBody>
</Modal>
</div>
                                    

        )
    }
}

export default Comments;