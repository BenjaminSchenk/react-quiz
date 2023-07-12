


const Button = ({toggleLogIn}) => {

    const handleClick = () => {
        toggleLogIn()
    }

    return (
        
        <button onClick={handleClick}>Login/Logout</button>
        
    )
}

export default Button