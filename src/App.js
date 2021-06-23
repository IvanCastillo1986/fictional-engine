import './App.css';
import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios'
import { apiURL } from './util/apiURL'
import NavBar from './NavBar'
import Welcome from './Components/Welcome'
import Index from './Pages/Index'
import New from './Pages/New'
import WeLive from './Components/WeLive'


const API = apiURL()

function App() {

  const [ transactions, setTransactions ] = useState([])

  const addTransaction = (newTransaction) => {
    axios.post(`${API}/transactions`, newTransaction)
    .then(response => {
      return axios.get(`${API}/transactions`)
    })
    .then(response => {
      setTransactions(response.data)
    })
    .catch((e) => console.log(e))
  }

  const deleteTransaction = (index) => {
    axios.delete(`${API}/transactions/${index}`)
    .then(response => {
      const updatedArray = [...transactions]
      updatedArray.splice(index, 1)
      setTransactions(updatedArray)
    })
  }

  useEffect(() => {
    axios.get(`${API}/transactions`)
    .then(response => {
      setTransactions(response.data)
    })
  }, [])

  return (

    <div className='App'>
      <NavBar />
      <Route exact path='/' component={Welcome} />
      <Route exact path='/' component={WeLive} />
      <Route exact path='/transactions'>
        <Index transactions={transactions} deleteTransaction={deleteTransaction} />
      </Route>
      <Route path='/transactions/new'>
        <New transactions={transactions} addTransaction={addTransaction} />
      </Route>
    </div>

  );
}

export default App;
