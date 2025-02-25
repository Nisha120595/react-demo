import React from 'react'
import {userContext , channelContext} from '../App'

function ComponentF2() {
    return(
        <div>
           <userContext.Consumer>
               {userName => {
                    return (
                       <channelContext.Consumer>
                            {channel => {
                                   return <div>User Context value {userName.name} channel context {channel.name}</div>
                                }
                            }
                        </channelContext.Consumer>
                    )
                   }
               }
           </userContext.Consumer>
        </div>
    )
}

export default ComponentF2