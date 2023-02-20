import Jogo from "./Jogo"
import Letras from "./Letras";
import { useState } from "react"
import palavras from "./palavras.js"
export default function App(){
    const [erro, setErro] = useState (0);
    const [gameStart, setGameStart] = useState(false);
    return (
        <div className="container" >
            
            <Jogo erro={erro} arrayDePalavras={palavras}  setGameStart={setGameStart}/>
            <Letras gameStart={gameStart}/>
        </div>
    )

}