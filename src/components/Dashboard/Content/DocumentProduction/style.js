import styled from 'styled-components'

export const StyledContainer = styled.div`
width:100%;
`
export const StyledCategoryButton = styled.button`
        width:200px;
        padding:10px;
        border-radius: 3px;
        background-color:  ${p => p.active ? "#7279ff" : "#fff"};
        color:${p => p.active ? "#fff" : "#7279ff"};
        border:0;
        font-family: "BOG 2017 Headline";
        font-size:11px;
        margin:20px;
        margin-left:5px;
        cursor:pointer;
        transition: 300ms;
        &:first-child {
            margin-left:20px;
        }

        &:hover {
            background-color: #fff;
            color:#7279ff;
        }
`