import React from 'react'
import Divider from '@mui/material/Divider';
import { useHistory } from 'react-router-dom';


export default function Dropdown() {
   const history=useHistory("");
  return (
    <div className='dropdown'>
    <div className='dropdown-btn'>
    <ul>
    <li style={{fontSize:"x-large"}} onClick={()=>history.push("/monthly")}>Monthly</li>
    <Divider variant="middle" />
    <li style={{fontSize:"x-large"}} onClick={()=>history.push("/weakly")}>Weakly</li>
    <Divider variant="middle" />
    <li style={{fontSize:"x-large"}} onClick={()=>history.push("/yearly")}>Yearly</li>
    </ul>
    </div>



    </div>
  )
}
