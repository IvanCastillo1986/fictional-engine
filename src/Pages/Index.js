import React, { useState, useEffect } from 'react'
import Transactions from '../Components/Transactions'



export default function Index({ transactions, deleteTransaction }) {

    
    const [ total, setTotal ] = useState(0)

    useEffect(() => {
        let sum = 0
        for (let transaction of transactions) {
            sum = sum + Number(transaction.amount)
        }
        setTotal(sum)
    }, [total, transactions])

    return (
        <div>
            <h2>Bank Account Total: ${total}</h2>
            <Transactions transactions={transactions} deleteTransaction={deleteTransaction} />
        </div>
    )
}
