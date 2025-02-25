import React from 'react'

//Enhanced component which is to be returned will have same name as function name but in PascalCase
//Funtion accepting original component will be named as WrappedComponent

const withCounter = (WrappedComponent,incrementNumber) => {  //HOC accepts original component as it's parameter
    class WithCounter extends React.Component {  //HOC returns a new component

        constructor(){
            super()
            this.state ={
                count : 0
            }
            this.handleChange = this.handleChange.bind(this)
        }
    
        handleChange(){
            this.setState( prevState => {
                return { count : prevState.count + incrementNumber }
            })
    
            // this.setState( prevState => ({
            //     count : prevState.count + 1 
            // }))
        }

        render(){
            console.log(this.props.fromWhere)
            return <WrappedComponent 
                        name="Nisha" 
                        currentCount={this.state.count} 
                        changeHandler={this.handleChange} 
                        {...this.props} 
                    />
            // {...this.props} ----> Passing rest of the props to the WrappedComponent through spread operator
        }
    }
    return WithCounter
}

export default withCounter