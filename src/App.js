import "./App.css";
import { Mensaje } from "./mensaje"; 


function Description() {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

function App() {
  return (
    <div className="App">
     <Mensaje color='red' message='Estamos trabajando' />
     <Mensaje color='green' message='en un curso' />
     <Mensaje color='yellow' message='de React'/>  
     <Description />
    </div>
  );
}

export default App;
