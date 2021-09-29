import React from 'react'
import Tabs from './Tabs/Tabs'
import Filter from './Table/Filter'
const TableHead = () => {
    return (
        <div style={{width:"100%", display:"flex",alignItems:"flex-start",flexDirection:"column",padding:"20px",paddingTop:"0",paddingBottom:"0"}}>
             <Filter />
           <Tabs />
        </div>
    )
}

export default TableHead
