  
import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Boilers</h1>
            <ul style={ulStyle}>
                <li style={liStyle}>ID</li>
                <li style={liStyle}>ID Type</li>
                <li style={liStyle}>Start Time</li>
                <li style={liStyle}>End Time</li>
                <li style={liStyle}>Monthy Hours</li>
            </ul>
        </header>
    )
}

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderBottom: '1px solid #333', 
}
const liStyle =  {
    float: 'left',
    display: 'block',
    width: '17%',
    color: '#000',
    fontWeight: "bold",
    fontSize: 12,
    textAlign: 'center',
    padding: '15px 5px 10px 15px',
    margin: "auto",
}
const headerStyle = {
    background: '#073e6e',
    color: '#fff',
    textAlign: 'center',
    paddingTop: '20px',
}

export default Header