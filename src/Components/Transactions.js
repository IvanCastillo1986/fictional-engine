import React from 'react'
import Transaction from './Transaction'
import './Transactions.css'



export default function Transactions({ transactions, deleteTransaction }) {
    

    const mapTransactions = transactions.map((transaction, index) => {
        return <Transaction key={index} transaction={transaction} index={index} deleteTransaction={deleteTransaction}/>
    })

    return (
        <div className='Transactions'>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {mapTransactions}
                </tbody>
            </table>
        </div>
    )
}
