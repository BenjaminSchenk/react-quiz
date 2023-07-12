



import React from 'react'
import Button from './Button'

const LoggedOut = ({toggleLogIn}) => {


    return (
        <>
            <h1>Logged out comp...</h1>
            <Button toggleLogIn={toggleLogIn}/>
        </>
    )
}

export default LoggedOut
