import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (    
    <>
        <h1 className="header">{title}</h1>
        {/* tutorial content below */}
        <h3 title='head' className="header">Cats</h3>    
        <h3 data-testid='1' className="header">Dogs</h3>    
        {/* end of tutorial content */}
    </>
    )
}
