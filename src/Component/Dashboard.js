import React, { useState } from 'react'
import Base from '../Base/Base'
import Divider from '@mui/material/Divider';
import AddDropdown from './AddDropdown';

export default function Dashboard() {
  const [openAdd,setOpenAdd]=useState(false);
  return (
    
    <Base>
    
    <h3 style={{textAlign:"center",paddingTop:"10px"}}><span class="material-symbols-outlined" style={{fontSize:"xx-large"}}>
    folded_hands
    </span>Welcome to the Money Manager Application</h3>
    <Divider variant="middle" />
    <p style={{textAlign:"center",fontWeight:"bold",marginTop:"150px"}}>If You Want To Add The New Data Of Income And Expenses Please Click The Below Button </p>
    <button className='add' onClick={()=>setOpenAdd((prev)=>!prev)} >Add</button>
    {openAdd&&<AddDropdown/>}
    
    </Base>
  )
}
