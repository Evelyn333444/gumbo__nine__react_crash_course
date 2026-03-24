import "./App.css";
import Jaguars from './components/Jaguars.jsx' 
import Modal from './components/modal.jsx'

function App() {
  return (
    <div>
      <h1>My App</h1>
      <div className="todo_wrapper">
      <Jaguars> title="Finish Frontend Simplified"</Jaguars>
      <Jaguars> title="Finish Interview Section" </Jaguars>
      <Jaguars> title="Land a $100k job" </Jaguars>
    </div>
    <Modal />
    </div>
  );
}

export default App;
