import React from "react";
import "../components/event.scss";
const Event = () => {
  return (
    <div className="event">
      <div className="container">
        <div className="row">
          <div className="event_text">
            <p>Devoted to wonderful beauty</p>
            <h1>Events Pricing</h1>
          </div>
          <div className="col-4">
            <div className="card">
             <h5>$16 <span>per table</span></h5>
              <h3>Birthday Events</h3>
              <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <button>Show now</button>
            </div>
          </div>
          <div className="col-4"> <div className="card">
             <h5>$31 <span>per table</span></h5>
              <h3>Wedding Events</h3>
              <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <button>Show now</button>
            </div></div>
          <div className="col-4"> <div className="card">
             <h5>$52 <span>per table</span></h5>
              <h3>Party Events</h3>
              <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <button>Show now</button>
            </div></div>
        </div>
      </div>
    </div>
  );
};

export default Event;
