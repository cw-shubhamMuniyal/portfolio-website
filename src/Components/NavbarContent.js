function NavbarContent() {
    return (
        <>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse custom-navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="custom-nav-link nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="custom-nav-link nav-link" href="#">Work Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="custom-nav-link nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="custom-nav-link nav-link" href="#">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="custom-nav-link nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default NavbarContent;