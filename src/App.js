import "./Styles/heading.css"
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Header from './Components/Header';
import { courseDetails, description, imageLogo, name } from './Utilities/constants';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header name={name} imageLogo={imageLogo} />
      <AboutMe name={name} description={description} />
      <Education sectionName="Education" courseDetails={courseDetails} />
      <Contact sectionName="Contact" />
      <Footer />
    </div>
  );
}

export default App;
