import "./Person.css";

const Person = (props) => {
    return <>
    <span className="infoFunction">User: {props.name} </span>
    <span className="infoFunction">Surname: {props.surname} </span>
    <span className="infoFunction">Age: {props.age} </span>
    <br></br>
    </>
};

export default Person;