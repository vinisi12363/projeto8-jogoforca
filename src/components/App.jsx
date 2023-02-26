import Jogo from "./Jogo"
import Letras from "./Letras";
import { useState } from "react"
import palavras from "../palavras"


export default function App() {
    const [erro, setErro] = useState(0);
    const [acertos, setAcertos] = useState(0)
    const [disabled, setDisabled] = useState(true);
    const [arrayTracinhos, setArrayTracinhos] = useState("")
    const [palavraSoletrada, setPalavraSoletrada] = useState("");
    const [ganhou, setGanhou] = useState(false)
    const [perdeu, setPerdeu] = useState(false)
    const [disableButton, setDisableButton] = useState(false)
    const [arrayClicadas, setArrayClicadas] = useState([])
    const [gameOver, setGameOver] = useState(false)
    return (
        <div className="container" >

            <Jogo key={`${palavraSoletrada}`}
                erro={erro}
                arrayDePalavras={palavras}
                setPalavraSoletrada={setPalavraSoletrada}
                setArrayTracinhos={setArrayTracinhos}
                arrayTracinhos={arrayTracinhos}
                setDisabled={setDisabled}
                arrayClicadas={arrayClicadas}
                setArrayClicadas={setArrayClicadas}
                ganhou={ganhou}
                perdeu={perdeu}
                setGanhou={setGanhou} 
                setPerdeu={setPerdeu}
                palavraSoletrada={palavraSoletrada}
                acertos={acertos}/>

            <Letras key={`1${acertos}`}
                erro={erro}
                setErro={setErro}
                setArrayTracinhos={setArrayTracinhos}
                arrayTracinhos={arrayTracinhos}
                setPalavraSoletrada={setPalavraSoletrada}
                palavraSoletrada={palavraSoletrada}
                disabled={disabled}
                setAcertos={setAcertos}
                acertos={acertos}
                disableButton={disableButton}
                setDisableButton={setDisableButton}
                arrayClicadas={arrayClicadas}
                setArrayClicadas={setArrayClicadas}
                setGanhou= {setGanhou}
                setPerdeu={setPerdeu}
                gameOver={gameOver}
                setGameOver={setGameOver}
                setDisabled={setDisabled}
                                
                />
        </div>
    )

}