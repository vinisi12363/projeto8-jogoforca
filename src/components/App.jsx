import Jogo from "./Jogo"
import Letras from "./Letras";
import { useState } from "react"
import palavras from "./palavras.js"


export default function App() {
    const [erro, setErro] = useState(0);
    const [gameStart, setGameStart] = useState(false);
    const [letraClicada, setLetraClicada] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [palavraEscolhida, setPalavraEscolhida] = useState([])
    const [vetorDasLetras, setVetorDasLetras] = useState("");

    return (
        <div className="container" >

            <Jogo key={`${vetorDasLetras}`}
                erro={erro}
                arrayDePalavras={palavras}
                setVetorDasLetras={setVetorDasLetras}
                setPalavraEscolhida={setPalavraEscolhida}
                palavraEscolhida={palavraEscolhida}
                setDisabled={setDisabled} />

            <Letras key={`1${palavraEscolhida}`}
                erro={erro}
                setErro={setErro}
                gameStart={gameStart}
                setGameStart={setGameStart}
                letraClicada={letraClicada}
                setLetraClicada={setLetraClicada}
                palavraEscolhida={palavraEscolhida}
                vetorDasLetras={vetorDasLetras}
                disabled={disabled}
            />
        </div>
    )

}