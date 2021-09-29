import styled from 'styled-components'

export const StyledContainer = styled.div`
    width:100%;
    padding:10px;
    margin:10px;
    margin-left:0;
    padding-left:0px;
    padding-bottom: 0;
    margin-bottom: 0;

    display:flex;
    justify-content: flex-start;
    align-items: center;
`

export const StyledTab = styled.div`
    width:200px;
    box-shadow: 0 0 3px #e3e3e3 !important;
    border-radius:3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 0;
    background:${p => p.active ? "#7279ff" : "#FAFAFA"};
    color:${p => p.active ? "#fff" : "#282828"};
    cursor:pointer;
    padding:7px;
    font-family: "BOG 2018";
    font-size:12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left:5px;

    &:first-child {
        margin-left:0px;
    }
    &:nth-child(2) {
       
    }
    span {
        overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
    }
    button {
        background: transparent;
        border:0;
        cursor: pointer;

    }
`
