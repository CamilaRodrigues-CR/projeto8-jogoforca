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
  
  const [erros, setErros] = useState(0)
  const [palavraEscolhida, setPalavraEscolhida] = useState([])
  const [palavraJogo, setPalavraJogo] = useState([])
  const [letrasClicadas, setLetrasClicadas] = useState (alfabeto)

  function iniciarJogo(){
    setErros(0);
    setLetrasClicadas([]);
    escolherPalavra();
  }

  function escolherPalavra(){
    const i = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[i];

    const palavraSorteada = palavra.split("")
    
    setPalavraEscolhida (palavraSorteada);

    let traco = []
    palavraSorteada.forEach(() => traco.push(" _"))
    setPalavraJogo (traco) 
  }

  function letraEscolhida(letra) {
      setLetrasClicadas ([...letrasClicadas, letra])

      if (palavraEscolhida.includes(letra)){
        letraCerta(letra)
      } else {
        letraErrada(letra)
      }

  }

  function letraCerta(letra) {
    
  }

  function letraErrada(letra) {
    const erroTotal = erros + 1
    setErros(erroTotal)
  }


  return (
    <div className="container">

      <div className="container-jogo">
        <img src={imagens[erros]} alt="forca" />
        <div className="container-palavra">
          <button onClick={iniciarJogo} className="escolher-palavra"> Escolher Palavra </button>
          <h1> {palavraJogo}</h1>
        </div>
      </div>
      <div className="container-letras">
        {alfabeto.map((letra) => (
        <button 
          key={letra} 
          disabled={letrasClicadas.includes(letra)}
          onClick = {() => letraEscolhida(letra)}
          >
            {letra}
            </button>
        ))}
      </div>
      
    </div>
  );
}

 
