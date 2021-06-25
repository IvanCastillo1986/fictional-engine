import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { apiURL } from '../util/apiURL'
import '../Pages/Index.css'

const API = apiURL()



export default function EditTransaction({ updateTransaction }) {

    const { index } = useParams()
    const history = useHistory()
    const [transaction, setTransaction] = useState({
        date: '',
        name: '',
        amount: '',
        from: ''
    })

    const handleChange = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateTransaction(transaction, index)
        history.push('/transactions')
    }

    useEffect(() => {
        axios.get(`${API}/transactions`)
        .then(response => setTransaction(response.data[index]))
        .catch(e => console.log(e))
    }, [index])


    return (
        <div className='NewTransaction'>

                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="date">Date:</label>
                    <input onChange={handleChange} type="text" name="" id="date" value={transaction.date} />
                    <label htmlFor="name">Name:</label>
                    <input onChange={handleChange} type="text" name="" id="name" value={transaction.name} />
                    <label htmlFor="amount">Amount:</label>
                    <input onChange={handleChange} type="number" name="" id="amount" value={transaction.amount} />
                    <label htmlFor="from">From:</label>
                    <input onChange={handleChange} type="text" name="" id="from" value={transaction.from} />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>

        </div>
    )
}
