import React , {useContext} from 'react'
import ComponentF2 from './ComponentE2'
import {userContext , channelContext} from '../App'

function ComponentE2() {

    const user = useContext(userContext)
    const channel = useContext(channelContext)

    return(
        <div>
            {/* {user} - {channel} */}
           <ComponentF2 />
        </div>
    )
}

export default ComponentE2