import React from 'react'

const Etoile = ({x, onChangeRating})=>{
    let tabetoile =[]
    for (let i =0; i<5;i++){
        if (i < x)
            { tabetoile.push(<span onClick={() => onChangeRating(i + 1)} key={i}>★</span>) }
    else
            { tabetoile.push(<span onClick={() => onChangeRating(i + 1)} key={i}>☆</span>) }
    }
    return (
        <div>{tabetoile}</div>
    )
}

 
export default Etoile