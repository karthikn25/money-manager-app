import React from 'react'
import Base from '../Base/Base'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

export default function Yearlyreport({expense,setExpense}) {
  const history=useHistory("");
  
  
    const handleget =async ()=>{
       
      const res = await fetch (`https://moneymanage-hzop.onrender.com/api/expense/get`,{
       method:"GET",
      
   
      });
      const data = await res.json()
      if(data){
        setExpense(data.data)      }
 }
 handleget();
  
    const handleRemove = async(id)=>{
      const res= await fetch(`https://moneymanage-hzop.onrender.com/api/expense/delete/${id}`,{
        method:"DELETE",

      })
      const data = await res.json();
      console.log(data)
      
    }
    return (
    <Base>
    <span>   <Button variant="contained" style={{marginLeft:"90%",marginTop:"20px"}} onClick={()=>history.push("/")}>Back</Button>
    <h3 style={{textAlign:"center",paddingTop:"10px"}}>
    Yearly Report Of The  Expanses</h3></span>
    <Divider variant="middle" />
    <div className='container'>
    <div className="card-container" >
    {expense.map((ex,idx)=>(
      <div className="stud-card" key={idx} style={{width:"300px"}}>
      <Card sx={{ maxWidth: 345 }}>
     
  <CardContent>
    <Typography variant="h6" color="text.secondary">
    Categry:  {ex.category}
    </Typography>
    <Typography variant="h6" color="text.secondary">
    Type: {ex.purpose}
    </Typography>
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
  <Button variant="outlined" color="error" style={{marginLeft:"80px"}} onClick={()=>handleRemove(ex._id)}>
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
