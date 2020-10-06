import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavItem, NavbarToggler,Collapse} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        }
    }

    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })

        this.toggleNav=this.toggleNav.bind(this);

    }
    render(){
        return(
            <React.Fragment>
            <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto"  href="/">
                  <img src="assets/images/logo.png" height="30" width="41" alt="pickpocketsClub"/>
                  </NavbarBrand>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                   <NavItem>
                       <NavLink className="nav-link" to="/home">
                           <span className="fa fa-home fa-lg"></span>
                           Home
                           </NavLink>
                       </NavItem>
                       <NavItem>
                       <NavLink className="nav-link" to="/aboutus">
                           <span className="fa fa-home fa-lg"></span>
                           About Us
                           </NavLink>
                       </NavItem>
                       <NavItem>
                       <NavLink className="nav-link" to="/menu">
                           <span className="fa fa-list fa-lg"></span>
                           Menu                           
                           </NavLink>
                       </NavItem>
                       <NavItem>
                       <NavLink className="nav-link" to="/constactus">
                           <span className="fa fa-address-card fa-lg"></span>
                           Contact us
                           </NavLink>
                       </NavItem>
                       </Nav>
                       </Collapse>
            </div>
          </Navbar>
<Jumbotron>

<div className="container">
    <div className="row row-header">
        <div className="col-12 col-sm-6">
            <h1> Pick Pockets</h1>
            <p>We make clothes with pockets for women.</p>
            </div>
        </div>
</div>
</Jumbotron>

            </React.Fragment>
    )
    }
}
export default Header;