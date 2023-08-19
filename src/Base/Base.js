import React, { useState } from 'react'
import Dropdown from '../Component/Dropdown';
import Topbar from '../Component/Topbar';



export default function Base({children}) {
  
  const [openDashboard,setOpenDashboard]=useState(false)
    return (
    <div className='base-content'>
    <nav className='top-navbar'>
   <Topbar/>
    </nav>
    <div className='left-navbar'>
    <div className='link-container'>
    <nav className='nav'>
    <ul className='nav-lists'>
    <li className='nav-list active' onClick={()=>setOpenDashboard((prev)=>!prev)}><span class="material-symbols-outlined">
    dashboard
    </span>Dashboard</li>
    {openDashboard&& <Dropdown/>}
   
   
    </ul>
    </nav>
    </div>
    </div>
    <div className='content-container'>
    {children}
    </div>
    </div>
  )
}
