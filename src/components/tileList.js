import React from 'react';
import { Tile } from './tile';

export function TileList({array}) {
    return (
        <div>
            {
                array.map((element, index)=> {
                    return <Tile object={element} key={index}/>
                })
            }
        </div>
    )
}