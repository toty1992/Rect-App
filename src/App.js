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
            usuario: {
            nombre: "",
            apellido: ""
        },
            usuarios: [],
            edit: false,
            id: -1
        }
        //this.accionarContador = this.accionarContador.bind(this)
    }

    getEditUsuario =(i)=>{
        let editUsuario = this.state.usuarios[i]
        this.setState({
            usuario: editUsuario,
            edit :true,
            id: i
        })
    }

    deleteUsuario =(i,event)=>{
        let start = this.state.usuarios.slice(0,i)
        let end = this.state.usuarios.slice(i+1)
        let newUsuarios = [
            ...start,
            ...end
        ]
        this.setState({
            usuarios: newUsuarios
        })
    }

    handlerSubmit =(event)=>{
    event.preventDefault()
    if(this.state.edit)
    {
        let usuariosList = this.state.usuarios
        usuariosList.map((item,i) =>{
            if (i ===this.state.id ){
                item.nombre =  this.state.usuario.nombre
                item.apellido =  this.state.usuario.apellido
            }
        })
        console.log(usuariosList)
        this.setState({
            usuarios :usuariosList,
            usuario:{
                nombre:"",
                apellido:""
            },
            edit: false,
            id:-1
        })
    }
    else
    {
        this.setState({
            usuarios :[
                ...this.state.usuarios,
                this.state.usuario
                ],
                usuario:{
                    nombre:"",
                    apellido:""
                },
                edit: false,
                id:-1
            })
    }
    }

    onchangeUsuario =(event)=>{
        this.setState({
            usuario :{
               ...this.state.usuario,
               [event.target.dataset.target] : event.target.value}
        })
    }

    onchangeNombre =(event)=>{
        let nombre = event.target.value
        this.setState({
            usuario :{
               ...this.state.usuario,
               nombre:nombre}
        })
    }

    onChangeApellido =(event)=>{
        let apellido = event.target.value
        this.setState({
            usuario :{
               ...this.state.usuario,
               apellido:apellido}
        })
    }

    accionarContador =(num)=>{
        if (num === 0)
            this.setState({
                contador : 0
            }) 
        else
            this.setState({
                contador : this.state.contador + num
            }) 
    }

    render(){
        let {links,contador,usuario,usuarios} = this.state
        return (<>
        <Header links={links}/>
        <Main contador={contador} 
              accionarContador={this.accionarContador} />
        <Usuarios 
                usuario={usuario}
                usuarios={usuarios}
                handlerSubmit={this.handlerSubmit}
                onchangeUsuario={this.onchangeUsuario}
                deleteUsuario={this.deleteUsuario}
                editUsuario={this.getEditUsuario}/>
        <Footer/>
            </>)
    }
}

export default App