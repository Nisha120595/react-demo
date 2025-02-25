import React , { Component } from 'react'

class Form extends Component {

    constructor(){
        super();
        this.state = {
            username : '',
            comments : '',
            topic : 'React'
        }
        this.onUserNameChange = this.onUserNameChange.bind(this)
        this.onCommentsChange = this.onCommentsChange.bind(this)
    }
    onUserNameChange(event){
        this.setState({
            username : event.target.value
        })
    }

    onCommentsChange(event){
        this.setState({
            comments : event.target.value
        })
    }

    onTopicChange = event => {
        this.setState({
            topic : event.target.value
        })
    }

    onSubmitHandler = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }

    onResetForm = event => {
        this.setState({
            username : '',
            comments : '',
            topic : 'React'
        })
    }

    render(){   //Controlled Component .... form feilds are controlled by react
        const {username ,comments , topic} = this.state;
        return(
            <form onSubmit = {this.onSubmitHandler} onReset = {this.onResetForm}>
                <div>
                    <label>User name : </label>
                    <input type='text' onChange = {this.onUserNameChange} value={username}/>
                </div><br />
                <div>
                    <label>Comments : </label>
                    <textarea onChange = {this.onCommentsChange} value={comments}></textarea>
                </div><br />
                <div>
                    <label>Topic : </label>
                    <select onChange = {this.onTopicChange} value={topic}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div><br />
                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
            </form>
        )
    }
}

export default Form