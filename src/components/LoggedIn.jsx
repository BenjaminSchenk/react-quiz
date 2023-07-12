



import React from 'react'
import Button from './Button'

const LoggedIn = ({toggleLogIn}) => {


    return (
        <>
            <h1>Logged in</h1>
            <Button toggleLogIn={toggleLogIn}/>
        </>
    )
}

export default LoggedIn