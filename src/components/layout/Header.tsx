import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo'
import './css/Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../types/types'
import { logout } from '../../features/reducers/user'

const Header = () => {
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()
  const user_details = useSelector((state: RootState) => state.user)

  const handle_logout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <header id="header">
        <div id="logo">
            <Logo/>
            <h2>ova</h2>
        </div>
        <div id="nav_links">
          {
            (user_details.logged_in) &&
              <>
                <Link className="nav_link" to="/series">Hot Series</Link>
                <Link className="nav_link" to="/categories">Genres</Link>
              </>
          }
            <Link className="nav_link" to="/about-us">About Us</Link>
            <Link className="nav_link" to="/contact-us">Contact Us</Link>
        </div>
        <div id="user_links">
          {
            (user_details.logged_in) ?
              <button className="user_link" id="logout" onClick={handle_logout}>Logout</button>
            :
            <>
              <Link className="user_link" id="register" to="/register">Register</Link>
              <Link className="user_link" id="login" to="/login">Login</Link>
            </>
          }
        </div>
    </header>
  )
}

export default Header