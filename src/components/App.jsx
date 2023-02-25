import Jogo from "./Jogo"
import Letras from "./Letras";
import { useState } from "react"
import palavras from "./palavras.js"


export default function App() {
    const [erro, setErro] = useState(0);
    const [letraClicada, setLetraClicada] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [arrayTracinhos, setArrayTracinhos] = useState([])
    const [palavraSoletrada, setPalavraSoletrada] = useState("");

    return (
        <div className="container" >

            <Jogo key={`${palavraSoletrada}`}
                erro={erro}
                arrayDePalavras={palavras}
                setPalavraSoletrada={setPalavraSoletrada}
                setArrayTracinhos={setArrayTracinhos}
                arrayTracinhos={arrayTracinhos}
                setDisabled={setDisabled} />

            <Letras key={`1${arrayTracinhos}`}
                setErro={setErro}
                letraClicada={letraClicada}
                setLetraClicada={setLetraClicada}
                arrayTracinhos={arrayTracinhos}
                palavraSoletrada={palavraSoletrada}
                disabled={disabled}
            />
        </div>
    )

}