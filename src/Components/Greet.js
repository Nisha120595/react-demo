import React from 'react';

// function Greet(){
//     return <h1>Hello Nisha Rajput</h1>
// }


// export const Greet = props => {
// return (
//      <div>
//           <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//           {props.children}
//     </div>
//   )
// }


// export const Greet = ({name,heroName}) => { // Destructuring first way
//   return (
//        <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//       </div>
//     )
// }

export const Greet = props => { // Destructuring second way
  const {name,heroName} = props;
  return  <h1 data-testid="greetings" className='greetings-class'>Hi {name} a.k.a {heroName}</h1>
}

//export default Greet
