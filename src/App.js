import './App.css';
import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import NavBar from './NavBar'
import Welcome from './Components/Welcome'
import Index from './Pages/Index'
import New from './Pages/New'


function App() {

  const [transactions, setTransactions] = useState([])

  console.log(transactions)

  return (

    <div className='App'>
      <NavBar />
      <Route path='/' component={Welcome} />
      <Route path='/transactions'>
        <Index />
      </Route>
      <Route path='/transactions/new'>
        <New />
      </Route>

    </div>

  );
}

export default App;
