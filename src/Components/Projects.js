import "../Styles/heading.css"
import "../Styles/projects.css"
import { githubLinkText, viewProjectText } from "../Utilities/constants"
import githubIcon from "../StaticMedia/Images/Icons/github-icon-20.png";

const GithubButton = ({ githubLink }) => {
    if (!githubLink) {
        return <></>
    }
    return (
        <a className="projects__github-link" href={githubLink} target="_blank">
            <img src={githubIcon} alt="github icon" />
            <span className="projects__github-link-text">{githubLinkText}</span>
        </a>
    );
}

const DemoButton = ({ demoLink }) => {
    if (!demoLink) {
        return <></>
    }
    return (
        <a className="btn--med btn--theme dynamicBgClr" href={demoLink} target="_blank">{viewProjectText}</a>
    );
}

const getProjectsData = (projects) => {
    if (!projects) {
        return <></>
    }
    return projects.map((project) => {
        return (
            <div className="projects__content">
                <div className="projects__row">
                    <div className="projects__row-img-cont">
                        <img src={project.image} alt={project.altImage} className="projects__row-img" loading="lazy" />
                    </div>
                    <div className="projects__row-content">
                        <h3 className="projects__row-content-title">{project.name}</h3>
                        <p className="projects__row-content-desc">
                            {project.description}
                        </p>
                        <div className="projects__link">
                            <GithubButton githubLink={project.githubLink} />
                            <DemoButton demoLink={project.demoLink} />
                        </div>
                    </div>
                </div>
            </div>
        )
    })
}

const Projects = ({ sectionName, sectionDescription, projects }) => {
    return (
        <section id={sectionName} className="projects sec-pad">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-med">
                    <span className="heading-sec__main heading-sec__main--lt">{sectionName}</span>
                    <span className="heading-sec__sub">
                        {sectionDescription}
                    </span>
                </h2>
                {getProjectsData(projects)}
            </div>
        </section>
    );
}
export default Projects;