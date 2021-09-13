import styled from "styled-components";

export const StyledContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap:wrap;
    padding:10px;
`

export const StyledChartItem = styled.div`
    width: ${p => p.length ? "200px" : "180px"};
    height:70px;
    box-shadow: 0 0 3px #e3e3e3;

    background-color:${p => p.active ? "#7279ff" : " #fff"};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    flex-direction: column-reverse;
    font-family: "BOG 2017 Headline";
    color:${p => !p.active ? "#7279ff" : " #fff"};
    border-radius: 3px;
    margin:10px;
    font-size:10px;
    margin-left:${p => p.length ? "15px" : "10px"};;

    cursor:pointer;
    transition: 300ms;
    &:first-child {
        margin-left: 10px;
    }
    &:hover {
        background-color: #7279ff;
        color:#fff;
        h4 {
            color:#fff;
        }
    }
    h4 {
        color:${p => p.active ? "#fff" : " #6e6e6e"};
        
    }
    span {
        font-size:20px;
    }
`