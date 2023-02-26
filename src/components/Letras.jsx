import React from "react"
let alfabeto = [
    { letra: 'A' },
    { letra: 'B' },
    { letra: 'C' },
    { letra: 'D' },
    { letra: 'E' },
    { letra: 'F' },
    { letra: 'G' },
    { letra: 'H' },
    { letra: 'I' },
    { letra: 'J' },
    { letra: 'K' },
    { letra: 'L' },
    { letra: 'M' },
    { letra: 'N' },
    { letra: 'O' },
    { letra: 'P' },
    { letra: 'Q' },
    { letra: 'R' },
    { letra: 'S' },
    { letra: 'T' },
    { letra: 'U' },
    { letra: 'V' },
    { letra: 'W' },
    { letra: 'X' },
    { letra: 'Y' },
    { letra: 'Z' },
]
let cont = 0;



export default function Letras({ erro,setErro, setArrayTracinhos, arrayTracinhos, palavraSoletrada, disabled, setAcertos, acertos, disableButton, setDisableButton ,arrayClicadas ,setArrayClicadas,setGanhou,setPerdeu,gameOver,setGameOver}) {

    return (
        <>

            <div className="areaAlfabeto">
                <div className="areaBotoesAlfabeto">
                    {
                        alfabeto.map(a => (

                            <Botoes
                                letra={a.letra}
                                erro={erro}
                                setErro={setErro}
                                arrayTracinhos={arrayTracinhos} setArrayTracinhos={setArrayTracinhos}
                                palavraSoletrada={palavraSoletrada}
                                disabled={disabled}
                                setAcertos={setAcertos}
                                acertos={acertos}
                                disableButton={disableButton}
                                setDisableButton={setDisableButton}
                                arrayClicadas={arrayClicadas}
                                setArrayClicadas={setArrayClicadas}
                                setGanhou={setGanhou}
                                setPerdeu={setPerdeu}
                                gameOver={gameOver}
                                setGameOver={setGameOver}

                            />

                        ))

                    }
                </div>

            </div>


        </>
    )

}

function Botoes({ letra, erro , setErro, arrayTracinhos, setArrayTracinhos, palavraSoletrada, acertos ,setAcertos, arrayClicadas , setArrayClicadas,setGanhou,setPerdeu, gameOver,setGameOver }) {
    
    function endGame(){

        if ( acertos+1 === palavraSoletrada.length || palavraSoletrada === arrayTracinhos){
            setAcertos(acertos+=1)
            console.log("entrou no gameOver")
            let arrayVazio = []
            setGanhou(true)
            setGameOver(true)
            setArrayClicadas([...arrayVazio ,arrayVazio])
        }if(erro>=5){
            setErro(erro+=1)
            setPerdeu(true)
            setGameOver(true)
            arrayClicadas=[]
            setArrayClicadas=(arrayClicadas)
        }
    }

   

    function botaoClicado(l) {
        let contAcertos = 0;
            
       

        palavraSoletrada.forEach((elemento, index) =>

            console.log('array[ ' + index + ' ] = ' + elemento)

        );
        
        if (palavraSoletrada.includes(l.toLowerCase())) {

            for (let i = 0; i < palavraSoletrada.length; i++) {
                if (palavraSoletrada[i] === l.toLowerCase()) {
                    arrayTracinhos.slice(arrayTracinhos[i] = l.toLowerCase())
                    contAcertos++;

                }
            }



        } else {
            cont += 1;
            setErro(cont)
        }
        if (erro >= 5){
            setErro(erro+=1)
            console.log(erro)
            setPerdeu(true)
            arrayClicadas = []
            setArrayClicadas(arrayClicadas)
            setGameOver(true);
            console.log("Array clicadas: ",arrayClicadas +"tamanho:",arrayClicadas.length)
          
        }
        setAcertos(contAcertos);
        setArrayTracinhos(arrayTracinhos)
        if(acertos+1 === palavraSoletrada.length)
        endGame()        
    }

    
    function desabilitarBtn(letra) {
        setArrayClicadas([...arrayClicadas, letra])
        console.log(arrayClicadas);
    }

    return (

        <button
            key ={letra}
            className={`btnLetra  `}
            disabled={((arrayClicadas.length=== 0 || arrayClicadas.includes(letra))? true : false )||(gameOver)}
            onClick={() => { botaoClicado(letra); desabilitarBtn(letra) }} 
            data-test="letter">{letra}</button>

    )


}


