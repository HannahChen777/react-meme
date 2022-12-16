import React from 'react';
import memesData from '../memesData';

export default function Meme() {
    function GetMemeImg(){
        let memeArr = memesData.data.memes;
        let randomNum = Math.floor(Math.random() * memeArr.length);
        let randomImg = memeArr[randomNum].url;
        const [MemeImg, IsMemeImg] = React.useState('');
        
        IsMemeImg(randomImg);

        return (
            <div>
                <img src={MemeImg}/>
            </div>
        )
    }

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
                    <button onClick={GetMemeImg} className="meme-button">Get my new meme image</button>
                </div>
            </section>
        </main>
    )
}

//onMouseOver vs onMouseEnter
//there's a bit different in children element