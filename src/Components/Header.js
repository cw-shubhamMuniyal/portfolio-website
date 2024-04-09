import Navbar from "./Navbar";
import '../Styles/Header.css';

function Header({ name, imageLogo }) {
  return (
    <div className="header">
      <Navbar name={name} imageSrc={imageLogo} />
    </div>
  );
}

export default Header;