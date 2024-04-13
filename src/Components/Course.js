function Course({ duration, name, grade, university }) {
    return (
        <div className="award">
            <div className="award-icon"></div>
            <div className="award-content">
                <span className="date">{duration}</span>
                <h3 className="title">{name}</h3>
                <h4 className="title">{grade}</h4>
                <p className="description">
                    {university}
                </p>
            </div>
        </div>
    );
}
export default Course;