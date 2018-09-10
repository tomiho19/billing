import React, { Component } from 'react';
import './App.css';

import Payment from "./components/payment";
import Devider from './components/devider';

class App extends Component {
  render() {
    return (
        <div className={"main"}>
            <div className={"payment"}>
                <Payment/>
            </div>
            <div className="basket">
                <Devider/>
            </div>
        </div>
    );
  }
}

export default App;
