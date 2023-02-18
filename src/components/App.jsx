import Jogo from "./Jogo"
import Letras from "./Letras";
import { useState } from "react"

export default function App(){
    const [erro, setErro] = useState (0);
    return (
        <div className="container" >
            
            <Jogo erro={erro}/>
            <Letras/>
        </div>
    )

}