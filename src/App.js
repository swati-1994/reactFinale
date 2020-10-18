import React, { Component } from 'react';
import Main from "./components/MainComponent";
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Home from './components/HomeComponent';
import { Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore'




const store=ConfigureStore();

class App extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div>
        
        <Main/>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
