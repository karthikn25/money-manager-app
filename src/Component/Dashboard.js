import React, { useState } from 'react'
import Base from '../Base/Base'
import Divider from '@mui/material/Divider';
import AddDropdown from './AddDropdown';
import { Button, Card, CardContent, Typography } from '@mui/material';

export default function Dashboard({income,setIncome}) {
  const [openAdd,setOpenAdd]=useState(false);
  
  
  
  const handleget =async ()=>{
     
    const res = await fetch (`https://moneymanage-hzop.onrender.com/api/income/get`,{
     method:"GET",
    
 
    });
    const data = await res.json()
    if(data){
      setIncome(data.data)      }
}
handleget();

  const handleRemove = async(id)=>{
    const res= await fetch(`https://moneymanage-hzop.onrender.com/api/income/remove/${id}`,{
      method:"DELETE",

    })
    const data = await res.json();
    console.log(data)
    
  }
  return (
    
    <Base>
    
    <h3 style={{textAlign:"center",paddingTop:"10px"}}><span class="material-symbols-outlined" style={{fontSize:"xx-large"}}>
    folded_hands
    </span>Welcome to the Money Manager Application</h3>
    <Divider variant="middle" />
    <button className='add' onClick={()=>setOpenAdd((prev)=>!prev)} style={{marginLeft:"70vw",width:"70px",height:"40px",marginTop:"30px"}}>Add</button>
    {openAdd&&<AddDropdown/>}
    
    <div className='container'>
    <div className="card-container" >
    {income.map((ex,idx)=>(
      <div className="stud-card" key={idx} style={{width:"300px"}}>
      <Card sx={{ maxWidth: 345 }}>
     
  <CardContent>
   
    <Typography variant="h6" color="text.secondary">
    Description: {ex.description}
    </Typography>
    <Typography variant="h6" color="text.secondary">
    Date: {ex.date}
    </Typography>
    <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center",paddingTop:"20px"}}>
    ₹{ex.amount}
    </Typography>
  </CardContent>
  <div className='control'>
  <Button variant="outlined" color="error" style={{marginLeft:"90px"}} onClick={()=>handleRemove(ex._id)}>
  Remove
</Button>
  </div>
  
</Card>
      
      
      
      
      
      
      
      
      </div>
    ))}
        </div>
        </div>
    </Base>
  )
}
