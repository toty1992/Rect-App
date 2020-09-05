import React from 'react'

const ListadoUsuarios = ({usuarios,deleteUsuario,editUsuario})=>
<ul>
    {usuarios.map((us,i)=> 
        <li key={i}>
            {us.nombre} {us.apellido}
            <button onClick={editUsuario.bind(null,i)}>Editar</button>
            <button onClick={deleteUsuario.bind(null,i)}>Borrar</button>
        </li>
    )}  
</ul>

export default ListadoUsuarios
