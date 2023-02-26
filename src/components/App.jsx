import Jogo from "./Jogo"
import Letras from "./Letras";
import { useState } from "react"
import palavras from "./palavras.js"


export default function App() {
    const [erro, setErro] = useState(0);
    const [letraClicada, setLetraClicada] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [arrayTracinhos, setArrayTracinhos] = useState("")
    const [palavraSoletrada, setPalavraSoletrada] = useState("");
    const [acertos, setAcertos] = useState (0)
    const [ganhou , setGanhou] = useState("verde")
    const [perdeu , setPerdeu] = useState ("vermelho")
    const [disableButton , setDisableButton] = useState (false)
    const [arrayClicadas , setArrayClicadas] = useState ([])
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
                setArrayClicadas ={setArrayClicadas} />

            <Letras key={`1${acertos}`}
                setErro={setErro}
                letraClicada={letraClicada}
                setLetraClicada={setLetraClicada}
                setArrayTracinhos={setArrayTracinhos}
                arrayTracinhos={arrayTracinhos}
                palavraSoletrada={palavraSoletrada}
                disabled={disabled}
                setAcertos={setAcertos}
                acertos={acertos}
                disableButton={disableButton}
                setDisableButton={setDisableButton}
                arrayClicadas={arrayClicadas}
                setArrayClicadas={setArrayClicadas}
            />
        </div>
    )

}