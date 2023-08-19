import React,{useState} from 'react'
import Base from '../Base/Base'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';



export default function Addincome() {
  
    const history=useHistory(""); 
    const [ amount,setAmount] = useState("");
    const [ description,setDescription] = useState("");
    const [ date,setDate] = useState("");

   const AddData = async()=>{
       const newData = {
        amount,
        description,
        date
       }
       const res = await fetch (`https://moneymanage-hzop.onrender.com/api/income/add`,{
        method:"POST",
        body:JSON.stringify(newData),
        headers:{
          "Content-Type":"application/json"
        }
       })
       const data = await res.json()
       console.log(data)
       if(data){
        history.push("/")
       }
   }

    return (
    <Base>
    <span>
    <Button variant="contained" style={{marginLeft:"90%",marginTop:"20px"}} onClick={()=>history.push("/")}>Back</Button>
    <h3 style={{textAlign:"center",paddingTop:"10px"}}><span class="material-symbols-outlined" style={{fontSize:"xx-large"}}>savings</span>
    Add The Income Report</h3></span>
    <Divider variant="middle" />
    <h2 style={{textAlign:"center"}}>Add Income</h2>
    <Divider variant="middle" />
    <form >
    <FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}}>
    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
      startAdornment={<InputAdornment position="start">$</InputAdornment>}
      label="Amount"
      type='number'
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />
  </FormControl>
  <FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}}>
  <InputLabel htmlFor="outlined-adornment-amount">Date</InputLabel>
  <OutlinedInput
    id="outlined-adornment-amount"
    startAdornment={<InputAdornment position="start"></InputAdornment>}
    label="Amount"
    type='date'
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />
</FormControl>
<FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}}>
<InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
<OutlinedInput
  id="outlined-adornment-amount"
  startAdornment={<InputAdornment position="start"></InputAdornment>}
  label="Amount"
  type='text'
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
</FormControl>
<Button variant="contained" style={{marginLeft:"45%",marginTop:"20px"}} onClick={AddData}>Add Income</Button>
</form>
    </Base>
  )
}
