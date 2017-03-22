
import React from 'react';
import Service from './service';
import Location from './location';

const mainDivStyle = {
  display: 'none'
};

class Header extends React.Component {
  render(){
    return (
      <div id="wrapper">
        <header id="header">
          <div className="logo">
            <span className="icon">
              <img className="cross" src="./images/cross.png" alt=""/>
            </span>
          </div>
          <div className="content">
            <div className="inner">
              <h1>Oxnard Korean Church</h1>
              <p>사랑하는 자여 네 영혼이 잘 됨같이 네가 범사에 잘 되고 <br />
              강건하기를 내가 간구하노라 (요한삼서 1:2)</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#intro">Service</a></li>
            <li><a href="#work">Location</a></li>
          </ul>
        </nav>
        </header>

        <div id="main" style={mainDivStyle}>
          <Service />
          <Location />
        </div>


        <footer id="footer">
          <p></p>
        </footer>
      </div>
    );
  }
}

export default Header;
