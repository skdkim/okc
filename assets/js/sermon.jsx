import React from 'react';

const iframeStyle = {
  border: 0
};

function Sermon(props){
  return (
    <article id="sermon">
      <div className="introModal">
        <h2 className="major" id="sermon" >Sermon</h2>
        <iframe className="location" id="sermonVid" width="560" height="315"
          src="https://www.youtube.com/embed/edsyf7po4F0?rel=0"
          frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    </article>
  );
}

export default Sermon;
