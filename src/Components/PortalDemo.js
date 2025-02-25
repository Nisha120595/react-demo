import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo(params) {
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>,
        document.getElementById("portal-root")
    )
    // return ReactDOM.render(  // working same as ReactDOM.createPortal
    //     <h1>Portal Demo</h1>,
    //     document.getElementById("portal-root")
    // )
}

export default PortalDemo