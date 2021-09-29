import React, { useState } from "react";
import { Link, useRouteMatch } from 'react-router-dom'
import {
  CaretDownOutlined,
  FileProtectOutlined,
  SolutionOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  StyledContainer,
  StyledLogo,
  StyledLogoContainer,
  StyledNavUl,
  StyledLink,
  StyledDropdownUl,
  StyledPerson,
  StyledDropdownLi
} from "./style";

const Menu = ({ activeBar }) => {
  const [activeLink, setActiveLink] = useState(0);
  const [activeLinkDropdown, setActiveLinkDropdown] = useState(0);
  const links = [
    {
      id: 1,
      title: "დოკუმენტწარმოება",
      dropdown: false,
      to: "document",
      icon: <FileProtectOutlined />,
    },
    {
      id: 2,
      title: "კონტრაგენტები",
      dropdown: false,
      to: "contragents",
      icon: <SolutionOutlined />,
    },
    {
      id: 3,
      title: "პარამეტრები",
      dropdown: true,
      icon: <SettingOutlined />,
      dropLink: [
        {
          id: 4,
          title: "მომხმარებლები",
          to: "users",
          dropdown: false,
          icon: <UserOutlined />,
        },
        {
          id: 5,
          title: "სამართლებრივი ფორმა",
          to: "users",
          dropdown: false,
          icon: <UserOutlined />,
        },

      ],
    },
  ];

  const setLinkActiveHandle = (id, type) => {

    if (type) {
      setActiveLinkDropdown(id);

    } else {
      activeLink !== id && setActiveLink(id);
      setActiveLinkDropdown(0)
    }
  };
  const { url, path } = useRouteMatch();
  console.log(url, path)
  return (
    <StyledContainer activeBar={activeBar}>
      <StyledLogoContainer>
        <StyledLogo>B</StyledLogo>
        <StyledPerson>
          <span>დავით მამასახლისი</span>{" "}
          <span className="type">Front-End Developer</span>
        </StyledPerson>
      </StyledLogoContainer>
      <nav>
        <StyledNavUl>
          {links.map((item) => (
            <div key={item.id} style={{ width: "100%" }}>
              <StyledLink
                active={url === `/dashboard/${item.to}`}
                activeDropdown={activeLinkDropdown}
                key={item.id}
                onClick={() => setLinkActiveHandle(item.id, false)}
              >
               {item.to ? <Link to={`/dashboard/${item.to}`}>

<span>
  <label>
    <div className="icon">{item.icon}</div> {item.title}
  </label>{" "}
  {item.dropdown && <CaretDownOutlined />}
</span>
</Link> : <a>

<span>
  <label>
    <div className="icon">{item.icon}</div> {item.title}
  </label>{" "}
  {item.dropdown && <CaretDownOutlined />}
</span>
</a>}
              </StyledLink>
              {item.dropdown && (
                <StyledDropdownUl active={activeLink === item.id}>
                  {item.dropLink.map((link) => (
                    <StyledDropdownLi
                      key={link.id}
                      onClick={() => setLinkActiveHandle(link.id, true)}
                      activedropdown={activeLinkDropdown === link.id ? true : false}
                    >
                      <Link to={`/dashboard/${link.to}`}>

                        <label>
                          <div className="icon">{link.icon}</div> {link.title}
                        </label>
                      </Link>
                    </StyledDropdownLi>
                  ))}
                </StyledDropdownUl>
              )}
            </div>
          ))}
        </StyledNavUl>
      </nav>
    </StyledContainer>
  );
};

export default Menu;
