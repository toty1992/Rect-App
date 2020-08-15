import React from "react"

class Main extends React.Component{

    constructor(){
        super()
        this.state = {
            contador : 0
        }
        this.accionarContador = this.accionarContador.bind(this)
    }


    componentDidMount(){
        console.log("Estoy listo para empezar   ")
    }

    accionarContador(num){
        if (num == 0)
            this.setState({
                contador : 0
            }) 
        else
            this.setState({
                contador : this.state.contador + num
            }) 
    }

    render(){
        return(
            <main>
                <h2>Home</h2>
                <p>El contador va: {this.state.contador}</p>
                { this.state.contador > 5 ? <p>llego al maximo</p> : null}
                <button onClick={() =>this.accionarContador(1)}>+</button>
                <button onClick={()=>{this.accionarContador(0)}}>resetear</button>
                <button onClick={()=>{this.accionarContador(-1)}}>-</button>
            </main>
        )
    }
}
export default Main