import React from 'react'

const Card = ({ robotid, robotname, robotemail, dog }) => {

    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${robotid}?200x200`} alt='' />
            <div>
                <h2>{robotname}</h2>
                <p>{robotemail}</p>
            </div>
        </div>
    );
}

export default Card;