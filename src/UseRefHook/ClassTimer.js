import React , { Component } from 'react'

class ClassTimer extends Component {

    constructor(){
        super();
        this.state = {
            timer : 0
        }
    }

    componentDidMount(){
      this.interval = setInterval(() => {
          this.setState(prevValue => ({timer : prevValue.timer+1}))
      } , 1000)
    }

    componentWillMount(){
        //clearInterval(this.interval)
    }

    render(){
        return(
            <div>
                Class Timer - {this.state.timer}
                <button type='button' onClick={() => clearInterval(this.interval)}>Clear Timer</button>
            </div>
        )
    }
}

export default ClassTimer