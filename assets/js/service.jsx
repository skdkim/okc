import React from 'react';

function Service(props){
  return (
  <article id="time">
    <div className="introModal">
      <h2 className="major">Service Times</h2>
      <div className="schedule">
        <div className="days">
          <div className="day">
            <p>Sunday</p>
          </div>
          <div className="times">
            <div className="details">
              <p>Morning Service: </p><p>8:00 am</p>
            </div>
            <div className="details">
              <p>Afternoon Service: </p><p>1:00 pm</p>
            </div>
          </div>
        </div>

        <div className="days">
          <div className="day">
            <p>Wednesday</p>
          </div>
          <div className="times">
            <div className="details">
              <p>Evening Service: </p><p>6:30 pm</p>
            </div>
          </div>
        </div>

        <div className="days">
          <div className="day">
            <p>Tues - Fri</p>
          </div>
          <div className="times">
            <div className="details">
              <p>Dawn Service/Prayer: </p><p>5:30 am</p>
            </div>
          </div>
        </div>

        <div className="days">
          <div className="day">
            <p>Saturday</p>
          </div>
          <div className="times">
            <div className="details">
              <p>Prayer Meeting: </p><p>6:00 am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
  );
}

export default Service;
