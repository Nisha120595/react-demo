import React , { Component } from 'react'
import Person from './Person'

class NameList extends Component {
    render(){
        const names = ['bruce','clarke','diana','bruce'];
        const persons =[
            {
                id : 1,
                name : 'Bruce',
                age : 30 ,
                skill : 'React'
            },
            {
                id : 2,
                name : 'Clarke',
                age : 25 ,
                skill : 'Javascript'
            },
            {
                id : 3,
                name : 'Diana',
                age : 26 ,
                skill : 'Angular'
            }
        ];
    // const personList = persons.map(person => <Person key = {person.id} person = {person}/>)
    // return <div>{personList}</div>
    const nameList = names.map((name , index) => <h3 key={index}>{index} {name}</h3>)
    return <div>{nameList}</div>
    }
}

export default NameList