import { useState } from "react";
import { Link } from "react-router-dom";
import '../../CSS/header.css';
import { FaChartLine, FaSearch, FaBell, FaBars } from 'react-icons/fa'; // Import icons from react-icon

const Header = () => {
  const [isMarketsSelected, setIsMarketsSelected] = useState(false);
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="link-container">
          <Link to={"/"} className="logo-text mx-5">Bytes</Link>
          <Link to={"/"} className="header-link"><FaChartLine /></Link>s
          <Link to={"/"} className="header-link">Buy crypto</Link>
          
          <div className="hover-options">
          <Link
          to={"/"}
          className={`header-link ${isMarketsSelected ? 'selected' : ''}`}
          onMouseEnter={() => setIsMarketsSelected(true)}
          onMouseLeave={() => setIsMarketsSelected(false)}
        >
        Markets
      </Link>
            <div className="options">
              <Link to={"/abc"}>abc</Link>
              <Link to={"/abc"}>xyz</Link>
              <Link to={"/abc"}>yzx</Link>
              <Link to={"/abc"}>mln</Link>
            </div>
          </div>
          <Link to={"/"} className="header-link">Trade</Link>
          <Link to={"/"} className="header-link">Copy1</Link>
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