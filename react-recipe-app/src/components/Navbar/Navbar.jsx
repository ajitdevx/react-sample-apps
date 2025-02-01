import { NavLink } from "react-router";
import PropTypes from "prop-types";
import { LuSearch } from "react-icons/lu";

const Logo = () => {
    return (
        <a className="navbar-brand" href="#">
            Yumly
        </a>
    )
}

const items = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/recipe', title: 'Recipe' },
    { path: '/blog', title: 'Blog' },
    { path: '/contact', title: 'Contact' }
];

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-white">
                <div className="container">
                    <Logo />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            {items.map((item, index) => (
                                <NavItem key={index} path={item.path} title={item.title} />
                            ))}
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control rounded-pill bg-light"
                                type="search"
                                placeholder="Search..."
                                aria-label="Search"
                            />
                            <button className="btn bg-light rounded-circle" type="submit">
                                <LuSearch />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

const NavItem = ({ path, title }) => {
    return (
        <li className="nav-item">
            <NavLink to={path}
                className="nav-link text-capitalize"
            >
                {title}
            </NavLink>
        </li>
    )
}

NavItem.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string
}

export default Navbar;