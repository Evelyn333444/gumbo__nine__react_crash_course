import "./App_e-commerce.css";
import Nav from './components/Nav_e-commerce';
import Landing from './components/Landing';
import Highlights from './components/Highlights';
import Featured from './components/Featured';
import Discounted from './components/Discounted';
import Explore from './components/Explore';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Books from "./pages/Books";
import { book } from "./data";
import Cart from "./pages/Cart";
import BooksInfo from "./pages/BooksInfo";
import { useState, useEffect } from "react";


function App_e-commerce() {
    const [cart, setCart] = useState([]);

    function addToCart(book) {
        setCart([...cart, {...book, quantity: 1}]);
    }

    function changeQuantity(book, quantity) {
        setCart(
            cart.map(item => {
            item.id === book.id
            ? {
                ...item, 
                quantity: +quantity,
            }
            : item
        }))
    }

    function removeItem(item) {
        setCart(cart.filter(book => book.id !== item.id));
    }

    function numberOfItems() {
        let counter = 0;
        cart.forEach(item => {
            counter += item.quantity;
        });
        return counter;
    }

    function addToCart(book) {
        const dupeItem = cart.find((item) => +item.id === +book.id);
        if (dupeItem) {
            dupeItem.quantity += 1;
            setCart(cart.map(item => {
                if (item.id === dupeItem.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                }
                else {
                    return item;
                }
            }))
        }
        else {
        setCart([...cart, {...book, quantity: 1}]);
        }
    }

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <Router>
        <div className="App_e-commerce">
           <Nav numberOfItems={numberOfItems()} />
           <Route path="/" exact component={Home} />
            <Route path="/books" exact render={() => <Books books={books} />} />
            <Route path="/books/:id" render={() => <BooksInfo books={books} addToCart={addToCart} />} />
            <Route path="/cart" exact render={() => <Cart 
            books={books} 
            cart={cart} 
            changeQuantity= {changeQuantity} 
            removeItem= {removeItem} />} />
           <Footer />
        </div>
        </Router>
    );
}

export default App_e-commerce;