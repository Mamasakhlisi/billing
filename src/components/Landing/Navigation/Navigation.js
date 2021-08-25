import React from "react";
import { Link } from "react-router-dom";
import { StyledNavigation, StyledLogo, StyledSignInButton,StyledInfoButton } from "./style";

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledLogo>
        <span>B</span>
      </StyledLogo>
      <ul>
 
        <li>
          <Link to="">პაკეტები</Link>
        </li>
        <li>
          <Link to="">სიახლეები</Link>
        </li>
          <li>
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
    </StyledNavigation>
  );
};

export default Navigation;
