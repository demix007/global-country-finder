import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

const Header = () => (
  <div className="header">
    <div className="header_logo">
      <Link to="/" className="header__link"><h3>Welcome To The Global Village !</h3></Link>
    </div>

    <div className="globe">
      <i className="fa-solid fa-globe" aria-hidden="true" />
      {' '}
      <span>The Globe</span>
    </div>
  </div>
);

export default Header;
