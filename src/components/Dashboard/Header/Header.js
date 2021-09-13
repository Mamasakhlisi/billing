import React from 'react'
import {BarsOutlined} from "@ant-design/icons"
import {StyledHeader,StyledUl,StyledPerson} from './style'
const Header = ({setActiveBarHandle}) => {
    return (
        <StyledHeader>
            <StyledUl>
                <li onClick={setActiveBarHandle}><BarsOutlined /></li>
            </StyledUl>
            <StyledPerson>
                სისტემიდან გასვლა
            </StyledPerson>
        </StyledHeader>
    )
}

export default Header
