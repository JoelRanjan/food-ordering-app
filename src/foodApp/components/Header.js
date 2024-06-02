import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ContextData from "../utils/contextData";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Header = () => {
  const [buttonContent, setButtonContent] = useState("login");

  const userName = useContext(ContextData);

  const buttonStatus = () => {
    buttonContent === "login"
      ? setButtonContent("logout")
      : setButtonContent("login");
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg w-10/12 m-auto">
      <img
        src="https://pic.onlinewebfonts.com/thumbnails/icons_421810.svg"
        alt="image"
        className="w-12"
      />
      <h3>Select Your Delicious Food</h3>
      <div>
        <ul className="flex align-middle">
          <li className="mr-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-2">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mr-2">
            <Link to="/grossery">Grossery</Link>
          </li>
          <li className="mr-2">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
        </ul>
        {/* <button onClick={buttonStatus}>{buttonContent}</button> */}
        {/* {userName ? <h1>{userName}</h1> : ""}
        <h1>{userName}</h1> */}
      </div>
    </div>
  );
};

export default Header;
