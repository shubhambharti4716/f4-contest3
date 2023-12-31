import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { BiBookHeart } from "react-icons/bi";
import PremiumAcc from "../Assets/fluent_premium-person-20-regular.svg";
import AccountImg from "../Assets/Account.png";
import logo from "../Assets/logo.svg";
import DownArrow from "../Assets/Arrow 1.svg";
import "../Styles/Navbar.css";

const Navbar = ({ setSearchedTerm, setIsTopThreeVisible }) => {
  const [SearchedTerm, setSetSearchedTerm] = useState("");

  const handleSearchClick = () => {
    setSearchedTerm(SearchedTerm);
    setIsTopThreeVisible(true);
    setSetSearchedTerm("");
  };

  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} className="logo" alt="logo" />
        <p className="title">
          KeazoN<span className="thin">Books</span>
        </p>
      </div>
      <div className="middle">
        <div className="search-div">
          <AiOutlineSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
            className="input"
            value={SearchedTerm}
            onChange={(e) => setSetSearchedTerm(e.target.value)}
          />
        </div>
        <button className="button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
      <div className="right">
        <BiBookHeart className="icon" />
        <AiOutlineBell className="icon" />
        <img src={PremiumAcc} alt="Premium img" className="premium" />
        <div>
          <img src={AccountImg} className="account-img" alt="Acc img" />
          <img src={DownArrow} className="down-arrow" alt="Down Arrow" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
