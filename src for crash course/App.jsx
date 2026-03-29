//import "./App.css";
//import Jaguars from './components/Jaguars.jsx' 
//import React, {useState, useEffect} from 'react';


//function App() {
//  return <React />
//  const [showModal, setShowModal] = useState(false)

  //function onTodoDelete() {
//    setShowModal(true)
//    console.log('onTodoDelete()')
//  }
  
  //This is the first step of emitting an event//
//function cancelModal() {
//  setShowModal(false)
//}

//function confirmModal() {
//  setShowModal(false)
//}

//The purpose of useEffect in this case is to regulate when the useState changes occur, so they don't keep happening when we don't want them to.//
//When a component mounts (as seen on line 27), it is created, initialized, and inserted into the browser's Document Object Model (DOM) for the first time, making it visible and interactive on the screen
//Below are examples of how to regulate the useEffect. They don't all have to be used for every project.
//useEffect(() => {
//  console.log('ONLY on mount')
})

//useEffect(() => {
//  console.log('on mount AND on ${showModal} change')
  //The line below shows how to make the code run infinently, but setting showModal to the opposite of itself.
  //setShowModal(!showModal)
//}, [showModal])

//useEffect(() => {
//  console.log('EVERY render')
//})

  //return (
//    <div>
//      <div>
//        <input type="text" onChange={(event) => {
//          console.log(event.target.value)
//        }} />
//        <button onClick={() => setShowModal(true)}> Add todo </button>
//      </div>
//      <div className="todo__wrapper">
//      <Jaguars onTodoDelete= {onTodoDelete} title="Finish Frontend Simplified" /> 
//      <Jaguars onTodoDelete= {onTodoDelete} title="Finish Interview Section" /> 
//      <Jaguars onTodoDelete= {onTodoDelete} title="Land a $100k job" /> 
        
//    </div>
//    //Lines 40 and 41, in this case, demonstrate the 2nd step of emitting and event. In this step, we are implementing the emit function we made in the parent function (lines 15-22) into the child function. //
//    {showModal && <Modal 
//    cancelModal={cancelModal} 
//    confirmModal={confirmModal} 
//    title="Confirm Delete?" />}
//    </div>
//  );
//}

// export default App;
