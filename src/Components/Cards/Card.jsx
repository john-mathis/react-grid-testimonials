import React from "react";
import "..//Cards/Card.css";

const Card = (userData) => {
  const data = userData.data;

  const mack = data.map((list) => {
    const { id, image, name, status, header, caption } = list;
    return (
      <React.Fragment key={id}>
        <section id={id} className="card-container" key={id}>
          <div className="info-container">
            <div className="img-container">
              <img className="avi" src={image} alt="profile avi" />
            </div>
            <div className="name-container">
              <p className="name">{name}</p>
              <p className="status">{status}</p>
            </div>
          </div>

          <div className="testimonial-container">
            <h3 className="header">{header}</h3>
            <p className="review">{caption}</p>
          </div>
        </section>
      </React.Fragment>
    );
  });

  return mack;
};

export default Card;
