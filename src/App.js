import './App.css';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import { description, name } from './Utilities/constants';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe name={name} description={description} />
    </div>
  );
}

export default App;
