import React, { useContext } from "react";
import "./product.css";
import product1 from "../images/iphone.jpg";
import product2 from "../images/jordan.jpg";
import product3 from "../images/airfryer.jpg";
import product4 from "../images/airpods.jpg";
import product5 from "../images/macbook.jpg";
import product6 from "../images/samsonite.jpg";
import product7 from "../images/tv.jpg";
import product8 from "../images/watch.jpg";
import product9 from "../images/crocs.jpg";

export const Product = () => {
  return (
    <div className="products">
      <div className="product">
        <img src={product1} style={{ margin: "65px" }} />
        <div className="description">
          <p>
            <b>Apple iPhone 14</b>
          </p>
          <p>700$</p>
        </div>
        <button className="addToCartBttn"> Sepete Ekle</button>
      </div>
      <div className="product">
        <img src={product2} />
        <div className="description">
          <p>
            <b>Jordan Shoe</b>
          </p>
          <p>315$</p>
        </div>
        <button className="addToCartBttn"> Sepete Ekle</button>
      </div>
      <div className="product">
        <img src={product3} />
        <div className="description">
          <p>
            <b>Philips Airfryer</b>
          </p>
          <p>209$</p>
        </div>
        <button className="addToCartBttn"> Sepete Ekle</button>
      </div>
      <div className="product">
        <img src={product4} />
        <div className="description">
          <p>
            <b>Apple Airpods 3</b>
          </p>
          <p>217$</p>
        </div>
        <button className="addToCartBttn"> Sepete Ekle</button>
      </div>
      <div className="product">
        <img src={product5} />
        <div className="description">
          <p>
            <b>Apple Macbook Pro</b>
          </p>
          <p>1217$</p>
        </div>
        <button className="addToCartBttn"> Sepete Ekle</button>
      </div>
      <div className="product">
        <img src={product6} />
        <div className="description">
          <p>
            <b>Samsonite</b>
          </p>
          <p>200$</p>
        </div>
        <button className="addToCartBttn"> Sepete Ekle</button>
      </div>
      <div className="product">
        <img src={product7} />
        <div className="description">
          <p>
            <b>Sony Bravia OLED TV</b>
          </p>
          <p>2500$</p>
        </div>
        <button className="addToCartBttn"> Sepete Ekle</button>
      </div>
      <div className="product">
        <img src={product8} />
        <div className="description">
          <p>
            <b>Apple Watch</b>
          </p>
          <p>399.99$</p>
        </div>
        <button className="addToCartBttn"> Sepete Ekle</button>
      </div>
      <div className="product">
        <img src={product9} />
        <div className="description">
          <p>
            <b>Crocs Terlik</b>
          </p>
          <p>50$</p>
        </div>
        <button className="addToCartBttn"> Sepete Ekle</button>
      </div>
    </div>
  );
};
