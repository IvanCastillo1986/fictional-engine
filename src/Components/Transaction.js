import React from 'react'



export default function Transaction({ transaction, deleteTransaction, index }) {


    return (
        <>
            <tr>
                <td>{transaction.date}</td>
                <td>{transaction.name}</td>
                <td>{transaction.amount}</td>
                <td><button className='button' onClick={() => deleteTransaction(index)}>x</button></td>
            </tr>
        </>
    )
}
