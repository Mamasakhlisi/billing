import styled from 'styled-components'

export const StyledContainer =styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
    
    .ant-input {
        width:200px !important;
        font-size:12px !important;
        padding:5px;
        font-family: "BOG 2018" !important;
    }
    .ant-select-selector {
        font-size:12px !important;
        font-family: "BOG 2018" !important;
    }
    .form_group {
        margin-top:15px;
        display: flex;
        flex-direction: column;
        width:200px;
        .ant-btn {
            width:200px !important;
        }
        label {
            font-size:12px;
            color:#282828;
            margin-bottom: 10px;
            font-family: "BOG 2018" !important;
        }
        span {
            font-family: "BOG 2018" !important;

            margin-left:0px;
            font-size:12px;
        }
    }
`

export const StyledField = styled.div`
margin-top:40px;
.ant-space {
    border-bottom: 2px solid #ccc;
    margin-top:15px;
}
label {
    font-family: "BOG 2018" !important;
    font-size:12px;
    padding-bottom: 10px;
}
    .ant-input {
        width:200px !important;
        font-family: "BOG 2018" !important;
        font-size:12px;
    }
    .ant-form-item-control-input-content {
        textarea {
            width:410px !important;
        }
    }
    .ant-btn-dashed {
        font-family: "BOG 2018" !important;
    font-size:12px;
    margin-top:10px;
    }
`