import React from 'react'
import { useParams } from 'react-router-dom'
import EditTransaction from '../Components/EditTransaction'


export default function Edit({ transactions, updateTransaction }) {

    const { index } = useParams()


    if (transactions[index]) {
        return (
            <div>
                <h2>Edit</h2>
                <EditTransaction updateTransaction={updateTransaction} />
            </div>
        )
    } else {
        return (
            <div>
                <h2>Index [{index}] Not Found</h2>
            </div>
        )
    }    
}
