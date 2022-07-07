import React from 'react';

export function Tile({object}) {
    const newArr = Object.values(object);

    return (
        <div className='tile-container'>
            {
            newArr.map((element, index) => {
                if(index === 0) {
                    return <p className='tile-title' key={index}>{element}</p>
                } else {
                    return <p className='tile' key={index}>{element}</p>
                }
            })
            }
            <p>____________________</p>
        </div>
    );
}