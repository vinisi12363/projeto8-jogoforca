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
export default function Letras() {
    const [disabled, setDisabled] = React.useState(true);
    
    return (
        <>
            <div className="AreaDeInteracao">
                <button className="btnEscolherPalavra">Escolher Palavra</button>
            </div>
            <div className="areaAlfabeto">
                <div className="AreaBotoesAlfabeto">
                    {
                        alfabeto.map(a => (

                            <Botoes letra={a.letra} disabled={disabled} setDisabled={setDisabled} />

                        ))

                    }
                </div>

            </div>


        </>
    )

}
function botaoClicado (letra){
    alert(`a letra ${letra} foi clicada!!!`)
}

function Botoes({letra, disabled ,setDisabled}) {
   
    return (
        <button className={`btnLetra ${letra} ${!disabled  && "disabled"}`} disabled={!disabled} onClick={()=>botaoClicado(letra)}>{letra}</button>
    )


}