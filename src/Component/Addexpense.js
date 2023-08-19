import React,{useState} from 'react'
import Base from '../Base/Base'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function Addexpense() {
 
  const history=useHistory("");
    const [amount,setAmount] = useState('');
    const [category,setCategory] = useState('');
    const [purpose,setPurpose] = useState('');
    const [description,setDescription] = useState('');
    const [date,setDate] = useState('');
      
  
      
  
  
      const handleaddExpense = async () => {
          const AddExpense = {
            amount,
            category,
            purpose,
            description,
            date
          }
          console.log(AddExpense)
          const res = await fetch (`https://moneymanage-hzop.onrender.com/api/expense/add`,{
            method:"POST",
            body:JSON.stringify(AddExpense),
            headers:{
              "Content-Type" :"application/json"
            }
          })
          const data = await res.json()
          if(data){
            history.push("/monthly")
          }
      }
     
   
  
    return (
    <Base>
    <span>
    <Button variant="contained" style={{marginLeft:"90%",marginTop:"20px"}} onClick={()=>history.push("/")}>Back</Button>
    <h3 style={{textAlign:"center",paddingTop:"10px"}}>
    Add The Expenses Report</h3></span>
    <Divider variant="middle" />
    
    <form>
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
  <FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}} >
  <InputLabel id="demo-simple-select-label">Categry</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={category}
    label="Age"
    onChange={(e) => setCategory(e.target.value)}
  >
    <MenuItem value={"Office"}>Office</MenuItem>
    <MenuItem value={"Personel"}>Personel</MenuItem>
    
  </Select>
</FormControl>
<FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}} >
  <InputLabel id="demo-simple-select-label">Purpose</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={purpose}
    label="Age"
    onChange={(e) => setPurpose(e.target.value)}
  >
    <MenuItem value={"Food"}>Food</MenuItem>
    <MenuItem value={"Fual"}>Fual</MenuItem>
    <MenuItem value={"Movie"}>Movie</MenuItem>
    <MenuItem value={"Medical"}>Medical</MenuItem>
    <MenuItem value={"Loan"}>Loan</MenuItem>
    <MenuItem value={"Others"}>Others</MenuItem>
    
  </Select>
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
<Button variant="contained" style={{marginLeft:"45%",marginTop:"20px"}} onClick={handleaddExpense}>Add Expense</Button>
</form>
    </Base>
  )
}
