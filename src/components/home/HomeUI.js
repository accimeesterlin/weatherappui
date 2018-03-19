import React from "react";



// Functional Component
export const Content = (props) => {
    return (
        <section>

            <Sidebar />
            <h1>12</h1>

            <h2>Delhi</h2>

            <p>Today, 9:32 pm</p>

            <div>
                {props.data.map((elements, index) => (
                    <div key={index} className = "daily">
                        <p>{elements.time}</p>
                        <button>  <i className="fas fa-bolt"></i> </button> 
                        <p>{elements.day}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};


const Sidebar = () => <div className = "sidebar">
    <span></span>
    <span></span>
    <span></span>
</div>;