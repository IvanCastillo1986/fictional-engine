import React, { useState, useEffect } from 'react'
import Transaction from './Transaction'
import './Transactions.css'



export default function Transactions({ transactions }) {
    

    const mapTransactions = transactions.map((transaction, index) => {
        return <Transaction key={index} transaction={transaction} index={index} />
    })

    return (
        <div className='Transactions'>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {mapTransactions}
                </tbody>
            </table>
        </div>
    )
}
