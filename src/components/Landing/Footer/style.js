import styled from 'styled-components'

export const StyledContainer = styled.div`
    width:1000px;
    max-width: 100%;
    margin:0 auto;
    padding-top:40px;
    padding-bottom: 40px;

    .margin_top {
        margin-top:25px;
    }
    @media (max-width:510px) {
        .mail {
            flex-direction: column-reverse;
        }
    }
    ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        @media (max-width:1026px) {
            padding-right: 20px;
    }
    @media (max-width:510px) {
        flex-direction: column;
        padding-right: 0px;
        .line {
            display: none;
        }
        li {
            margin-left: 0;
            margin-top:15px;
        }
    }
        li {
            font-family: "BOG 2018";
            font-size:12px;
            margin-left: 15px;
        }
    }
`