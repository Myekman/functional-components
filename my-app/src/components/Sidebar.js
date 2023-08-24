import React from 'react'
import css from './css/Sidebar.module.css'

function Sidebar() {
    return (
        <div>
            <a href = "#." className = {css.sidebar} target= "_blank">My Photos</a>
            <a href = "#." className = {css.sidebar} target= "_blank">My Illustrations</a>
            <a href = "#." className = {css.sidebar} target= "_blank">My Paintings</a>
        </div>
    )
}

export default Sidebar