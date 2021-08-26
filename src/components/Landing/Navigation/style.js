import styled from 'styled-components'

export const StyledLogo = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 6px;
    background-color: #7279FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    font-family: "BOG 2017 Headline";
    font-size:11px;
    @media (max-width:1020px) {
                margin-left: 20px;
    }
`

export const StyledBurger = styled.button`
    display:none;
    @media (max-width:600px) {
        display: flex;
        background: #fff;
        border:0;
}
`

export const StyledSignInButton = styled.button`
    width: 120px;
    height: 35px;
    border-radius: 6px;
    background-color: #7279FF;
    border:1px solid #7279FF;
    color:#fff;
    cursor:pointer;
    font-family: "BOG 2017 Headline";
    font-size:11px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        margin-right: 5px;
    }
`

export const StyledNavigation = styled.nav`
  background-color: #fff;
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  top: -25px;
  left: 0;
  right: 0;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 5px 0px;
    
  @media (max-width:1350px) {
        width:950px;
    }
    @media (max-width:1020px) {
        width:100%;
        position: relative;
        top:0;
        padding:0;
        padding-top:10px;
        padding-bottom: 10px;
        border-radius:0;
    }
    ul {
        display:flex;
        align-items: center;
        .link {
            @media (max-width:600px) {
        display: none;
    }
        }
        li {
            list-style:none;
            margin-left:20px;
            @media (max-width:1020px) {
                margin-right: 20px;
    }

            a {
                font-size:11px;
                color:#202631;
                text-decoration:none;
                font-family: "BOG 2017 Headline";
            }
        }
    }
`