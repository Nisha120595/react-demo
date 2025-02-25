import React , {Component} from 'react'

class ErrorBoundary extends Component {

    constructor(){
        super()
        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }

    componentDidCatch(error , info){  //To log the errors
        console.log(error)        //During developments , React automatically logs every error to the console
        console.log(info)
    }

    render(){
        if(this.state.hasError){
            return <h3>Something went wrong...</h3>
        }
        return this.props.children
    }
}

export default ErrorBoundary