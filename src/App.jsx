import { useState } from "react"
import Cardcarro from "./Cardcarro"

function App() {
  const  [nomeCarro, setNomeCarro] = useState("")
  const  [modeloCarro, setModeloCarro] = useState("")
  const [carros, setCarros] = useState([])
  
  
  
  function saveCarro() { 
    if (nomeCarro == "" || modeloCarro == ""){
      alert ("Prencha os campos para salvar carro.");}
      else {
        setCarros([ ...carros, {
          nome: nomeCarro,
          modelo: modeloCarro,
  }])
}

  }

  return(
  <div>
    <h1>Cadastro de Carros</h1>
    <form >
      <input value={nomeCarro} 
      onChange={(event)=>setNomeCarro(event.target.value)} 
      placeholder="Digite o nome do carro"/>

      <input value={modeloCarro} 
      onChange={(event)=>setModeloCarro(event.target.value)}
      placeholder="Digite o modelo do carro"/>

      <button type="button" onClick={saveCarro}>Salvar</button>



    </form>
      {
        carros.map((carro)=> {
          return(
            <Cardcarro carro={carro}/>
            )
        })
        }     
  </div>
  )
}

export default App
