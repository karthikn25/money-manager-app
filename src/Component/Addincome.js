import React,{useState} from 'react'
import Base from '../Base/Base'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';


export default function Addincome() {
  
    const history=useHistory(""); 
    
    const [userIncome, setUserIncome] = useState({
      Amount: '',
      date: '',
      description: ''
  })
  

  const handleForm = value => {
      return setUserIncome(cred => {
          return {...cred, ...value}
      })
  }


  const handleaddIncome = async (event) => {
      try{
          event.preventDefault();
          const response = await axios.post(`http://localhost:4000/api/addincome`, userIncome, {withCredentials: true});
          if(response){
              history.push("/weakly")
          }
      }catch(error){
          console.log('Error: ', error);
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
    <form onSubmit={handleaddIncome}>
    <FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}}>
    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
    <OutlinedInput
      id="outlined-adornment-amount"
      startAdornment={<InputAdornment position="start">$</InputAdornment>}
      label="Amount"
      type='number'
      value={userIncome.Amount}
      onChange={(e) => handleForm({Amount: e.target.value})}
    />
  </FormControl>
  <FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}}>
  <InputLabel htmlFor="outlined-adornment-amount">Date</InputLabel>
  <OutlinedInput
    id="outlined-adornment-amount"
    startAdornment={<InputAdornment position="start"></InputAdornment>}
    label="Amount"
    type='date'
    value={userIncome.date}
    onChange={(e) => handleForm({date: e.target.value})}
  />
</FormControl>
<FormControl fullWidth sx={{ m: 3 }} style={{width:"90%"}}>
<InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
<OutlinedInput
  id="outlined-adornment-amount"
  startAdornment={<InputAdornment position="start"></InputAdornment>}
  label="Amount"
  type='text'
  value={userIncome.description}
  onChange={(e) => handleForm({description: e.target.value})}
/>
</FormControl>
<Button variant="contained" style={{marginLeft:"45%",marginTop:"20px"}} type='submit'>Add Income</Button>
</form>
    </Base>
  )
}
