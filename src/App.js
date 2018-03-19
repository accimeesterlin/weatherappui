import React, { Component } from "react";


import Home from "./components/home/Home";
import Header from "./components/header/Header";


import "./App.css"

class App extends Component {
    render() {
        return (
            <div className = "container">
                <Home />
                
            </div>
        )
    }
}

// Routing


export default App;