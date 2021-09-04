import React, {useState} from 'react'
import {StyledContainer,StyledWrapper,StyledStepId,StyledTitle,StyledSectionTitle} from './style'
const Steps = () => {
    const [steps,setSteps] = useState([
        {
            id:1,
            active: false,
            title:"ძირითადი ინფორმაცია"
        },
        {
            id:2,
            active: false,
            title:"პირადი ინფორმაცია"
        },
        {
            id:3,
            active: false,
            title:"დადასტურება ინფორმაცია"
        }
    ])
    const [active,setActive] = useState(false);

    const activeHandler = (id) => {
        setActive(id)
    }
    return (
        <>
        <StyledSectionTitle>ეტაპები</StyledSectionTitle>
        <StyledContainer active={active}>
            <StyledTitle>
                მომხმარებლის ეტაპები
            </StyledTitle>
            <StyledWrapper>
                <div>
                    {steps.map((item) =>  <StyledStepId key={item.id} onClick={() => activeHandler(item.id)} active={item.id === active}><h4>{item.id}</h4></StyledStepId>)}
                </div>
                <div>
                    {steps.map((item => item.id === active && <div key={item.id}><h4>{item.title}</h4></div>))}
                </div>
            </StyledWrapper>
        </StyledContainer>
        </>
    )
}

export default Steps
