import React from "react";
import { RotateRightOutlined, CheckOutlined } from "@ant-design/icons";
import { StyledContainer, StyledPacket,StyledSectionTitle } from "./style";
const Packets = () => {
  return (
    <>
    <StyledSectionTitle>პაკეტები</StyledSectionTitle>
        <StyledContainer>
      <StyledPacket>
        <div className="level">
          <div className="logo">B</div>
          <h3>საბაზისო</h3>
        </div>
        <div className="price">
          <h4>
            18₾ <span>/ თვე</span>
          </h4>
        </div>
        <div>
          <ul>
            <li>
              <h4 className="check">
                <CheckOutlined />
              </h4>
              მომხმარებლის შექმნა
            </li>
            <li>
              <h4 className="check">
                <CheckOutlined />
              </h4>
              კონტრაგენტები
            </li>
          </ul>
        </div>
        <div className="submit">
          <button>
            <RotateRightOutlined /> პაკეტის დაჯავშნა
          </button>
        </div>
      </StyledPacket>

      <StyledPacket>
        <div className="level">
          <div className="logo">B</div>
          <h3>მედიუმი</h3>
        </div>
        <div className="price">
          <h4>
            55₾ <span>/ თვე</span>
          </h4>
        </div>
        <div>
          <ul>
            <li>
              <h4 className="check">
                <CheckOutlined />
              </h4>
              მომხმარებლის შექმნა
            </li>
            <li>
              <h4 className="check">
                <CheckOutlined />
              </h4>
              კონტრაგენტები
            </li>
            <li>
              <h4 className="check">
                <CheckOutlined />
              </h4>
              ინვოისი
            </li>
          </ul>
        </div>
        <div className="submit">
          <button>
            <RotateRightOutlined /> პაკეტის დაჯავშნა
          </button>
        </div>{" "}
      </StyledPacket>

      <StyledPacket>
        <div className="level">
          <div className="logo">B</div>
          <h3>პრო</h3>
        </div>
        <div className="price">
          <h4>
            120₾ <span>/ თვე</span>
          </h4>
        </div>
        <div>
          <ul>
            <li>
              <h4 className="check">
                <CheckOutlined />
              </h4>
              მომხმარებლის შექმნა
            </li>
            <li>
              <h4 className="check">
                <CheckOutlined />
              </h4>
              კონტრაგენტები
            </li>
            <li>
              <h4 className="check">
                <CheckOutlined />
              </h4>
              ინვოისი
            </li>
            <li>
              <h4 className="check">
                <CheckOutlined />
              </h4>
              ბუღალტერია
            </li>
          </ul>
        </div>
        <div className="submit">
          <button>
            <RotateRightOutlined /> პაკეტის დაჯავშნა
          </button>
        </div>{" "}
      </StyledPacket>
    </StyledContainer>
    </>
  );
};

export default Packets;
