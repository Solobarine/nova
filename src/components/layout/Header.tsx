import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo'
import './css/Header.css'

const Header = () => {
  return (
    <header id="header">
        <div id="logo">
            <Logo/>
            <h2>ova</h2>
        </div>
        <div id="nav_links">
            <Link className="nav_link" to="/series">Hot Series</Link>
            <Link className="nav_link" to="/categories">Genres</Link>
            <a className="nav_link" href="#">About Us</a>
            <a className="nav_link" href="#">Contact Us</a>
        </div>
        <div id="user_links">
            <Link className="user_link" id="register" to="/register">Register</Link>
            <Link className="user_link" id="login" to="/login">Login</Link>
            <a className="user_link" id="logout" href="#">Logout</a>
        </div>
    </header>
  )
}

export default Header