import React from 'react'
import { Input } from 'antd';
import {StyledAddFormContainer} from './style'
const AddForm = () => {
    return (
        <StyledAddFormContainer>
            <div>
                <Input style={{width:"300px"}} placeholder="შეიყვანეთ დასახელება" />
            </div>
            <div>
                <button>დამატება</button>
            </div>
        </StyledAddFormContainer>
    )
}

export default AddForm
