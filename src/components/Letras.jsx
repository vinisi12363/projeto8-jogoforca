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



export default function Letras({ erro, setErro, setArrayTracinhos, arrayTracinhos, palavraSoletrada, disabled, setAcertos, acertos, disableButton, setDisableButton, arrayClicadas, setArrayClicadas, setGanhou, setPerdeu, gameOver, setGameOver, setDisabled}) {

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
                                setDisabled={setDisabled}

                            />

                        ))

                    }
                </div>

            </div>


        </>
    )

}

function Botoes({ letra, erro, setErro, arrayTracinhos, setArrayTracinhos, setPalavraSoletrada, palavraSoletrada, acertos, setAcertos, arrayClicadas, setArrayClicadas, setGanhou, setPerdeu, gameOver, setGameOver, setDisableButton, setDisabled }) {
   

    



    function botaoClicado(l) {



        palavraSoletrada.forEach((elemento, index) =>

            console.log('array[ ' + index + ' ] = ' + elemento)

        );

        if (palavraSoletrada.includes(l.toLowerCase())) {

            for (let i = 0; i < palavraSoletrada.length; i++) {
                if (palavraSoletrada[i] === l.toLowerCase()) {
                    arrayTracinhos.slice(arrayTracinhos[i] = l.toLowerCase())
                    setAcertos(acertos += 1)

                }
            }



        } else {
            setErro(erro+=1)
        }

        if (acertos == arrayTracinhos.length || palavraSoletrada === arrayTracinhos) {
            setAcertos(acertos += 1)
            setGanhou(true)
            setGameOver(true)
            arrayClicadas = []
            setArrayClicadas(arrayClicadas)
        }
        console.log("errovale ",erro)
        if (erro == 6) {
            setErro(erro)
            setPerdeu(true)
            arrayClicadas = []
            setArrayClicadas(arrayClicadas)
            setGameOver(true);
            arrayTracinhos = palavraSoletrada;
            setArrayTracinhos(arrayTracinhos);

        }





        setArrayTracinhos(arrayTracinhos)


    }


    function desabilitarBtn(letra) {
        setArrayClicadas([...arrayClicadas, letra])
    }

    return (

        <button
            key={letra}
            className={`btnLetra  `}
            disabled={((arrayClicadas.length === 0 || arrayClicadas.includes(letra)) ? true : false) || (gameOver)}
            onClick={() => { botaoClicado(letra); desabilitarBtn(letra) }}
            data-test="letter">{letra}</button>

    )


}


