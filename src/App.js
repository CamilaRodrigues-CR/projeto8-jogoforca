import { useState } from "react";
import palavras from "./palavras";
import alfabeto from "./letras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function App() {

  const [erros, setErros] = useState(0)
  const [palavraEscolhida, setPalavraEscolhida] = useState([])
  const [palavraJogo, setPalavraJogo] = useState([])
  const [letrasClicadas, setLetrasClicadas] = useState(alfabeto)
  const [cor, setCor] = useState("preto")

  function iniciarJogo() {
    setErros(0);
    setLetrasClicadas([]);
    escolherPalavra();
    setCor("preto")
  }


  function jogoAcabou() {
    setPalavraJogo(palavraEscolhida);
    setLetrasClicadas(alfabeto);

  }


  function escolherPalavra() {
    const i = Math.floor(Math.random() * palavras.length);
    const palavra = palavras[i];

    const palavraSorteada = palavra.split("")

    setPalavraEscolhida(palavraSorteada);

    let traco = []
    palavraSorteada.forEach(() => traco.push(" _"))
    setPalavraJogo(traco)
  }

  function letraEscolhida(letra) {
    setLetrasClicadas([...letrasClicadas, letra])

    if (palavraEscolhida.includes(letra)) {
      letraCerta(letra)
    } else {
      letraErrada(letra)
    }

  }

  function letraCerta(letra) {
    const novoAcerto = [...palavraJogo]

    palavraEscolhida.forEach((l, i) => {
      if (l === letra) {
        novoAcerto[i] = letra
      }
    })

    setPalavraJogo(novoAcerto)

    if (!novoAcerto.includes(" _")) {
      setCor("verde")
      jogoAcabou()
    }
  }

  function letraErrada(letra) {
    const erroTotal = erros + 1
    setErros(erroTotal)


    if (erroTotal === 6) {
      setCor("vermelha")
      jogoAcabou()

    }

  }


  return (
    <div className="container">

      <div className="container-jogo">
        <img src={imagens[erros]} alt="forca" />
        <div className="container-palavra">
          <button onClick={iniciarJogo} className="escolher-palavra"> Escolher Palavra </button>
          <h1 className={cor}> {palavraJogo}</h1>
        </div>
      </div>
      <div className="container-letras">
        {alfabeto.map((letra) => (
          <button
            key={letra}
            disabled={letrasClicadas.includes(letra)}
            onClick={() => letraEscolhida(letra)}
          >
            {letra}
          </button>
        ))}
      </div>

    </div>
  );
}


