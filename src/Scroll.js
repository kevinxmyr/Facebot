import React from 'react';

//children
const Scroll = (props) => {
    // return props.children -- Kung anong children sa Scroll component sama na
    return (
    <div style={{overflowY: 'scroll', border: '0px solid black', height: '500px'}}>
            {props.children}
    </div>
    );
}
 
export default Scroll;