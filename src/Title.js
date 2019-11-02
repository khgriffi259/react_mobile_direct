import React from 'react'

const Title = ({name, title}) => {
    return <>
        <h1 className="text-title center">{name}        
            <span className="blue-text">{` ${title}`}</span>
        </h1>
    </>
    
}


export default Title