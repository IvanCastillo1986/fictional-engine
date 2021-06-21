import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


export default function NewTransaction({ addTransaction }) {

    const [transaction, setTransaction] = useState({
        date: '',
        name: '',
        amount: 0,
        from: ''
    })
    const history = useHistory()

    const handleChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTransaction(transaction)
        history.push('/transactions')
    }

    return (
        <div className='NewTransaction'>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="date">Date: </label><br />
                <input onChange={handleChange} type="text" name="" id="date" /><br />
                <label htmlFor="name">Name: </label><br />
                <input onChange={handleChange} type="text" name="" id="name" /><br />
                <label htmlFor="amount">Amount: </label><br />
                <input onChange={handleChange} type="number" name="" id="amount" /><br />
                <label htmlFor="from">From: </label><br />
                <input onChange={handleChange} type="text" name="" id="from" /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
