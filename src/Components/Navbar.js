import HeaderLogo from "./HeaderLogo";
import NavbarContent from "./NavbarContent";


function Navbar({ name, imageSrc }) {
    return (
        <nav className="custom-navbar navbar navbar-expand-lg navbar-light">
            <div className="navbar-container container-fluid">
                <HeaderLogo name={name} imageSrc={imageSrc} />
                <NavbarContent />
            </div>
        </nav>
    );
}

export default Navbar;