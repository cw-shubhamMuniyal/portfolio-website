import { useState } from "react";
import { navbarContentLinks } from "../Utilities/constants";

const NavbarContent = () => {

    const [shouldShowNavbar, setShouldShowNavbar] = useState(false);

    const toggleExpandCollapse = () => {
        setShouldShowNavbar(prevState => !prevState)
    };

    const getNavbarList = (links) => {
        return links.map((link) => {
            return (
                <li key={link.key} className="nav-item" onClick={toggleExpandCollapse}>
                    <a className="custom-nav-link nav-link" href={link.link} data-bs-target=".navbar-collapse.show">{link.text}</a>
                </li>
            )
        })
    }

    return (
        <>
            <button id="navbarBtn" className={`navbar-toggler`} type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation"
                onClick={toggleExpandCollapse}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse custom-navbar-collapse ${shouldShowNavbar ? "show" : ""}`} id={`navbarNav`}>
                <ul className="navbar-nav">
                    {getNavbarList(navbarContentLinks)}
                </ul>
            </div>
        </>
    )
}
export default NavbarContent;