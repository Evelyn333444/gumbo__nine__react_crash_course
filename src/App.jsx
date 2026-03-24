import "./App.css";
import Jaguars from './components/Jaguars.jsx' 
import modal from './components/modal.jsx'

function App() {
  return (
    <div>
      <Title />
      <div className="todo_wrapper">
      <Jaguars></Jaguars>
      <Jaguars></Jaguars>
      <Jaguars></Jaguars>
    </div>
    <modal />
    </div>
  );
}

export default App;
