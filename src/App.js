import palavras from "./palavras";
import alfabeto from "./letras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import { useState } from "react";

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function App() {
  
  const [erros, setErros] = useState(6)

  function iniciarJogo(){
    setErros(0);
    escolherPalavra();
  }

  function escolherPalavra(){
    const i = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[i];
    console.log(palavra)
  }
  return (
    <div className="container">

      <div className="container-jogo">
        <img src={imagens[erros]} alt="forca" />
        <button onClick={iniciarJogo} className="escolher-palavra"> Escolher Palavra </button>
        <h1> _ _ _ _ _ _</h1>

      </div>
      <div className="container-letras">
        {alfabeto.map((letra) => <button key={letra} disabled={true}>{letra}</button>)}
      </div>
      
    </div>
  );
}

 
