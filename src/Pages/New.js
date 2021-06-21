import React from 'react'
import NewTransaction from '../Components/NewTransaction'
import './New.css'


export default function New({ transactions, addTransaction }) {
    
    console.log(transactions[0])

    return (
        <div>
            <h2>Add a new transaction</h2>
            <NewTransaction addTransaction={addTransaction} />
        </div>
    )
}
