import styled from 'styled-components'

export const StyledContainer = styled.div`
    width:1100px;
    max-width:100%;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top:30px;
    padding-bottom:30px;
    height:300px;   
    h3 {
        color:#7279FF;
        font-size:18px;
        font-family: "BOG 2018";
        margin-top: 20px;
    }
    p {
        font-size:12px;
        font-family: "BOG 2018";
        margin-top:10px;
        color:gray;
    }
    button {
        margin-top:15px;
        background:#fff;
        color:#7279FF;
        padding:8px;
        border-radius:6px;
        border:2px solid #7279FF;
        font-size:12px;
        font-family: "BOG 2018";
        cursor: pointer;
        transition: 300ms;
        &:hover {
            background:#7279FF;
            color:#fff;
        }
    }
`


export const StyledLinesShape = styled.div`
    position: absolute;
    top:6px;
    right:6px;
    @media (max-width:1350px) {
        display: none;
    }
    img {
        width:450px;
        opacity: 0.4;
        animation:anim 2s ease-out  infinite alternate forwards;
    }
    @keyframes anim {
        0% {
            opacity: 0.4;
        }
        100% {
            opacity: 1;
        }
    }
`