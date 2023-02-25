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

export default function Letras({ setErro, letraClicada, setLetraClicada, setArrayTracinhos, arrayTracinhos,  palavraSoletrada, disabled,setAcertos ,acertos }) {

    return (
        <>

            <div className="areaAlfabeto">
                <div className="AreaBotoesAlfabeto">
                    {
                        alfabeto.map(a => (

                            <Botoes
                                letra={a.letra}
                                setErro={setErro}
                                setLetraClicada={setLetraClicada}
                                arrayTracinhos={arrayTracinhos} setArrayTracinhos={setArrayTracinhos}
                                palavraSoletrada={palavraSoletrada}
                                disabled={disabled}
                                setAcertos={setAcertos}
                                acertos={acertos}

                            />

                        ))

                    }
                </div>

            </div>


        </>
    )

}

function Botoes({ letra, setErro, setLetraClicada, arrayTracinhos, setArrayTracinhos,palavraSoletrada,disabled, setAcertos ,acertos}) {

    function botaoClicado(l) {
     let contAcertos = 0;
      setLetraClicada(l.toLowerCase());
    
      palavraSoletrada.forEach((elemento, index) =>
    
            console.log('array[ ' + index + ' ] = ' + elemento)
    
        );
        debugger
        if (palavraSoletrada.includes(l.toLowerCase())) {
        
          for (let i = 0 ; i<palavraSoletrada.length; i++){
            if(palavraSoletrada[i] === l.toLowerCase()){
                arrayTracinhos.slice(arrayTracinhos[i] = l.toLowerCase())
                contAcertos ++;
            }
          }
      
     
    
        } else {
            cont += 1;
            setErro(cont)
        }
        setAcertos (contAcertos);     
        setArrayTracinhos(arrayTracinhos)
        console.log(arrayTracinhos)
    }
    
    
    return (
        <button className={`btnLetra ${letra} ${disabled ? "disabled" : ""}`}
            disabled={disabled}
            onClick={() => botaoClicado(letra)}>{letra}</button>
    )


}


