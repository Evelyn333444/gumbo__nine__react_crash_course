//This is what we call "creating a component, which is the first part of react components//

function Todo(title) {
    function deleteToDo() {
        console.log('deleteTodo()', title.toUpperCase ())
    }
return (
        <div>
        <h2>Finish Frontend Simplified</h2>
        <p>{paragraph}</p>
        <button> onClick={() => deleteToDo} Delete</button>
      </div>
)
}

export default Todo