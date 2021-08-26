import React from "react";
import { StyledContainer } from "./style";
const Footer = () => {
  return (
    <StyledContainer>
      <ul className="mail">
        <li>info@gmail.com</li>
        <li className="line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="22"
            viewBox="0 0 2 22"
          >
            <line
              id="Line_5"
              data-name="Line 5"
              y2="20"
              transform="translate(1 1)"
              fill="none"
              stroke="#202631"
              strokeLinecap="round"
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>
        </li>
        <li>
          <svg
            id="facebook"
            xmlns="http://www.w3.org/2000/svg"
            width="8.172"
            height="16.469"
            viewBox="0 0 8.172 16.469"
          >
            <path
              id="Path_99"
              data-name="Path 99"
              d="M18.7,13.577h1a.174.174,0,0,1,.174.174v6.318a.59.59,0,0,0,.59.59h2.3a.59.59,0,0,0,.59-.59V13.748a.174.174,0,0,1,.174-.174h1.664a.59.59,0,0,0,.59-.5l.387-2.313a.59.59,0,0,0-.59-.705H23.63a.274.274,0,0,1-.274-.274V8.3a.531.531,0,0,1,.59-.59h1.744a.59.59,0,0,0,.59-.59V4.78a.59.59,0,0,0-.59-.59H23.615c-3.836,0-3.739,3.09-3.739,3.541V9.882a.174.174,0,0,1-.174.174h-1a.59.59,0,0,0-.59.59V12.96a.59.59,0,0,0,.59.617Z"
              transform="translate(-18.108 -4.19)"
              fill="#202631"
            />
          </svg>
        </li>
        <li>
          {" "}
          <svg
            id="youtube"
            xmlns="http://www.w3.org/2000/svg"
            width="18.957"
            height="16.249"
            viewBox="0 0 18.957 16.249"
          >
            <path
              id="Path_96"
              data-name="Path 96"
              d="M7.047,23.822a47.917,47.917,0,0,0,6.432.427,47.918,47.918,0,0,0,6.432-.423,3.517,3.517,0,0,0,3.047-3.48V11.906a3.517,3.517,0,0,0-3.047-3.48,48.708,48.708,0,0,0-12.864,0A3.517,3.517,0,0,0,4,11.906v8.436A3.517,3.517,0,0,0,7.047,23.822ZM11.3,14.567a1.158,1.158,0,0,1,1.784-.975l2.654,1.693a.982.982,0,0,1,0,1.652l-2.654,1.693a1.158,1.158,0,0,1-1.784-.975Z"
              transform="translate(-4 -8)"
              fill="#202631"
            />
          </svg>
        </li>
      </ul>
      <ul className="margin_top">
        <li>პირობები</li>
        <li className="line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="22"
            viewBox="0 0 2 22"
          >
            <line
              id="Line_5"
              data-name="Line 5"
              y2="20"
              transform="translate(1 1)"
              fill="none"
              stroke="#202631"
              strokeLinecap="round"
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>
        </li>
        <li>კონფიდენციალურობა</li>
        <li className="line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="22"
            viewBox="0 0 2 22"
          >
            <line
              id="Line_5"
              data-name="Line 5"
              y2="20"
              transform="translate(1 1)"
              fill="none"
              stroke="#202631"
              strokeLinecap="round"
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>
        </li>
        <li>&copy; 2021 ყველა უფლება დაცულია</li>
      </ul>
    </StyledContainer>
  );
};

export default Footer;
