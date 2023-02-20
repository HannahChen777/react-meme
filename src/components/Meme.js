import React, { useEffect, useState } from 'react';

export default function Meme() {

    const [allMemes, setAllMemes] = useState([]);

    useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                console.log(data.data.memes);
                setAllMemes(data.data.memes)
            });
    }, [])

    function getMemeImg(){
        let randomNum = Math.floor(Math.random() * allMemes.length);
        let randomImg = allMemes[randomNum].url;
        setFormData(previousValue => ({
            ...previousValue,
            randomImg: randomImg
        })
    )}

    let [formData, setFormData] = useState({
        topText: '',
        bottomText: '',
        randomImg: "http://i.imgflip.com/1bij.jpg"
    });

    function handleFormData(event){
        const {name, value} = event.target; 
        setFormData(previousValue => ({
            ...previousValue,
            [name]: value
        }))
    }
    
    console.log(formData);

    return (
        <main>
            <section className="meme-main">
                {/* <form>with<button>will really submit data from input till you stop</form> */}
                <div className="meme-form">
                    <input 
                        type="text"
                        placeholder="Top Text"
                        className="meme-input" 
                        name="topText"
                        onChange={handleFormData}
                        value={formData.topText}
                        
                    />
                    <input 
                        type="text" 
                        placeholder="Button Text"
                        className="meme-input" 
                        name="bottomText"
                        onChange={handleFormData}
                        value={formData.bottomText}
                    />
                    <button onClick={getMemeImg} className="meme-button">Get my new meme image</button>
                    <div className="meme">
                        <img className="meme-img" src={formData.randomImg} />
                        <h2 className="meme-text top">{formData.topText}</h2>
                        <h2 className="meme-text bottom">{formData.bottomText}</h2>
                    </div>
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


// export default function Meme() {
//     let memeArr = memesData.data.memes;
//     let randomNum = Math.floor(Math.random() * memeArr.length);
//     let randomImg = memeArr[randomNum].url;
//     // const [allMemeImg, setAllMemeImg] = React.useState(memesData);

//     let [formData, setFormData] = React.useState({
//         topText: '',
//         bottomText: '',
//         randomImg: randomImg
//     });

//     function handleFormData(event){
//         const {name, value} = event.target; 
//         setFormData(previousValue => ({
//             ...previousValue,
//             [name]: value
//         }))
//     }
    
//     console.log(formData);

//     const [meme, setMeme] = React.useState(memesData);

//     function getMemeImg(){
//         setMeme(previousValue => ({
//             ...previousValue,
//             randomImg: randomImg
//         })
//     )}

//     return (
//         <main>
//             <section className="meme-main">
//                 {/* <form>with<button>will really submit data from input till you stop</form> */}
//                 <div className="meme-form">
//                     <input 
//                         type="text"
//                         placeholder="Top Text"
//                         className="meme-input" 
//                         name="topText"
//                         onChange={handleFormData}
//                         value={formData.topText}
                        
//                     />
//                     <input 
//                         type="text" 
//                         placeholder="Button Text"
//                         className="meme-input" 
//                         name="bottomText"
//                         onChange={handleFormData}
//                         value={formData.bottomText}
//                     />
//                     <button onClick={getMemeImg} className="meme-button">Get my new meme image</button>
//                     <div className="meme">
//                         <img className="meme-img" src={meme.randomImg} />
//                         <h2 className="meme-text top">{formData.topText}</h2>
//                         <h2 className="meme-text bottom">{formData.bottomText}</h2>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     )

//     /*
//     function greeting(name){
//         let date = new Date();
//         let hour = date.getHours();
//         let timeOfDay;
//         if ( hour >= 4 && hour < 12){
//             timeOfDay = 'morning';
//         } else if ( hour >= 12 && hour < 17){
//             timeOfDay = 'afternoon';
//         } else if ( hour >= 17 && hour < 20 ){
//             timeOfDay = 'evening';
//         } else if ( hour >= 20 || hour < 4 ){
//             timeOfDay = 'night';
//         }
//         return `Good ${timeOfDay}, ${name}!`;
//     }
    
//     greeting('Hannah');
//     */
// }

//onMouseOver vs onMouseEnter
//there's a bit different in children element