import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__description__container">
        <div className="cards__desciption">
          <h2>#OurHawkerCulture</h2>
          <p>
            Now inscribed by UNESCO on the Representative List of the Intangible
            Cultural Heritage of Humanity. Find out what this inscription means
            for Singapore, and how you can do your part to celebrate this
            integral part of our living heritage.
          </p>
        </div>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Hawker_Feature_1.jpg"
              text="Inscription of Hawker Culture"
              label="Hawker"
              path="https://www.oursgheritage.gov.sg/hawker-culture-in-singapore/inscription-of-hawker-culture"
            />
            <CardItem
              src="images/Hawker_Feature_2.jpg"
              text="Submission of Nomination to UNESCO"
              label="Hawker"
              path="https://www.oursgheritage.gov.sg/hawker-culture-unesco-submission"
            />
            <CardItem
              src="images/Hawker_Feature_3.jpg"
              text="Public Contributions & Community Support"
              label="Community"
              path="https://www.oursgheritage.gov.sg/hawker-culture-public-support"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
