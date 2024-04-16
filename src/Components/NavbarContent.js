function NavbarContent() {
    return (
        <>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse custom-navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="custom-nav-link nav-link" href="#" data-bs-target=".navbar-collapse.show">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="custom-nav-link nav-link" href="#workExperience" data-bs-target=".navbar-collapse.show">Work Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="custom-nav-link nav-link" href="#projects" data-bs-target=".navbar-collapse.show">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="custom-nav-link nav-link" href="#education" data-bs-target=".navbar-collapse.show">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="custom-nav-link nav-link" href="#contact" data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse.show"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default NavbarContent;