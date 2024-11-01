import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;