import { useState } from 'react'

// props must be added as a parameter in the function in order to access props!!!
export default function Hooks(props) {
    const [value, setValue] = useState('Gabe')
    const [age, setAge] = useState(27)
    const [array, setArray] = useState(['cat', 'dog', 'bird'])
    const [drill, setDrill] = useState(props.drill)

    const handleAge = () => {
        setAge(age + 1)
    }

    const handleFerret = () => {
        setArray([...array, 'ferret'])
    }

    let spreadArray = [...array]
    console.log(spreadArray)

    const handleDrill = () => {
        setDrill(drill + 'r')
    }

    return ( 
        <>
            <h1>State!</h1>
            <h2>{value} is {age} human years old</h2>
            <button onClick={handleAge}> Ageifier! </button>

            <ul>
                {array.map((pet) => {
                return(
                    <li>{pet}</li>
                )
            })}
            </ul>
            <button onClick={handleFerret}>Add Ferret</button>
            <h3>{drill}</h3>
            <button onClick={handleDrill}>Keep Drilling!</button>
        </>
     );
}