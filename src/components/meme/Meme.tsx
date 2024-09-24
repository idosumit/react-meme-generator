import memesData from "./memesData";
import { useState } from "react";

interface Meme {
  url: string;
  // add other properties if needed
}

interface MemeData {
  data: {
    memes: Meme[];
  };
}

export default function Meme() {
  const [memeImage, setMemeImage] = useState<string>("");

  function getMemeImage() {
    const memesArray: Meme[] = (memesData as MemeData).data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      {memeImage && <img src={memeImage} alt="Meme" className="meme--image" />}
    </main>
  );
}
