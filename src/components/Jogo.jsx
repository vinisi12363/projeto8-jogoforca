import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"



const arrayForca = [
    forca0,
    forca1,
    forca2,
    forca3,
    forca4,
    forca5,
    forca6

]


export default function Jogo({ erro,setErro,acertos,setAcertos,disabled,setDisabled,arrayDePalavras,palavraSoletrada,setPalavraSoletrada,setArrayTracinhos,arrayTracinhos,arrayClicadas,setArrayClicadas,ganhou,perdeu,setGanhou,setPerdeu,disableButton,setDisableButton,gameOver,setGameOver,
}) {
    function resetGame() {
        
        if ((erro >= 5 || perdeu) || (palavraSoletrada===arrayTracinhos && ganhou)) {
            console.log("resetando variaveis")
            setErro(0)
            setAcertos(0)
            setDisabled(true)
            setArrayTracinhos("")
            setPalavraSoletrada("");
            setGanhou(false)
            setPerdeu(false)
            setDisableButton(false)
            arrayClicadas = []
            setArrayClicadas(arrayClicadas)
            setGameOver(false)
            // window.location.reload(true) 
            console.log(" erro", erro + "acertos", acertos + "palavra soletrada", palavraSoletrada)
        }
    }
    function sortearPalavra() {
        const randomIndex = getRandomInt(0, arrayDePalavras.length - 1)
        setPalavraSoletrada(arrayDePalavras[randomIndex].split(''))
        setArrayTracinhos([...Array(arrayDePalavras[randomIndex].length).fill(" _ ")])
        setDisabled(false);
        setArrayClicadas(...arrayClicadas, "1")

    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }


    return (
        <>
            <div className="imgForca">
                <img src={(erro < 6) ? arrayForca[erro] : arrayForca[6]} data-test="game-image" />
            </div>
            <div className="areaDeInteracao">

                <>
                    <button className="btnEscolherPalavra" onClick={() => {sortearPalavra(); gameOver && resetGame()}} data-test="choose-word">Escolher Palavra</button>

                    <div className={`areaDasLetras ${(ganhou || acertos === palavraSoletrada.length) ? "verde" : ""} ${perdeu ? "vermelho" : ""}`} data-test="word">
                        {
                            arrayTracinhos
                        }
                    </div>
                </>

            </div>
        </>


    )
}

