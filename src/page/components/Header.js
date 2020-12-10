import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="item">
        홈
      </Link>
      <Link to="/write" className="item">
        글쓰기
      </Link>
    </div>
  );
};

export default Header;
