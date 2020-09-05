import React from 'react'
import ListadoUsuarios from './ListadoUsuarios'

const Usuarios = ({usuario,usuarios,handlerSubmit,onchangeUsuario,deleteUsuario,editUsuario}) =>
<>
    <form onSubmit={handlerSubmit}>
        <div>
            <input data-target="nombre" value={usuario.nombre} onChange={onchangeUsuario} type="text" placeholder="Nombre"/>
        </div>
        <div>
            <input data-target="apellido" value={usuario.apellido} onChange={onchangeUsuario} type="text" placeholder="Apellido"/>
        </div>
        <button>Guardar</button>
    </form>
    <ListadoUsuarios usuarios={usuarios}
    deleteUsuario={deleteUsuario}
    editUsuario={editUsuario}/>
</>

export default Usuarios