import React, { useState } from 'react'
import { Link } from 'gatsby'

import firebase from '../lib/firebase';


const db= firebase.firestore()
/*
db.collection("testes").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data()}`);
      console.log(`${doc.id} => `, doc.data());
  });
});

*/
//Mudar em tempo Real
db.collection('testes').onSnapshot(function(querySnapshot){
  querySnapshot.forEach (( doc ) =>  {
    console.log(`${doc.id} =>`, doc.data())
  })
}) 


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