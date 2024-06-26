import "../Styles/about-me.css"
import { profileLinks } from "../Utilities/constants";
import Mouse from "./Mouse";
import QuickAccessBar from "./QuickAccessBar";
function AboutMe({ name, description }) {
    return (
        <section className="about-me">
            <div className="about-me__content">
                <h1 className="heading-primary">{`Hey, I'm ${name}`}</h1>
                <div className="about-me__info">
                    <p className="about-me__info-text">
                        {description}
                    </p>
                </div>
                <div className="about-me__cta">
                    <a href="/#projects" className="button button--bg">Projects</a>
                </div>
            </div>
            <QuickAccessBar links={profileLinks}/>
            <Mouse />
        </section>
    );
}

export default AboutMe;