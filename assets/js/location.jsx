import React from 'react';

const iframeStyle = {
  border: 0
};

function Location(props){
  return (
    <article id="location">
      <div className="introModal">
        <h2 className="major">Location</h2>
        <iframe className="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.7072116189884!2d-119.16234318444464!3d34.23049361576223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e84c684d7c531f%3A0x23a45aa3a44b855b!2sOxnard+Korean+Church!5e0!3m2!1sen!2sus!4v1493832673004"
          frameBorder="0" style={iframeStyle} allowFullScreen></iframe>
      </div>
    </article>
  );
}

export default Location;
