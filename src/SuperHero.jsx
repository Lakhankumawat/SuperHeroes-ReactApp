import React from "react";
import style from "./hero.styles.css";
export default function Superhero() {
  return (
    <div classNameName="container">
      <div className="card">
        <div className="card-head">
          <img
            src="https://s5.postimg.cc/wy79025cz/nike_Logo_White.png"
            alt="logo"
            className="card-logo"
          ></img>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAQlaUD0y9E8bgMzQdR99-YQvRNOX8T4tJsQ&usqp=CAU"
            alt="Shoe"
            className="product-img"
          ></img>
          <div className="product-detail">
            <h2>⚡</h2>
          </div>
          <span className="back-text">FAS</span>
        </div>
        <div className="card-body">
          <div className="product-desc">
            <span className="product-title">
              THUNDER<b>GOD</b>
              <span className="badge">New</span>
            </span>
            <span className="product-caption">Awesome Collection</span>
            <span className="product-rating" role="img" aria-label="img">
              ⭐⭐⭐⭐⭐
            </span>
          </div>
          <div className="product-properties">
            <span className="product-price">
              POWER<b>23,453 Watts</b>
            </span>
            <h3 className="product-des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              officia illo beatae architecto ad eos.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
