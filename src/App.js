import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Switch,Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Monthlyreport from './Component/Monthlyreport';
import Weaklyreport from './Component/Weaklyreport';
import Yearlyreport from './Component/Yearlyreport';
import Addincome from './Component/Addincome';
import Addexpense from './Component/Addexpense';
import { useState } from 'react';



function App() {
  const [expense,setExpense] = useState([]);
  const [income,setIncome] = useState([]);
 
  return (
    <div className="App">
      <Switch>
      <Route exact path='/'>
      <Dashboard
      income={income}
      setIncome={setIncome}
      />
      </Route>
      <Route path='/monthly'>
      <Monthlyreport
      expense={expense}
      setExpense={setExpense}
      />
      </Route>
      <Route path='/weakly'>
      <Weaklyreport
      expense={expense}
      setExpense={setExpense}
      />
      </Route>
      <Route path='/yearly'>
      <Yearlyreport
      expense={expense}
      setExpense={setExpense}
      />
      </Route>
      <Route path='/addincome'>
      <Addincome
      income={income}
      setIncome={setIncome}
      />
      </Route>
      <Route path='/addexpense'>
      <Addexpense/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
