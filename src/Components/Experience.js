const Experience = ({ position, organization, description, duration }) => {
    return (
        <div className="col-md-6 col-sm-12 card-padding">
            <div className="work-experience-card mx-0 p-4 mb-5">
                <div className="mr-auto work-experience-font">
                    <h3 className="mb-4">
                        <i className="fa-solid fa-browser"></i>
                        {position}
                    </h3>
                    <h4 className="mb-4">{organization}</h4>
                    <p className="mb-4">{description}</p>
                </div>
                <div className="text-md-right work-experience-font">
                    <span className="color-purple">{duration}</span>
                </div>
            </div>
        </div>
    )
}
export default Experience;