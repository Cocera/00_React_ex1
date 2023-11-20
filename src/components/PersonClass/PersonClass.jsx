import "./PersonClass.css";
import React from "react";

class PersonClass extends React.Component{
    render() {
        console.log('NO ME VA')
        return <>
        <span className="infoClass">User: {this.props.name} </span>
        <span className="infoClass">Surname: {this.props.surname} </span>
        <span className="infoClass">Age: {this.props.age} </span>
        <br></br>
        </>
    }
};

export default PersonClass;