import {Link, NavLink} from "react-router-dom";
import logo from "../assets/schoolhacks-logo.png";

export default function Header() {
    const getClass = ({isActive}) => (isActive ? "nav-active" : null);

    return (
        <header className="container">
            <Link to="/">
                <img
                    className="logo"
                    src={logo}
                    alt="SchoolHacks logo"
                    title="SchoolHacks | Home"
                />
            </Link>

            <nav>
                <NavLink to="/" className={getClass}>
                    Home
                </NavLink>
                <NavLink to="/about" className={getClass}>
                    About
                </NavLink>
                <NavLink to="/workshops" className={getClass}>
                    Workshops
                </NavLink>
                <NavLink to="/register" className={getClass}>
                    Register
                </NavLink>
                <NavLink to="/login" className={getClass}>
                    Login
                </NavLink>
            </nav>
        </header>
    );
}
