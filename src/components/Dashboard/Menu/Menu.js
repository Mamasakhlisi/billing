import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  CaretDownOutlined,
  FileProtectOutlined,
  SolutionOutlined,
  SettingOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  FileTextOutlined,

  BankOutlined
} from "@ant-design/icons";
import {
  StyledContainer,
  StyledLogo,
  StyledLogoContainer,
  StyledNavUl,
  StyledLink,
  StyledDropdownUl,
  StyledPerson,
  StyledDropdownLi,
} from "./style";

const Menu = ({ activeBar }) => {
  const [activeLink, setActiveLink] = useState(0);
  const [activeLinkDropdown, setActiveLinkDropdown] = useState(0);
  const [activeSetting, setActiveSetting] = useState(false);
  // მომხმარებლის დროპდაუნ ჩეინჯერი
  const handlerSetting = () => {
    setActiveSetting(!activeSetting);
  };
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
          dropdown: true,
          to: false,
          icon: <UserOutlined />,
          dropLink: [
            {
              id: 7,
              title: "რეესტრი",
              dropdown: false,
              to: "settings/users/registry",
              icon: <FileTextOutlined />,
            },
            {
              id: 8,
              title: "ჯგუფები",
              dropdown: false,
              to: "settings/users/groups",
              icon: <UsergroupAddOutlined />,
            },
          ],
        },
        {
          id: 5,
          title: "სამართლებრივი ფორმა",
          to: "settings/legalform",
          dropdown: false,
          icon: <FileProtectOutlined />,
        },
        {
          id: 6,
          title: "ბანკები",
          to: "settings/bank",
          dropdown: false,
          icon: <BankOutlined />,
        },
      ],
    },
  ];

  const setLinkActiveHandle = (id, type) => {
    if (type) {
      setActiveLinkDropdown(id);
    } else {
      activeLink !== id && setActiveLink(id);
      setActiveLinkDropdown(0);
    }
    console.log(id, type);
  };
  const { url, path } = useRouteMatch();

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
                {item.to ? (
                  <Link to={`/dashboard/${item.to}`}>
                    <span>
                      <label>
                        <div className="icon">{item.icon}</div> {item.title}
                      </label>{" "}
                      {item.dropdown && <CaretDownOutlined />}
                    </span>
                  </Link>
                ) : (
                  <a onClick={handlerSetting}>
                    <span>
                      <label>
                        <div className="icon">{item.icon}</div> {item.title}
                      </label>{" "}
                      {item.dropdown && <CaretDownOutlined />}
                    </span>
                  </a>
                )}
              </StyledLink>
                  {/** დროპდაუნი */}
              {item.dropdown && (
                <StyledDropdownUl active={activeSetting}>
                  {item.dropLink.map((link) => (
                    <>
                      <StyledDropdownLi
                        key={link.id}
                        onClick={() => setLinkActiveHandle(link.id, true)}
                        activedropdown={
                          activeLinkDropdown === link.id ? true : false
                        }
                        subDrop={false}
                      >
                        {link.to ? (
                          <>
                            <Link to={`/dashboard/${link.to}`}>
                              <span>
                                <label>
                                  <div className="icon">{link.icon}</div>{" "}
                                  {link.title}
                                </label>{" "}
                                {link.dropdown && <CaretDownOutlined />}
                              </span>
                            </Link>
                          </>
                        ) : (
                          <>
                            <a
                              onClick={() =>
                                setLinkActiveHandle(link.id, false)
                              }
                            >
                              <span>
                                <label>
                                  <div className="icon">{link.icon}</div>{" "}
                                  {link.title}
                                </label>{" "}
                                {link.dropdown && <CaretDownOutlined />}
                              </span>
                            </a>
                          </>
                        )}
                      </StyledDropdownLi>
                      {/** დროპდაუნის საბ დროპდაუნი */}
                      <StyledDropdownUl active={activeLink === link.id}>
                        {link.dropLink?.map((l) => (
                          <StyledDropdownLi
                            key={l.id}
                            onClick={() => setLinkActiveHandle(l.id, true)}
                            activedropdown={
                              activeLinkDropdown === l.id ? true : false
                            }
                            subDrop={true}
                          >
                                        <Link to={`/dashboard/${l.to}`}>
                              <span>
                                <label>
                                  <div className="icon">{l.icon}</div>{" "}
                                  {l.title}
                                </label>{" "}
                                {l.dropdown && <CaretDownOutlined />}
                              </span>
                            </Link>
                          </StyledDropdownLi>
                        ))}
                      </StyledDropdownUl>
                    </>
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
