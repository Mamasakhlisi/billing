import React, {useState} from 'react'
import styled from 'styled-components'

import Menu from '@CDashboard/Menu/Menu'
import Header from '@CDashboard/Header/Header'

const StyledContainer = styled.div`
    display: flex;
    align-items: flex-start;
    
`
const Dashboard = () => {
    const [activeBar,setActiveBar] = useState(true);

    const setActiveBarHandle = () => {
        setActiveBar(!activeBar)
    }
    return (
        <StyledContainer>
            <Menu activeBar={activeBar} />
            <Header setActiveBarHandle={setActiveBarHandle} />
        </StyledContainer>
    )
}

export default Dashboard
