import React, { Component } from 'react';
import './App.css';

import Payment from "./presentational/payment";
import Devider from './presentational/devider';

class App extends Component {
  render() {
    return (
        <main className={"main"}>
            <section className={"payment"}>
                <Payment/>
            </section>
            <section className="basket">
                <Devider/>
            </section>
        </main>
    );
  }
}

export default App;
