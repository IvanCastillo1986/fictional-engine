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
                <label htmlFor="date">Date: </label>
                <input onChange={handleChange} type="text" name="" id="date" />
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} type="text" name="" id="name" />
                <label htmlFor="amount">Amount: </label>
                <input onChange={handleChange} type="number" name="" id="amount" />
                <label htmlFor="from">From: </label>
                <input onChange={handleChange} type="text" name="" id="from" />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
