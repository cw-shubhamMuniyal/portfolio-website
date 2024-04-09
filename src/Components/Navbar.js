import { name } from "../Utilities/constants";
import HeaderLogo from "./HeaderLogo";
import NavbarContent from "./NavbarContent";


function Navbar() {
    return (
        <nav className="custom-navbar navbar navbar-expand-lg navbar-light">
            <div className="navbar-container container-fluid">
                <HeaderLogo name={name} imageSrc={"https://i.postimg.cc/TwY74D31/profile-pic-8.png"} />
                <NavbarContent />
            </div>
        </nav>
    );
}

export default Navbar;