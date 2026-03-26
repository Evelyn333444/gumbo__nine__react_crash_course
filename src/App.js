//import "./App.css";
//import Jaguars from './components/Jaguars.jsx' 
//import React, {useState} from 'react';


//function App() {
  //return <Counter />
  //const [showModal, setShowModal] = useState(false)
  
  //return (
    <div>
     <h1>My App</h1>
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button onClick={() => setShowModal(true)}> Add todo </button>
      </div>
      <div className="todo__wrapper">
      <Jaguars title="Finish Frontend Simplified" /> 
      <Jaguars title="Finish Interview Section" /> 
      <Jaguars title="Land a $100k job" /> 
        
    </div>
    {showModal && <Modal title="Confirm Delete?" />}
    </div>
  );
}

//export default App;
