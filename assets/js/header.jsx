import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <div>
        <div class="logo">
          <span class="icon">
            <img class="cross" src="./images/cross.png" alt=""/>
          </span>
        </div>
        <div class="content">
          <div class="inner">
            <h1>Oxnard Korean Church</h1>
            <p>사랑하는 자여 네 영혼이 잘 됨같이 네가 범사에 잘 되고 <br />
            강건하기를 내가 간구하노라 (요한삼서 1:2)</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#intro">Service</a></li>
            <li><a href="#work">Location</a></li>
            // <li><a href="#about">About</a></li>
            // <li><a href="#contact">Contact</a></li>
            // <li><a href="#elements">Elements</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
