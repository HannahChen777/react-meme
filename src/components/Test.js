import React from 'react';

export default function Test(){
    let [isShibaArr, setShibaArr] = React.useState(['shiba 1', 'shiba 2']);
    console.log(isShibaArr);

    const shibaElement = isShibaArr.map((item)=>{
        return(
            <p key={item}>{item}</p>
        )
    })

    function addShibaItem(){
        // we shouldn't never ever directly modify the previous variable
        // isShibaArr.push(`shiba ${isShibaArr.length+1}`);
        setShibaArr(function(previousValue){
            //return previousValue.push(`shiba ${previousValue.length + 1}`); //can't do this but don't know why yet
            return [...previousValue, `shiba ${previousValue.length + 1}`];
        })
    }

    return (
        <div>
            <button onClick={addShibaItem}>Add Item</button>
            {shibaElement}
        </div>
    )
}
