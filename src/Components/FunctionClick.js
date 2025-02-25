import React from "react";
// -------EVENT HANDLING------
function functionClick(){

    function clickHandler(){
        console.log("Button clicked");
    }
    return (
        <div>
            <button onClick= {clickHandler}>click</button> 
        </div>
    ) //1. Do not use ====> onClick = {clickHandler()}
      //2. Use Camel Case (e.g.  ---> onClick)
}

export default functionClick;