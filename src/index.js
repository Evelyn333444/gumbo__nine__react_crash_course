import React from 'react';
import ReactDOM from 'react-dom/client';
import './App_e-commerce.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faArrowLeft)

//Lines 9 and 7 allow us to import icons and actually use them. In this case, they are solid icons.
//Line 6 is importing fontawesome, similar to what we did in HTML and CSS when incorportating fontawesome

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);


