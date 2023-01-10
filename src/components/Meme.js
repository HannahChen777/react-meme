import React from 'react';
import memesData from '../memesData';

export default function Meme() {
    let memeArr = memesData.data.memes;
    let randomNum = Math.floor(Math.random() * memeArr.length);
    let randomImg = memeArr[randomNum].url;
    // const [allMemeImg, setAllMemeImg] = React.useState(memesData);

    let data = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    }

    const [meme, setMeme] = React.useState(data);

    function getMemeImg(){
        setMeme(previousValue => ({
            ...previousValue,
            randomImg: randomImg
        })
    )}

    return (
        <main>
            <section className="meme-main">
                {/* <form>with<button>will really submit data from input till you stop</form> */}
                <div className="meme-form">
                    <input 
                        type="text"
                        placeholder="Top Text"
                        className="meme-input" 
                    />
                    <input 
                        type="text" 
                        placeholder="Button Text"
                        className="meme-input" 
                    />
                    <button onClick={getMemeImg} className="meme-button">Get my new meme image</button>
                    <img className="meme-img" src={meme.randomImg} />
                </div>
            </section>
        </main>
    )

    /*
    function greeting(name){
        let date = new Date();
        let hour = date.getHours();
        let timeOfDay;
        if ( hour >= 4 && hour < 12){
            timeOfDay = 'morning';
        } else if ( hour >= 12 && hour < 17){
            timeOfDay = 'afternoon';
        } else if ( hour >= 17 && hour < 20 ){
            timeOfDay = 'evening';
        } else if ( hour >= 20 || hour < 4 ){
            timeOfDay = 'night';
        }
        return `Good ${timeOfDay}, ${name}!`;
    }
    
    greeting('Hannah');
    */
}

//onMouseOver vs onMouseEnter
//there's a bit different in children element