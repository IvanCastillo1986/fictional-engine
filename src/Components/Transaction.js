import React from 'react'



export default function Transaction({ transaction }) {



    return (
        <>
            <tr>
                <td>{transaction.date}</td>
                <td>{transaction.name}</td>
                <td>{transaction.amount}</td>
            </tr>
        </>
    )
}
