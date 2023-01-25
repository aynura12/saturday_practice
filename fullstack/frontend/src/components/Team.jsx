import React from "react";
import "../components/team.scss";
const Team = () => {
  return (
    <div>
      <div className="team">
        <div className="container">
          <div className="row">
            <div className="team_text">
              <p>Contacts</p>
              <h1>Our Team</h1>
            </div>
            <div className="card_left col-4 team_card">
             
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg"
                  alt=""
                />
                <h3>Velva Kopf</h3>
                <p>Biologist</p>
              
            </div>
            <div className="card_left col-4 ">
              <div className="team_card">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg"
                  alt=""
                />
                <h3>Sarah Palmer</h3>
                <p>Florist</p>
              </div>
            </div>
            <div className="card_left col-4">
              <div className="team_card">
                <img
                  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg"
                  alt=""
                />
                <h3>Jessica Swift</h3>
                <p>Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
