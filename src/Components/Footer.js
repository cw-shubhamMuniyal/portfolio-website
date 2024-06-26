import { altEmailAddress, emailAddress, name, phoneNumber } from "../Utilities/constants";
import "../Styles/footer.css"

const getProfileDetailsList = (links) => {
    if (!links) {
        return <></>
    }
    return links.map((link) => (
        <a key={link.key} target="_blank" rel="noreferrer" href={link.link}>
            <img className="main-footer__icon" src={link.icon} alt={link.altProfileIcon} />
        </a>
    ))
}

const Footer = ({ links }) => (
    <footer className="main-footer">
        <div className="main-container">
            <div className="main-footer__upper">
                <div className="main-footer__row main-footer__row-1">
                    <div className="heading heading-sm main-footer__heading-sm">
                        <span>Social</span>
                    </div>
                    <div className="divider divider-sm bg-white mt-3"></div>
                    <div className="main-footer__social-cont">
                        {getProfileDetailsList(links)}
                    </div>
                </div>
                <div className="main-footer__row main-footer__row-2">
                    <div className="heading heading-sm text-lt">{name}</div>
                    <div className="divider divider-sm bg-white mt-3"></div>
                    <ul className="list-unstyled mt-4">
                        <li className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <a className="contact-text" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </li>
                        <li className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <a className="contact-text" href={`mailto:${emailAddress}`}>{emailAddress}</a>
                        </li>
                        <li className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span className="contact-text">Mumbai, India</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-footer__lower">
                Design Copyright © Ram Maheshwari
            </div>
        </div>
    </footer>
);

export default Footer;