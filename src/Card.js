import React from 'react';

function Card({ id, name, email }) {
    return (
        <div className = "tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow">
            <img src={`https://robohash.org/${id}?size=250x250`} alt='robot'/>
            <h2>{ name }</h2>
            <p>{ email }</p>
        </div>
    );
}

export default Card;