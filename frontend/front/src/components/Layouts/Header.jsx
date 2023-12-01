import { useState } from "react";
import { Link } from "react-router-dom";
import '../../CSS/header.css';
import { FaChartLine, FaSearch, FaBell, FaBars} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBullseye, faChartSimple, faComputer, faWallet, faNewspaper} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMarketsSelected, setIsMarketsSelected] = useState(false);

  let percenatge = 0.31;

  return (
    <header className="header">
      <div className="header-container">

        <div className="link-container">
          <Link to={"/"} className="logo-text mx-5">Bytes</Link>
          <Link to={"/"} className="header-link"><FaChartLine /></Link>
          <Link to={"/"} className="header-link">Buy crypto</Link>

          <div className="hover-options">
          <Link to={"/"}
                className={`header-link ${isMarketsSelected ? 'selected' : ''}`}
                onMouseEnter={() => setIsMarketsSelected(true)}
                onMouseLeave={() => setIsMarketsSelected(false)}
          >Markets
          </Link>
            {( isMarketsSelected &&
            <div className="options">
              <p className="mx-4 my-3">Market is up by {percenatge} in the last 24 hours.</p>
              <div className="option-item">
              <FontAwesomeIcon icon={faBullseye} />
                <Link to={"/"} className="header-link">Opportunities</Link>
              </div>
              <div className="option-item">
                <FontAwesomeIcon icon={faChartSimple} /><Link to={"/"} className="header-link">Markets</Link>
              </div>
              <div className="option-item">
                <FontAwesomeIcon icon={faComputer} /><Link to={"/"} className="header-link">Market Data</Link>
              </div>
              <div className="option-item">
                <FontAwesomeIcon icon={faWallet} /><Link to={"/"} className="header-link">Insights</Link>
              </div>
              <div className="option-item">
                <FontAwesomeIcon icon={faNewspaper} /><Link to={"/"} className="header-link">News</Link>
              </div>
            </div>
              )}
          </div>
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