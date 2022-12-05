import react from 'react';

export default function Test(){
    let shibaArr = ['shiba 1', 'shiba 2'];

    const shibaElement = shibaArr.map((item)=>{
        return(
            <p key={item}>{item}</p>
        )
    })

    function addShibaItem(){
        shibaArr.push(`shiba ${shibaArr.length+1}`);
        console.log(shibaArr);
    }
    //spoiler: the page won't update when new things get added to the array

    return (
        <div>
            <button onClick={addShibaItem}>Add Item</button>
            {shibaElement}
        </div>
    )
}
