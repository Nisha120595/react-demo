import React from 'react'

const UserContext = React.createContext('Default Context Value')
const UserProvider = UserContext.Provider  //Provider Component
const UserConsumer = UserContext.Consumer  //Consumer component

export { UserProvider , UserConsumer }  //For Consumer way
export default UserContext // For contextType way