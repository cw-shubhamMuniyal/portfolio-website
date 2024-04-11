import './App.css';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Header from './Components/Header';
import { description, imageLogo, name } from './Utilities/constants';

function App() {
  return (
    <div className="App">
      <Header name={name} imageLogo={imageLogo}/>
      <AboutMe name={name} description={description} />
      <Contact />
    </div>
  );
}

export default App;
