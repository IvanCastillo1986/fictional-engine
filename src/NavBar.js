import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {


    return (
        <div className='NavBar'>
            <Link to='/'>Home</Link>
            <Link to='/transactions'>Index</Link>
            <Link to='/transactions/new'>New</Link>
        </div>
    )
}
