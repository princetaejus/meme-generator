import { useState, useEffect, useRef } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    const memeRef = useRef(null)
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newMemeUrl
        }))
    }
    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    // DOWNLOAD FEATURE
    function downloadMeme() {
        const memeElement = memeRef.current
        
        import('html2canvas').then(html2canvas => {
            html2canvas.default(memeElement, {
                backgroundColor: null,
                scale: 2,
                useCORS: true
            }).then(canvas => {
                const link = document.createElement('a')
                link.download = 'meme.png'
                link.href = canvas.toDataURL('image/png')
                link.click()
            })
        })
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                
                {/* Get meme button ABOVE the meme */}
                <button onClick={getMemeImage} className="get-meme-btn">
                    Get a new meme image 🖼
                </button>
            </div>
            
            {/* Meme display */}
            <div className="meme" ref={memeRef}>
                <img src={meme.imageUrl} alt="Meme" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
            
            {/* Download button BELOW the meme */}
            <button onClick={downloadMeme} className="download-btn">
                <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
            </button>
        </main>
    )
}