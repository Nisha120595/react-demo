import React from 'react';

const Hello = () => {
    // return (
    //     <div id = "hello" class = "dummyClass">
    //         <h1 id = "nisha">Hello Nisha Rajput</h1>
    //     </div>
    // );

    //return React.createElement('div' , null , '<h1>Hello Nisha Rajput</h1>');
    //return React.createElement('div' , null , 'h1' , 'Hello Nisha Rajput');
    return React.createElement(
        'div' , 
        {id: 'hello' , className: 'dummyClass'} , 
        React.createElement('h1' , {id: 'nisha'} , 'Hello Nisha Rajput')
    );
}

export default Hello