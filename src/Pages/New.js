import React from 'react'
import NewTransaction from '../Components/NewTransaction'
import './Index.css'


export default function New({ addTransaction }) {


    return (
        <div>
            <h2>Add a new transaction</h2>
            <NewTransaction addTransaction={addTransaction} />
        </div>
    )
}
