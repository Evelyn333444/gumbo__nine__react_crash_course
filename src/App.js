import "./App_e-commerce.css";
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Books from "./pages/Books";
import Cart from "./pages/Cart";
import BooksInfo from "./pages/BooksInfo";
import Home from "./pages/home";

import { books as booksData } from "./data";
import { useState, useEffect } from "react";

function App() {
    const [cart, setCart] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setBooks(booksData);
    }, []);

    function addToCart(book) {
        const existing = cart.find(item => +item.id === +book.id);

        if (existing) {
            setCart(cart.map(item =>
                item.id === book.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...book, quantity: 1 }]);
        }
    }

    function changeQuantity(book, quantity) {
        setCart(
            cart.map(item =>
                item.id === book.id
                    ? { ...item, quantity: +quantity }
                    : item
            )
        );
    }

    function removeItem(item) {
        setCart(cart.filter(book => book.id !== item.id));
    }

    function numberOfItems() {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    return (
        <Router>
            <div className="App_e-commerce">
                <Nav numberOfItems={numberOfItems()} />

                <Switch>
                    <Route path="/" exact component={Home} />

                    <Route
                        path="/books"
                        exact
                        render={() => <Books books={books} />}
                    />

                    <Route
                        path="/books/:id"
                        render={() => (
                            <BooksInfo
                                books={books}
                                addToCart={addToCart}
                                cart={cart}
                            />
                        )}
                    />

                    <Route
                        path="/cart"
                        render={() => (
                            <Cart
                                cart={cart}
                                changeQuantity={changeQuantity}
                                removeItem={removeItem}
                            />
                        )}
                    />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
}

export default App;