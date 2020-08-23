import React from "react"

const Main =( {contador,accionarContador})=>

            <main>
                <h2>Home</h2>
                <p>El contador va: {contador}</p>
                { contador > 5 ? <p>llego al maximo</p> : null}
                <button onClick={() =>accionarContador(1)}>+</button>
                <button onClick={()=>{accionarContador(0)}}>resetear</button>
                <button onClick={()=>{accionarContador(-1)}}>-</button>
            </main>

export default Main