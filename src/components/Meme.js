import React, { useEffect, useState, useRef } from 'react';
import html2canvas from 'html2canvas';

export default function Meme() {

    const [allMemes, setAllMemes] = useState([]);
    
    const canvasRef = useRef(null);
    const imageRef = useRef(null);

    /*
    useEffect takes a function as its parameter. If that function returns
    something, it needs to be a cleanup function. Otherwise,
    it should return nothing.
    If we makeit an sync function, it automatically returns a promise
    instead of a function or nothing. Therefore, if you want to use
    async operations inside of useEffect, you need to define the function
    separately inside of the callback function, as see below:
    */

    // useEffect(async function(){
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.data.memes);
    //             setAllMemes(data.data.memes)
    //         });
    // }, [])

    useEffect(() => {
        async function fetchMemeImg(){
            console.log('useEffect run');
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        }

        fetchMemeImg();
        // if need return a cleanup function;
        // return ()=> {
        //    ...
        //}
    }, [])

    /* the above derived from here */
    // useEffect(function(){
    //     async function fetchMemeImg(){
    //         fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .catch(data => {
    //             console.log(data.data.memes);
    //             setAllMemes(data.data.memes);
    //         })
    //     }
        
    //     fetchMemeImg();
    //     // if need
    //     // return cleanup function;
    // })
    /* the above derived from here */


    function getMemeImg(){
        let randomNum = Math.floor(Math.random() * allMemes.length);
        let randomImg = allMemes[randomNum].url;
        setFormData(previousValue => ({
            ...previousValue,
            randomImg: randomImg
            }));

            // const canvas = canvasRef.current;
            
            // // naturalWidth => the original size of image
            // // offsetWidth => the rendered image on the web page
            
            // canvas.width = imageRef.current.naturalWidth;
            // canvas.height = imageRef.current.naturalHeight;
            // console.log(canvas);

            // const ctx = canvas.getContext('2d');
            // ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);
    }

    let [formData, setFormData] = useState({
        topText: '',
        bottomText: '',
        randomImg: "https://i.imgflip.com/39t1o.jpg"
    });

    function handleFormData(event){
        const {name, value} = event.target; 
        setFormData(previousValue => ({
            ...previousValue,
            [name]: value
        }))
    }
    console.log(formData);


    
    function handleDownload(){
        const memeContainer = document.querySelector('.meme');
        html2canvas(memeContainer, {useCORS: true, logging: false}).then(canvas => {
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'my-meme.png';
            link.href = dataUrl;
            link.click();
        })
        
    }

    // this func can't get font-style of texts
    // function handleDownload(){
    //     const canvas = canvasRef.current;
            
    //     naturalWidth => the original width of image
    //     offsetWidth => the rendered width of image on the web page
        
    //     canvas.width = imageRef.current.naturalWidth;
    //     canvas.height = imageRef.current.naturalHeight;
    //     console.log(canvas);

    //     const ctx = canvas.getContext('2d');
    //     ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);

    //     ctx.font = '2em sans-serif';
    //     ctx.fillStyle = 'white';
    //     ctx.textAlign = 'center';

    //     ctx.shadowColor = 'black';
    //     ctx.shadowBlur = 10;
    //     ctx.shadowOffsetX = 2;
    //     ctx.shadowOffsetY = 5;

    //     ctx.fillText(formData.topText, canvas.width / 2, 60);
    //     ctx.fillText(formData.bottomText, canvas.width / 2, canvas.height - 60);

    //     const dataUrl = canvas.toDataURL('image/jpg');
    //     const link = document.createElement('a');
    //     link.href = dataUrl;
    //     console.log(link);
    //     link.download = 'meme.png';
    //     document.body.appendChild(link);
    //     link.click();
    //     console.log(canvas);
    //     document.body.removeChild(link);
    // };

    return (
        <main>
            <section className="meme-main">
                {/* <form>with<button>will really submit data from input till you stop</form> */}
                <div className="meme-form">
                    {/* <canvas className="canvas meme-text" ref={canvasRef}/> */}
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
                    <button onClick={getMemeImg} className="meme-button">Get Meme Image</button>
                    <div className="meme">
                        <img className="meme-img" src={formData.randomImg} ref={imageRef} crossOrigin="anonymous" />
                        <h2 className="meme-text top">{formData.topText}</h2>
                        <h2 className="meme-text bottom">{formData.bottomText}</h2>
                    </div>
                    <button onClick={handleDownload} className="meme-button download-button">Download My Meme Image</button>
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