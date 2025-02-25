import React , {useReducer} from 'react'

const initialState = {
    firstCounter : 0
}

const reducer = (state , action) => {
    switch(action.type){
        case 'increment'  : return {firstCounter  : state.firstCounter+action.value}
        case 'decrement'  : return {firstCounter  : state.firstCounter-action.value}
        case 'reset'      : return initialState
        default           : return state
    }
}

function CounterThree(){

    const [count , dispatch] = useReducer(reducer,initialState)
    const [countTwo , dispatchTwo] = useReducer(reducer,initialState)

    return(
        <div>
            <div>First Counter = {count.firstCounter}</div>
            <div>
                <button onClick={() => dispatch({type : 'increment' , value : 1 })}>Increment by 1</button>
                <button onClick={() => dispatch({type : 'decrement' , value : 1 })}>Decrement by 1</button>
                <button onClick={() => dispatch({type : 'increment' , value : 5 })}>Increment by 5</button>
                <button onClick={() => dispatch({type : 'decrement' , value : 5 })}>Decrement by 5</button>
                <button onClick={() => dispatch({type : 'reset'     , value : 0 })}>Reset</button>
            </div>
            <div>Second Counter = {countTwo.firstCounter}</div>
            <div>
                <button onClick={() => dispatchTwo({type : 'increment' , value : 1 })}>Increment by 1</button>
                <button onClick={() => dispatchTwo({type : 'decrement' , value : 1 })}>Decrement by 1</button>
                <button onClick={() => dispatchTwo({type : 'increment' , value : 5 })}>Increment by 5</button>
                <button onClick={() => dispatchTwo({type : 'decrement' , value : 5 })}>Decrement by 5</button>
                <button onClick={() => dispatchTwo({type : 'reset'     , value : 0 })}>Reset</button>
            </div>
        </div>
    )
}

export default CounterThree