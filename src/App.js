import "./Styles/heading.css"
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Header from './Components/Header';
import { courseDetails, description, imageLogo, name, Projects } from './Utilities/constants';
import Footer from './Components/Footer';
import WorkExperience from "./Components/WorkExperience";
import ProjectsComponent from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Header name={name} imageLogo={imageLogo} />
      <AboutMe name={name} description={description} />
      <WorkExperience sectionName="Work Experience" />
      <ProjectsComponent sectionName="projects" sectionDescription="Here you will find my personal projects. Also projects built in unversity and through internships"
        projects={Projects}
      />
      <Education sectionName="Education" courseDetails={courseDetails} />
      <Contact sectionName="Contact" />
      <Footer />
    </div>
  );
}

export default App;
