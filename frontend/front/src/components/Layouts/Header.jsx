import { Link } from "react-router-dom";
import '../../CSS/header.css';
import { FaChartLine, FaSearch, FaBell, FaBars } from 'react-icons/fa'; // Import icons from react-icon

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="link-container">
          <Link to={"/"} className="logo-text mx-5">Bytes</Link>
          <Link to={"/"} className="header-link"><FaChartLine /></Link>
          <Link to={"/"} className="header-link">Buy crypto</Link>
          <Link to={"/"} className="header-link">Markets</Link>
          <Link to={"/"} className="header-link">Trade</Link>
          <Link to={"/"} className="header-link">Copy</Link>
          <Link to={"/"} className="header-link">Bots</Link>
          <Link to={"/"} className="header-link">Earn</Link>
          <Link to={"/"} className="header-link">Web3</Link>
        </div>
        <div className="right-side">
          <Link to={"/"} className="header-link">Log in</Link>
          <button className='custom-btn'>Sign Up</button>
          <Link to={"/"} className="header-link"><FaSearch /></Link>
          <Link to={"/"} className="header-link"><FaBell /></Link>
          <Link to={"/"} className="header-link"><FaBars /></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;