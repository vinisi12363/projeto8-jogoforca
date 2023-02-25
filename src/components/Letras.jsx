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

export default function Letras({
    setErro,
    gameStart,
    letraClicada, setLetraClicada,
    palavraEscolhida, setPalavraEscolhida,
    vetorDasLetras,
    disabled

}) {


    return (
        <>

            <div className="areaAlfabeto">
                <div className="AreaBotoesAlfabeto">
                    {
                        alfabeto.map(a => (

                            <Botoes
                                letra={a.letra}
                                setErro={setErro}
                                gameStart={gameStart}
                                letraClicada={letraClicada} setLetraClicada={setLetraClicada}
                                palavraEscolhida={palavraEscolhida} setPalavraEscolhida={setPalavraEscolhida}
                                vetorDasLetras={vetorDasLetras}
                                disabled={disabled}

                            />

                        ))

                    }
                </div>

            </div>


        </>
    )

}
function botaoClicado(letra, setErro,
    letraClicada, setLetraClicada,
    palavraEscolhida, setPalavraEscolhida,
    vetorDasLetras) {

    setLetraClicada(letra.toLowerCase());
    console.log(vetorDasLetras)
    const index = []
    let newArr = []
    newArr = palavraEscolhida
    if (vetorDasLetras.includes(letraClicada)) {

        newArr = vetorDasLetras.filter((letraClicada) => vetorDasLetras === letraClicada);


        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (i = index[i]) {
                newArr[i] = letraClicada;
            }
        }

        console.log(newArr)
        setLetraClicada("");
        setPalavraEscolhida([...newArr])
        console.log(palavraEscolhida)

    } else {
        cont += 1;
        setErro(cont)
    }
}

function Botoes({ letra,
    setErro,
    letraClicada, setLetraClicada,
    palavraEscolhida, setPalavraEscolhida,
    vetorDasLetras,
    disabled }) {
    return (
        <button className={`btnLetra ${letra} ${disabled ? "disabled" : ""}`}
            disabled={disabled}
            onClick={() => botaoClicado(letra, setErro,
                letraClicada, setLetraClicada,
                palavraEscolhida, setPalavraEscolhida,
                vetorDasLetras)}>{letra}</button>
    )


}