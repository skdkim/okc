import React from 'react';

const iframeStyle = {
  border: 0
};

function Sermon(props){
  return (
    <article id="sermon">
      <div className="introModal">
        <h2 className="major" id="sermon" >Sermon</h2>
        <div className="location" id="sermonVid" width="560" height="315"
          frameBorder="0"></div>
      </div>
    </article>
  );
}

export default Sermon;
