
const Input = ({setIncreaseBy}) => {
    const getInputValue = (event) => setIncreaseBy(+event.target.value)
    
    return <input type="number" min="0" onChange={getInputValue}/>
}

export default Input;