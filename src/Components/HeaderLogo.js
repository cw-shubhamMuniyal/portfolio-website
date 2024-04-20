import '../Styles/HeaderLogo.css';

function HeaderLogo({name, imageSrc}) {
    return (
        <a href="/#" className="header__logo-container">
            <div className="header__logo-img-cont">
                <img src={imageSrc} alt={`${name} Logo Image`} className="header__logo-img" />
            </div>
            <span className="header__logo-text">{name}</span>
        </a>
    );
}

export default HeaderLogo;