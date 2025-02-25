import React , {useReducer} from 'react'
import ComponentA0 from './ComponentA0'
import ComponentB0 from './ComponentB0'
import ComponentC0 from './ComponentC0'

export const countContext = React.createContext() 

const initialState = 0

const reducer = (state , action) => {
  switch(action){
      case 'increment' : return state+1
      case 'decrement' : return state-1
      case 'reset'     : return initialState
      default          : return state
  }
}

function CreateContextHere(){
  const [count , dispatch]  = useReducer(reducer , initialState)
  return(
    <countContext.Provider value={{countState : count , dispatchState : dispatch}}>
        <div className='ContextExample'>
            Count - {count}
            <ComponentA0 />
            <ComponentB0 />
            <ComponentC0 />
        </div>
    </countContext.Provider>
  )
}

export default CreateContextHere