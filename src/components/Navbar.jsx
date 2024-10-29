import React, { useState } from 'react';
import './Navbar.css';
import web from '../assets/web.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <nav className='navBar' style={{backgroundImage: `url(${web})`}}>
      <div className="logo">LOGO</div>
      <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
        <li><a href="#" style={menuItemStyle(activeItem === 'Home')} onClick={() => handleItemClick('Home')}>Home</a></li>
        <li><a href="#" style={menuItemStyle(activeItem === 'About')} onClick={() => handleItemClick('About')}>About</a></li>
        <li><a href="#" style={menuItemStyle(activeItem === 'Contact')} onClick={() => handleItemClick('Contact')}>Contact</a></li>
      </ul>
      <div className="Buttons">
        <button>Login</button>
        <button>Sign Up</button>
      </div>

      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

const menuItemStyle = (activeItem) => ({
  padding: '1rem',
  cursor: 'pointer',
  fontWeight: activeItem === 'Home' || activeItem === 'About' || activeItem === 'Contact' ? 'bold' : 'normal',
  // backgroundColor: active ? '#570711' : 'transparent',
  
  // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
});


export default Navbar;