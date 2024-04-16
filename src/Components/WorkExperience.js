import "../Styles/work-experience.css"
import "../Styles/heading.css"
import { workExperiences } from "../Utilities/constants";
import Experience from "./Experience";

const getExperienceDetails = () => {
    if (!workExperiences) {
        return <></>
    }
    return workExperiences.map((experience) => (
        <Experience
            key={experience.key}
            position={experience.position}
            organization={experience.organization}
            description={experience.description}
            duration={experience.duration}
        />
    ))
}

const WorkExperience = ({ sectionName }) => (
    <section id="workExperience" className="work-experience sec-pad">
        <div className="main-container flex-container">
            <h2 className="heading heading-sec heading-sec__mb-med col-12">
                <span className="heading-sec__main heading-sec__main--lt">{sectionName}</span>
            </h2>
            {getExperienceDetails()}
        </div>
    </section>
);

export default WorkExperience;