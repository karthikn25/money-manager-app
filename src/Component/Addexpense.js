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
import axios from 'axios';

export default function Addexpense() {
    const history=useHistory("");
    
      const [userExpense, setUserExpense] = useState({
          Amount: '',
          category: '',
          purpose: '',
          description: '',
          date: ''
      })
      
  
      const handleForm = value => {
          return setUserExpense(cred => {
              return {...cred, ...value}
          })
      }
  
  
      const handleaddExpense = async (event) => {
          try{
              event.preventDefault();
              const response = await axios.post(`http://localhost:4000/api/addexpense`, userExpense, {withCredentials: true});
              if(response){
                  history.push("/monthly")
              }
          }catch(error){
              console.log('Error: ', error);
          }
      }
     
   
  
    return (
    <Base>
    <span>
    <Button variant="contained" style={{marginLeft:"90%",marginTop:"20px"}} onClick={()=>history.push("/")}>Back</Button>
    <h3 style={{textAlign:"center",paddingTop:"10px"}}>
    Add The Expenses Report</h3></span>
    <Divider variant="middle" />
    
    <form onSubmit={handleaddExpense}>
    <FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}}>
    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
      startAdornment={<InputAdornment position="start">$</InputAdornment>}
      label="Amount"
      type='number'
      value={userExpense.Amount}
      onChange={(e) => handleForm({Amount: e.target.value})}
    />
  </FormControl>
  <FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}} >
  <InputLabel id="demo-simple-select-label">Categry</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={userExpense.category}
    label="Age"
    onChange={(e) => handleForm({category: e.target.value})}
  >
    <MenuItem value={10}>Office</MenuItem>
    <MenuItem value={20}>Personel</MenuItem>
    
  </Select>
</FormControl>
<FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}} >
  <InputLabel id="demo-simple-select-label">Purpose</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={userExpense.purpose}
    label="Age"
    onChange={(e) => handleForm({purpose: e.target.value})}
  >
    <MenuItem value={10}>Food</MenuItem>
    <MenuItem value={20}>Fual</MenuItem>
    <MenuItem value={30}>Movie</MenuItem>
    <MenuItem value={40}>Medical</MenuItem>
    <MenuItem value={50}>Loan</MenuItem>
    <MenuItem value={60}>Others</MenuItem>
    
  </Select>
</FormControl>
  <FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}}>
  <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
  <OutlinedInput
    id="outlined-adornment-amount"
    startAdornment={<InputAdornment position="start"></InputAdornment>}
    label="Amount"
    type='text'
    value={userExpense.description}
    onChange={(e) => handleForm({description: e.target.value})}
  />
</FormControl>
  <FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}}>
  <InputLabel htmlFor="outlined-adornment-amount">Date</InputLabel>
  <OutlinedInput
    id="outlined-adornment-amount"
    startAdornment={<InputAdornment position="start"></InputAdornment>}
    label="Amount"
    type='date'
    value={userExpense.date}
    onChange={(e) => handleForm({date: e.target.value})}
  />
</FormControl>
<Button variant="contained" style={{marginLeft:"45%",marginTop:"20px"}} type='submit'>Add Expense</Button>
</form>
    </Base>
  )
}
