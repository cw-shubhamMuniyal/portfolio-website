import "../Styles/education.css"

function Course({ duration, name, grade, university }) {
    return (
        <div className="award">
            <div className="award-icon"></div>
            <div className="award-content">
                <span className="date">{duration}</span>
                <h5 className="title">{name}</h5>
                <h6 className="title">{grade}</h6>
                <p className="description">
                    {university}
                </p>
            </div>
        </div>
    );
}
export default Course;