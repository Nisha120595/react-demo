import React , { Component } from 'react'

class RefsDemo extends Component {

    constructor(){
        super();
        //Create Ref way
        //this.inputRef = React.createRef();

        //Callback Ref way
        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount(){

        //Callback Ref way
        if(this.cbRef){
            this.cbRef.focus();
        }
        console.log(this.cbRef)

        //Create Ref way
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        //Callback Ref way
        alert(`${this.cbRef.value}`)

        //Create Ref way
        //alert(`${this.inputRef.current.value}`)
    }

    render(){
        return(
            <div>
                {/* <input type = "text" ref = {this.inputRef}/> */}
                <input type = "text" ref = {this.setCbRef}/>
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo