import "./App.css";
import Jaguars from './components/Jaguars.jsx' 
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <h1>My App</h1>
      <div>
        <input type="text" onChange={(event) => {
          
        }} />
        <button>Add todo</button>
      </div>
      <div className="todo_wrapper">
      <Jaguars> 
        title="Finish Frontend Simplified"
        </Jaguars>
      <Jaguars> 
        title="Finish Interview Section" 
        </Jaguars>
      <Jaguars> 
        title="Land a $100k job" 
        </Jaguars>
    </div>
    <Modal title="Are you sure you want to delete?" />
    </div>
  );
}

export default App;
