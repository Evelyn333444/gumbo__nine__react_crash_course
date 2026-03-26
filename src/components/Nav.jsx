import { Link } from 'react-router-dom';

function Nav() {
return (
<nav>
    // The 'to' is the same as href//
    <Link to="/">Home</Link>
    <Link to="/users/smith">Smith</Link>
    <Link to="/users/aikman">Aikman</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
</nav>
);
}

export default Nav

//This page, along with users.jsx and app2.jsx, is demonstrating how (e.g.) instagram fetches sites using react.//