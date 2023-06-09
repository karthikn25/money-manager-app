import React from 'react'
import Base from '../Base/Base'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export default function Yearlyreport() {
  const history=useHistory("");
    return (
    <Base>
    <span>   <Button variant="contained" style={{marginLeft:"90%",marginTop:"20px"}} onClick={()=>history.push("/")}>Back</Button>
    <h3 style={{textAlign:"center",paddingTop:"10px"}}>
    Yearly Report Of The Income And Expanses</h3></span>
    <Divider variant="middle" />
    </Base>
  )
}
