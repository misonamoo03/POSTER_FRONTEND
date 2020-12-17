import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item" activeClassName="active">
        홈
      </NavLink>
      <NavLink to="/map" className="item" activeClassName="active">
        내 위치 검색
      </NavLink>
      <NavLink to="/write" className="item" activeClassName="active">
        글쓰기
      </NavLink>
    </div>
  );
};

export default Header;
