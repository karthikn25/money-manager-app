import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Switch,Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Monthlyreport from './Component/Monthlyreport';
import Weaklyreport from './Component/Weaklyreport';
import Yearlyreport from './Component/Yearlyreport';
import Addincome from './Component/Addincome';
import Addexpense from './Component/Addexpense';


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/'>
      <Dashboard/>
      </Route>
      <Route path='/monthly'>
      <Monthlyreport/>
      </Route>
      <Route path='/weakly'>
      <Weaklyreport/>
      </Route>
      <Route path='/yearly'>
      <Yearlyreport/>
      </Route>
      <Route path='/addincome'>
      <Addincome/>
      </Route>
      <Route path='/addexpense'>
      <Addexpense/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
