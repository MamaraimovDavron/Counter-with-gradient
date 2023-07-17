import { Component } from "react";
import React from "react";
import './app.css';

class App extends Component{
    state = {
        count: 0,
    };

    plusOne = () => {
        this.setState({ count: this.state.count + 1 })
    }

    minusOne = () => {
        this.setState({ count: this.state.count - 1 })
    }

    reset = () => {
        this.setState({ count: 0 })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="counter-header"><h1>Counter</h1></div>
                        <div className="counter-body"><p>{ this.state.count }</p></div>
                        <div className="counter-footer d-flex">
                            <button onClick={this.plusOne} className="btn btn-success">+</button>
                            <button onClick={this.reset} className="btn btn-primary">Reset</button>
                            <button onClick={this.minusOne} className="btn btn-danger">-</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;