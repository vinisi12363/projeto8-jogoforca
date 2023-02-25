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
export default function Letras({gameStart, setLetraClicada ,disabled, setDisabled}) {
   
    return (
        <>
        
            <div className="areaAlfabeto">
                <div className="AreaBotoesAlfabeto">
                    {
                        alfabeto.map(a => (

                            <Botoes  letra={a.letra} disabled={disabled} setDisabled={setDisabled} gameStart={gameStart} setLetraClicada={setLetraClicada} />

                        ))

                    }
                </div>

            </div>


        </>
    )

}
function botaoClicado (letra, setLetraClicada){
    setLetraClicada(letra.toLowerCase());
}

function Botoes({letra, disabled ,setDisabled, gameStart, setLetraClicada}) {
    gameStart && setDisabled (false);
    return (
        <button className={`btnLetra ${letra} ${disabled  && "disabled"}`} disabled={disabled} onClick={()=>botaoClicado(letra, setLetraClicada)}>{letra}</button>
    )


}