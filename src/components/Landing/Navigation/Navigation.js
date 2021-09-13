import React, { useState } from "react";
// packages
import { Link } from "react-router-dom";

// components
import Auth from '@CLanding/Auth/Auth'

// styles
import {
  StyledNavigation,
  StyledLogo,
  StyledSignInButton,
  StyledBurger,
  StyledDropdownMenu,
  StyledSignUpButton
} from "./style";

import imageHero from "@Assets/png/lines.png";
const Navigation = () => {
  const [visibleAuth, setVisibleAuth] = useState(false);
  const [authType, setAuthType] = useState(null);

  const [toggle, setToggle] = useState(false);

  const activeNavigationHandler = () => {
    setToggle(!toggle);
  };

  const setVisibleAuthHandler = (type) => {
    setVisibleAuth(true)
    setAuthType(type)

  }
  const onClose = () => {
    setVisibleAuth(false);
  };

  return (
    <>
    <Auth visibleAuth={visibleAuth} onClose={onClose} authType={authType}/>
      <StyledNavigation>
        <StyledLogo>
          <span>B</span>
        </StyledLogo>
        <ul>
        <li className="link">
            <Link to="dashboard">დეშბორდი</Link>
          </li>
          <li className="link">
            <Link to="packets">პაკეტები</Link>
          </li>
          <li className="link">
            <Link to="news">სიახლეები</Link>
          </li>

          <li>
            {" "}
            <StyledBurger onClick={activeNavigationHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.136"
                height="15.424"
                viewBox="0 0 23.136 15.424"
              >
                <path
                  id="Icon_metro-menu"
                  data-name="Icon metro-menu"
                  d="M6.427,25.707H29.563V23.136H6.427v2.571Zm0-6.427H29.563V16.71H6.427V19.28Zm0-9v2.571H29.563V10.283H6.427Z"
                  transform="translate(-6.427 -10.283)"
                  fill="#202631"
                />
              </svg>
            </StyledBurger>
          </li>
          <li>
            {" "}
            <StyledSignUpButton onClick={() => setVisibleAuthHandler(1)}>
              რეგისტრაცია
            </StyledSignUpButton>
          </li>
          <li>
            <StyledSignInButton onClick={() => setVisibleAuthHandler(0)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.223"
                height="15.064"
                viewBox="0 0 16.223 15.064"
              >
                <path
                  id="Icon_metro-user"
                  data-name="Icon metro-user"
                  d="M13.769,16.261V15.3A5.176,5.176,0,0,0,16.087,11c0-2.88,0-5.215-3.476-5.215S9.134,8.119,9.134,11A5.176,5.176,0,0,0,11.451,15.3v.956C7.521,16.582,4.5,18.513,4.5,20.848H20.722c0-2.335-3.022-4.267-6.953-4.588Z"
                  transform="translate(-4.499 -5.784)"
                  fill="#e5e3f0"
                />
              </svg>
            
              შესვლა
     
            </StyledSignInButton>
          </li>
 
        </ul>
      </StyledNavigation>
      <StyledDropdownMenu toggle={toggle} className="toggle_menu">
        <img src={imageHero} alt="img" />
        <ul>
          <li>          <StyledBurger onClick={activeNavigationHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23.136"
              height="15.424"
              viewBox="0 0 23.136 15.424"
            >
              <path
                id="Icon_metro-menu"
                data-name="Icon metro-menu"
                d="M6.427,25.707H29.563V23.136H6.427v2.571Zm0-6.427H29.563V16.71H6.427V19.28Zm0-9v2.571H29.563V10.283H6.427Z"
                transform="translate(-6.427 -10.283)"
                fill="#202631"
              />
            </svg>
          </StyledBurger></li>
          <li>
            {" "}
            <StyledLogo className="logo">
              <span>B</span>
            </StyledLogo>
          </li>
          <li className="link">
            <Link to="">პაკეტები</Link>
          </li>
          <li className="link">
            <Link to="">სიახლეები</Link>
          </li>
          <li>
            {" "}
            <StyledSignInButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.223"
                height="15.064"
                viewBox="0 0 16.223 15.064"
              >
                <path
                  id="Icon_metro-user"
                  data-name="Icon metro-user"
                  d="M13.769,16.261V15.3A5.176,5.176,0,0,0,16.087,11c0-2.88,0-5.215-3.476-5.215S9.134,8.119,9.134,11A5.176,5.176,0,0,0,11.451,15.3v.956C7.521,16.582,4.5,18.513,4.5,20.848H20.722c0-2.335-3.022-4.267-6.953-4.588Z"
                  transform="translate(-4.499 -5.784)"
                  fill="#e5e3f0"
                />
              </svg>
              შესვლა
            </StyledSignInButton>
          </li>

        </ul>
      </StyledDropdownMenu>
    </>
  );
};

export default Navigation;
