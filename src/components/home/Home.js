import React, { Component } from "react";
// import styled from "styled-components";
// import styles from "./App.css";
import {
    Content
} from "./HomeUI";
import "./Home.css";
import data from "./data.json";

import Footer from "../footer/Footer";


// Styled Componets
// const Container = styled.div`
//     background:green;
//     padding:20px;
//     height:200px;
//     width:200px;
//     border:1px solid #555;
// `;

// const Title = styled.h2`
//     color:#fff;
// `;


// const styles = {
//     container:{
//         border: "1px solid red",
//         width:"100px",
//         marginTop:"200px"
//     },
//     title:{
//         color:"#555"
//     },

//     description:{

//     }
// };



// Class Component
class Home extends Component {

    constructor(){
        super();

        this.state = {
            username:"Patrick"
        };

    }
    sendData = () => {

    };
    render() {
        return (
            <div className = "home">
                <Content data = {data}/>
                <Footer />
            </div>
        )
    }
}




export default Home;



// 3 different ways of building




    // // #1 Functional Component
    // const Header = (props) => {
    //     // TODO

    //     // NO Ajax
    //     // NO State
    //     // No Functions
    //     // No LifeCycle

    //     const username = "accimeesterlin";

    //     // It should a pure function
    //     return(
    //         <div>
    //             {username}
    //         </div>
    //     );
    // };

    // // #2 Class Component
    // class Main extends React.Component{
    //     // TODO

    //     constructor(){
    //         super();
    //         this.state = {};
    //     }


    //     componentDidMount = () => {
    //         // Ajax call here
    //     }

    //     sendData = () => {

    //     };
    // }


    // // #3 Higher Order Component (advanced)
    // const MainApp = () => class SubComponent extends React.Component{
    //     // TODO
    // }






// 4 different of integrating CSS with React

    // #1 CSS Stylesheet
    // #2 Inline styling
    // #3 CSS Modules
    // #4 Styled-component


    // #1 CSS Modules
    // #2 Styled-component
    // #3 Inline styling
    // #4 CSS Stylesheet
