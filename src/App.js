import React from "react"
import Header from "./header"
import Footer from "./footer"
import Main from "./main"
import Usuarios from "./usuarios"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            contador : 0,
            links : ["usuarios","productos","contacto"],
            nombre: "",
            apellido: "",
            usuarios: []
        }
        //this.accionarContador = this.accionarContador.bind(this)
    }

    handlerSubmit =()=>{}

    onchangeNombre =()=>{}

    onChangeApellido =()=>{}

    accionarContador =(num)=>{
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
        let {links,contador,nombre,apellido,usuarios} = this.state
        return (<>
        <Header links={links}/>
        <Main contador={contador} 
              accionarContador={this.accionarContador} />
        <Usuarios 
                nombre={nombre}
                apellido={apellido}
                usuarios={usuarios}
                handlerSubmit={this.handlerSubmit}
                onchangeNombre={this.onchangeNombre}
                onChangeApellido={this.onChangeApellido}/>
        <Footer/>
            </>)
    }
}

export default App