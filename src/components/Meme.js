import react from 'react';
import memesData from '../memesData';

export default function Meme() {
    function getMemeImg(){
        let memesArr = memesData.data.memes;
        let randomNum = Math.floor(Math.random() * memesArr.length);
        let imgUrl = memesArr[randomNum].url;
        console.log(imgUrl);

        return (
            <div>
                <img src={imgUrl}/>
            </div>
        )
    }

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
                </div>
            </section>
        </main>
    )
}

//onMouseOver vs onMouseEnter
//there's a bit different in children element