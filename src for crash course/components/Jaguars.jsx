import './Jaguars.css' 
 
function Jaguars(props) {
return (
        <div className="todo">
        <h2>{props.title}</h2>
        <span></span>
        <button> Delete</button>
      </div>
)
}

export default Jaguars