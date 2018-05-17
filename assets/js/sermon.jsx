import React from 'react';

const iframeStyle = {
  border: 0
};

class Sermon extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    
    console.log("Clicked Sermon Modal Title! ***********");
  }

  render(){
    return (
      <article id="sermon">
      <div className="introModal">
      <h2 onClick={this.handleClick}className="major" id="sermon" >Sermon</h2>
      <div className="location" id="sermonVid" width="560" height="315"
      frameBorder="0"></div>
      </div>
      </article>
    );
  }
}

export default Sermon;
