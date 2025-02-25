import React , {useState , useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function UseCallbackDemo() {

    const [age , setAge] = useState(25)
    const [salary , setSalary] = useState(50000)

    const handleAgeClick = useCallback(() => {
        setAge(age+1)
    },[age])

    const handleSalaryClick = useCallback(() => {
        setSalary(salary+1000)
    },[salary])

    return(
        <div>
            <Title />
            <Count text='Age' count={age}/>
            <Button handleClick={handleAgeClick}> Increment Age </Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={handleSalaryClick}>Increment Salary</Button>
        </div>
    )
}

export default UseCallbackDemo