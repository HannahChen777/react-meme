import react from 'react';

export default function Meme() {
    return (
        <main>
            <section className="meme-main">
                <form className="meme-form">
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
                    <button className="meme-button">Get my new meme image</button>
                </form>
            </section>
        </main>
    )
}