import "../Styles/education.css"
import "../Styles/heading.css"
import Course from "./Course";

const getCoursenDetails = (courseDetails) => {
    if (courseDetails) {
        return courseDetails.map((course) => (
            <Course
                duration={course.duration}
                name={course.name}
                grade={course.grade}
                university={course.university}
            />
        ))
    }
}

const Education = ({ sectionName, courseDetails }) => (
    <section id="education" className="education sec-pad">
        <div className="main-container">
            <h2 className="heading heading-sec heading-sec__mb-med">
                <span className="heading-sec__main heading-sec__main--lt">{sectionName}</span>
            </h2>
            <div className="main-award award-box">
                {getCoursenDetails(courseDetails)}
            </div>
        </div>
    </section>
);

export default Education;