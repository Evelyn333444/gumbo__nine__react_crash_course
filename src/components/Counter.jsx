// this is how you increment a counter//
//meaning, you create a button that increases and decreases a number//

function Counter() {
    const [counter, setCounter] = useState(0)
    function incrementCounter() {
        setCounter(counter + 1)
        // If you want to do it by two or more, then it would be: setCounter((prevCounter) => prevCounter + 1) //
        //                                                          setCounter((prevCounter) => prevCounter + 1)  //
        // The bigger the increment/decrement interval, the more/less times you do the setCounter, as shown above. //
    }

    function decrementCounter() {
        setCounter(counter -1)
    }
  return (
    <div>
      <button onClick={decrementCounter}>-</button>
      {counter}
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

export default Counter;

// An example of this in real life is shopping online. You can add items of a certain quantity to a cart, which is demonstrated below.//

function Counter() {
    const [cart, setCart] = useState({
        item: "dumbbells", 
        quantity:  10
    });

    //1. Use a callback to get the previous value //
    //2. Spread out all the properties of the prev state
    //3. Only change the property that you need to change

    function removeDumbbells() {
        setCart(prevCart => ({
            ...prevCart, 
            quantity: prevCart.quantity - 1,
    }))
    }

    function addDumbbells() {
        setCart(prevCart => ({
            ...prevCart, 
            quantity: prevCart.quantity + 1,
    }))
    }
   
  return (
    <div>
      <button onClick={removeDumbbells}>-</button>
      {cart.quantity}
      {cart.item}
      <button onClick={addDumbbells}>+</button>
    </div>
  );
}

export default Counter;



function Counter() {
    function Counter() {
        const [arr, setArr] = useState ()
    
        function addPlus() {
            setArr(prevArr => [ ...prevArr, "+"])
    }

     function addMinus() {
            setArr(prevArr => [ ...prevArr, "-"])
    }

  return (
    <div>
      <button onClick={addMinus}>-</button>
      {counter}
      <button onClick={addPlus}>+</button>
      {arr}
      //To see the items of the array shown as a horizontal list separatd by commas, type {arr.toString()} in place of what is in line 84//
    </div>
  );
}

export default Counter;