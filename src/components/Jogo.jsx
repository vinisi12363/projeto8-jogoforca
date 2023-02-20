import { useState } from "react"
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



export default function Jogo({ erro, setErro, arrayDePalavras , setGameStart, letraClicada , palavraEscolhida , setPalavraEscolhida}) {
    let arrayPalavraSorteada = []
    
    function sortearPalavra() {
        const randomIndex = getRandomInt(0, arrayDePalavras.length - 1)
       
        arrayPalavraSorteada.push(arrayDePalavras[randomIndex].split(''))
        console.log("teste de Array char: ",arrayPalavraSorteada)
        setPalavraEscolhida(arrayDePalavras[randomIndex])
        setGameStart(true);
        

    }
    

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    


    return (
        <>
            <div className="imgForca">
                <img src={arrayForca[erro]} />
            </div>
            <div className="AreaDeInteracao">
                <button className="btnEscolherPalavra" onClick={() => sortearPalavra()}>Escolher Palavra</button>
                <div className="AreaDasLetras">{palavraEscolhida}</div>
            </div>
        </>


    )
}