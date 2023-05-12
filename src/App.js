import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import CalculatorComponent from './Components/Routes/Calculator/CalculatorComponent';
import CartoonComponent from './Components/Routes/Cartoon/CartoonComponent';
import HomeComponent from './Components/Routes/Home/HomeComponent';
import ServiceComponent from './Components/Routes/ServiceComponent';
import ServiceList from './Components/Routes/service/servicelist';
import { useEffect, useState } from 'react';
import  Axios  from 'axios';
function App() {
  const [value,SetValue]=useState([])
  useEffect(()=>{
    Axios.get('http://localhost:3500/service')
    .then((res)=>{
      SetValue(res.data)
    })
  })
  return (
    <Router>
      <div className="App">
          <ul>
          
          <li>
            <Link to='/Calculator' className='link'>Calculator</Link>
          </li>
          <li>
            <Link to='/Cartoon' className='link'>Cartoon</Link>
          </li>
          <li>
            <Link to='/home' className='link'>Home</Link>
          </li>
          <li>
            <Link to='/service' className='link'>Service</Link>
          </li>
          
       </ul>
      </div>
    
    <Routes>
    <Route exact path='/Calculator'element={<CalculatorComponent/>}></Route>
    <Route exact path='/Cartoon'element={<CartoonComponent/>}></Route>
    <Route exact path='/home'element={<HomeComponent/>}></Route>
    <Route exact path='/service'element={<ServiceComponent/>}></Route>

    <Route exact path={`/service/${value.length}`} element={<ServiceList LengthArray= {value.length}/>}></Route>
    </Routes>
   </Router>
    
  );
}

export default App;