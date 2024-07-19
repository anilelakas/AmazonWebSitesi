import React from "react";
import amazonLogo from "./amazonLogo.jpeg";
import PropTypes from "prop-types";
import "./Navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavbarComponent(props) {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img src={amazonLogo} style={{ height: "75px", width: "100x" }} />
        </div>
        <ul className="nav-links">
          <li>
            <a>Ana Sayfa</a>
          </li>
          <li>
            <a>Teslimat Adresi Seçin</a>
          </li>
          <li>
            <input type="text" placeholder="Search here" />
          </li>
          <li>
            <a>{props.isim}</a>
          </li>
          <li>
            <a>İadeler ve Sipaişler</a>
          </li>
          <li>
            <ShoppingCartIcon
              className="cartItem"
              style={{ cursor: "pointer" }}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

NavbarComponent.propTypes = {
  isim: PropTypes.string.isRequired,
};
NavbarComponent.defaultProps = {
  isim: "Elon Musk",
};

export default NavbarComponent;
