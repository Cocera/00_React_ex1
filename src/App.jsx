import "./App.css";
import Person from './components/Person/Person';
import PersonClass from './components/PersonClass/PersonClass';

function App() {
  return (
    <>
      <h1>My first React project</h1>
      <Person name= "Paco" surname="Paquito" age="70"/>
      <Person name= "Maria" surname="Vázquez" age="30"/>
      <Person name= "Laura" surname="Mosquito" age="32"/>
      <PersonClass name= "Paca" surname="ClassUser" age="20"/>
      <PersonClass name= "Gastón" surname="ClassUser" age="21"/>
    </>
  )
};

export default App;
