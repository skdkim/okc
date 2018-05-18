import React from 'react';

const iframeStyle = {
  border: 0
};

class Sermon extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      buttonStatus : "Play"
    }
    this.handleClick = this.handleClick.bind(this);
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

  render(){
    return (
      <article id="sermon">
        <div className="introModal">
          <h2 onClick={this.handleClick}className="major" id="sermon" >Sermon</h2>
          <button>{this.state.buttonStatus}</button>
          <div className="location" id="sermonVid" width="560" height="315"
          frameBorder="0"></div>
        </div>
      </article>
    );
  }
}

export default Sermon;
