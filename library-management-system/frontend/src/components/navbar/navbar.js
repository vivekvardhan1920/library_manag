import React from "react";
import "./navbar.css";
import mylogo from "./librarylogolook.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { Route, Routers, Navigate, Link } from "react-router-dom";
import LoginDialog from "../login_page/login";
import { useState } from "react";

export const Navbar = () => {
  const [openLoginDialog, setOpenLogicDialog] = useState(false);
  const handleLoginSubmit = (username, password) => {
    console.log(username, password);
    setOpenLogicDialog(false)
  };
  const handleLoginClose = () => {
    setOpenLogicDialog(false);
  };
  return (
    <div className="main_header">
      <div className="logo">
        <img src={mylogo} alt="logo" />
      </div>
      <div className="search-box">
        <input type="text" value="" placeholder="Book, Author..."></input>
        <button>
          <AiOutlineSearch />
        </button>
      </div>
      <div className="user">
        <div className="icon">
          <FiLogIn />
        </div>
        <div>

          <button
            className="btn"
            onClick={() => {
              setOpenLogicDialog(true);
            }}
          >
            LOGIN
          </button>
          <button
            className="btn"
          >
            SIGN UP
          </button>
        </div>
      </div>
      <LoginDialog
        open={openLoginDialog}
        handleSubmit={handleLoginSubmit}
        handleClose={handleLoginClose}
      />
    </div>
  );
};
