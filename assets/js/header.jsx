
import React from 'react';
import Service from './service';
import Location from './location';
import Sermon from './sermon';

const mainDivStyle = {
  display: 'none'
};

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      buttonStatus : "Play"
    }

    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handlePauseClick(){
    // e.preventDefault();
    pauseVideo();
    // console.log(onPlayerStateChange(e));
    console.log("Clicked pause OKC title on home page *************");
  }

  handlePlayClick(){
    playVideo();
    console.log("Clicked play OKC title on home page *************");
  }

  handleClick(){
    if (getPlayerState() === 1){
      console.log("pausing video");
      pauseVideo();
      this.setState({buttonStatus:"Play"})
    } else if (getPlayerState() != 1){
      console.log("playing video");
      playVideo();
      this.setState({buttonStatus:"Pause"})
    } else {
      console.log("ambiguous state: " + getPlayerState());
    }
  }

  // handleToggleClick(){
  //   if
  // }
  // -1 (unstarted)
  // 0 (ended)
  // 1 (playing)
  // 2 (paused)
  // 3 (buffering)
  // 5 (video cued).
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
              <h1 onClick={this.handlePauseClick}>Oxnard Korean Church</h1>
              <p onClick={this.handlePlayClick}>사랑하는 자여 네 영혼이 잘 됨같이 네가 범사에 잘 되고 <br />
              강건하기를 내가 간구하노라 (요한삼서 1:2)</p>
              <button onClick={this.handleClick}>{this.state.buttonStatus}</button>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#time">Service</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#sermon">Sermon</a></li>
          </ul>
        </nav>
        </header>

        <div id="main" style={mainDivStyle}>
          <Service />
          <Location />
          <Sermon />
        </div>


        <footer id="footer">
          <p></p>
        </footer>
      </div>
    );
  }
}

export default Header;
