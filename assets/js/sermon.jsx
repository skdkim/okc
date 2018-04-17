import React from 'react';

const iframeStyle = {
  border: 0
};

function Sermon(props){
  return (
    <article id="sermon">
      <div className="introModal">
        <h2 className="major">Sermon</h2>
        <iframe className="location"
          src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG"
          frameBorder="0" style={iframeStyle} allowFullScreen></iframe>      </div>
    </article>
  );
}

export default Sermon;
