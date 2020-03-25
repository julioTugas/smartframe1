import React, { useState } from 'react'
import { Link } from 'gatsby'

const Index = () =>{

    const [valor, setValor]= useState(0)//hooks
    const increment = ()=>{
      setValor(valorAntigo => valorAntigo + 1)
    }
    
    const decrement = ()=>{
      setValor(valorAntigo => valorAntigo - 1)
    }
    return (
        <div >
          <h1>Página Inicial {valor} </h1>
          <button onClick={increment}> + </button>
          <button onClick={decrement}> - </button>
          <Link to= '/d'>Ir para link D</Link>
        </div>
    )
}

export default Index;