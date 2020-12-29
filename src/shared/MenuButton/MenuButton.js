import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './MenuButton.css';

export default function MenuButton() {
  return (
    <div className={'menu-button-container'}>
      <Menu right>
        <Link to='/'>Home</Link>
        <Link to='/work'>Work</Link>
        <Link to='/contact'>Contact</Link>
      </Menu>
    </div>
  );
}
