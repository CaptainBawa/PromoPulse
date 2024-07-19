import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const handleListItemClick = () => {
      setMenuVisible(false);
    };

    const listItems = document.querySelectorAll('.nav-list-item');
    listItems.forEach((item) => {
      item.addEventListener('click', handleListItemClick);
    });

    return () => {
      listItems.forEach((item) => {
        item.removeEventListener('click', handleListItemClick);
      });
    };
  }, []);

  return (
    <header>
      <a className="kent" href="/">Kent World</a>
      <div className="mobile-toggle">
        <button type="button" onClick={handleToggleMenu} aria-label="Toggle Menu">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
      <nav className={`nav-menu ${menuVisible ? 'visible' : ''}`}>
        <button type="button" onClick={handleToggleMenu}>
          X
        </button>
        <ul>
          <li className="nav-list-item"><a href="/">HOME</a></li>
          <li className="nav-list-item"><a href="#about-and-business">ADD BUSINESS</a></li>
          <li className="nav-list-item"><a href="#about-and-business">ABOUT US</a></li>
          <li className="nav-list-item"><a href="#contact-us">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
