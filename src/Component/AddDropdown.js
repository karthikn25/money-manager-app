import React from 'react'
import Divider from '@mui/material/Divider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function AddDropdown() {
  const history=useHistory("");
    return (
    <div className='flex flex-col add-dropdown'>
    <ul className='flex flex-col gap-4' style={{fontWeight:"bold"}}>
    <li onClick={()=>history.push("/addincome")}>Add Income</li>
    <Divider variant="middle" />
    <li onClick={()=>history.push("/addexpense")}>Add Expenses</li>
    </ul>
    </div>
  )
}
