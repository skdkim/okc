import React from 'react';

const iframeStyle = {
  border: 0
};

function Sermon(props){
  return (
    <article id="sermon">
      <div className="introModal">
        <h2 className="major" id="sermon" >Sermon</h2>
        <iframe classname="location" id="sermonVid" width="560" height="315" 
          src="https://www.youtube.com/embed/YK0NlFvDc2I?rel=0"
          frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </article>
  );
}

export default Sermon;
