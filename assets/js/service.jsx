import React from 'react';

function Service(props){
  return (
  <article id="intro">
    <div class="introModal">
      <h2 class="major">Service Times</h2>
      <div class="schedule">
        <div class="days">
          <div class="day">
            <p>Sunday</p>
          </div>
          <div class="times">
            <div class="details">
              <p>Morning Service: </p><p>8:00 am</p>
            </div>
            <div class="details">
              <p>Afternoon Service: </p><p>1:00 pm</p>
            </div>
          </div>
        </div>

        <div class="days">
          <div class="day">
            <p>Wednesday</p>
          </div>
          <div class="times">
            <div class="details">
              <p>Evening Service: </p><p>6:30 pm</p>
            </div>
          </div>
        </div>

        <div class="days">
          <div class="day">
            <p>Tues - Fri</p>
          </div>
          <div class="times">
            <div class="details">
              <p>Dawn Service/Prayer: </p><p>5:30 am</p>
            </div>
          </div>
        </div>

        <div class="days">
          <div class="day">
            <p>Saturday</p>
          </div>
          <div class="times">
            <div class="details">
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
