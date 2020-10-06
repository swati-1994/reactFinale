import React, { Component } from 'react';
import Main from "./components/MainComponent";
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/HomeComponent';




class App extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        
        <Main/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
