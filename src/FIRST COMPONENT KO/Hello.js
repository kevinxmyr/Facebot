import React, { Component } from 'react';
// import React from 'react';
import './Hello.css'

class Hello extends Component {
    state = {  } 
    render() { 
        return (
            <div className='f1 tc'>
                <h1>Hello World</h1>
                <h6>This is a paragraph: {this.props.greeting}</h6>
            </div>
        );
    }
}


// ARROW FUNCTION METHOD

// const Hello = (props) => {
//     return(
//         <div className='tc f1'>
//             <h1>My Pet</h1>
//             <p className='b'> your pet name is: {props.dog}</p>
//         </div>
//     )
// }
export default Hello;