import Jogo from "./Jogo"
import Letras from "./Letras";
import { useState } from "react"
import palavras from "./palavras.js"
export default function App(){
    const [erro, setErro] = useState (0);
    const [gameStart, setGameStart] = useState(false);
    const [letraClicada, setLetraClicada] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [palavraEscolhida, setPalavraEscolhida] = useState([])
    const [vetorDasLetras, setVetorDasLetras] = useState("");
    
    return (
        <div className="container" >
            
            <Jogo key={`${vetorDasLetras}`} erro={erro} setErro={setErro} arrayDePalavras={palavras} gameStart={gameStart} setGameStart={setGameStart} letraClicada={letraClicada}
            palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida}
            vetorDasLetras={vetorDasLetras} setVetorDasLetras={setVetorDasLetras}/>

            <Letras key={`1${palavraEscolhida}`} gameStart={gameStart} setLetraClicada={setLetraClicada} disabled= {disabled}  setDisabled={setDisabled}/>
        </div>
    )

    
}