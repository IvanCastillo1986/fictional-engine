import React from 'react'
import { Link } from 'react-router-dom'


export default function Transaction({ transaction, deleteTransaction, index }) {


    return (
        <tr>
            <td>{transaction.date}</td>
            <td>{transaction.name}</td>
            <td>{transaction.amount}</td>
            <td><button className='button' onClick={() => deleteTransaction(index)}>x</button></td>
            <td><Link to={`/transactions/${index}/edit`}><button>!</button></Link></td>
        </tr>
    )
}
