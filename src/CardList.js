import React from 'react';
import Card from './Card';

const CardList = ({ robots1 }) => {
    // if (true){
    //     throw new Error('No....');
    
    return ( 
        <div>
            {
                robots1.map((userDefined, i) =>{
                    return (<Card 
                    key={i} 
                    robotid = {robots1[i].id} 
                    robotname = {robots1[i].name} 
                    robotemail = {robots1[i].email} />
                    )
                })
            }
        </div>
     );
}

//!--FIRST STATE ito read pag mag review 
// const CardList = ({ robots1 }) => {
//     const cardArray = robots1.map((userDefined, i) =>{
//         return (<Card 
//         key={i} 
//         robotid = {robots1[i].id} 
//         robotname = {robots1[i].name} 
//         robotemail = {robots1[i].email} />
//         )
//     })
//     return ( 
//         <>
//             {cardArray}
//         </>
//      );
// }

export default CardList;