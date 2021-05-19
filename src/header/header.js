import React from 'react';


const Header = (props) => {
  

  return (
    <div >
      <header className="header" color="light" light expand="md">
        <nav>
            <a href='/'>Home</a>
            <a href='/blog'>Blog</a>
            <a href="www.github.com/Snehasawla">Github</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;