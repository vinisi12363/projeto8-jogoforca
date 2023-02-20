import Jogo from "./Jogo"
import Letras from "./Letras";
import { useState } from "react"
import palavras from "./palavras.js"
export default function App(){
    const [erro, setErro] = useState (0);
    const [gameStart, setGameStart] = useState(false);
    const [letraClicada, setLetraClicada] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [palavraEscolhida, setPalavraEscolhida] = useState("")
    
    return (
        <div className="container" >
            
            <Jogo erro={erro} setErro={setErro} arrayDePalavras={palavras}  setGameStart={setGameStart} letraClicada={letraClicada}
            palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida}/>
            <Letras gameStart={gameStart} setLetraClicada={setLetraClicada} disabled= {disabled}  setDisabled={setDisabled}/>
        </div>
    )

    
}