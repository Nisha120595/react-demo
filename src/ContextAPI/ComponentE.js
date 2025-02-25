import React , {Component} from 'react'
import ComponentF from './ComponentE'
import UserContext from './UserContext'

class ComponentE extends Component {

    static contextType = UserContext //OR (ComponentE.contextType = UserContext) ==> (outside class)

    render(){ //In render method usercontext value is available as this.context
        return (
            <div>
                ComponentE context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = UserContext //OR (static contextType = UserContext) ==> (in class)
export default ComponentE