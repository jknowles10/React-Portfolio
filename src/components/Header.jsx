import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBar from './UI/HeaderBar';

function Header() {
  return (
    <HeaderBar
    links={[
      <Link key={1} to="/">
        About
      </Link>,
      <Link key={2} to="/PortfolioPage">
      Portfolio
    </Link>
    ]}
    />
  );
}

export default Header;
