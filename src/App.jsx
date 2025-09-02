import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { useEffect,useState } from 'react'


function App() {
const [ conteudo, setConteudo] = useState(<>Carregando...</>);

async function PegarConteudo() {
  //vai a realizar o fetch para o api do rick and morty - usando o AXIOS
  //GET = buscar info
  //POST = adicionar info
  //PUT = alterar info
  //DELETE = deletar info
  const requestOptions = {
    method:'GET'
  }
  const response = await fetch('https://rickandmortyapi.com/api/character', requestOptions)

  if(!response.ok) {
    return []
  }

  const data = await response.json()
  return data.results
}

async function TransformarEmLista() {
  const todosPersonagens = await PegarConteudo()
  return todosPersonagens.map(personagem =>
    <div className='card char' key={personagem.id}>
      <img src= {personagem.image} alt={`Foto de ${personagem.name}`} />
      <h2>{personagem.name}</h2>
      <div className='char-info'>
        <span><b>Espécie: </b> {personagem.species}</span>
        <span><b>Genêro: </b> {personagem.gender}</span>
      </div>
      <div>
        <div className='lista-secundaria'>
          <b>Participações: </b> {

          }
        </div>
        <h5><b>Status: </b>{personagem.status}</h5> 
      </div>
    </div>
  )
}
//funcao a ser executada
useEffect(() => {
async  function Carregar() {
   setConteudo( await TransformarEmLista())
  }
  Carregar()
}, [])//quando ela vai executar

    return (
      <>
        <Header />
        <main>
          {/*filtros */}
          <div className='lista-principal'>
            { conteudo }
          </div>
        </main>
        <Footer />
      </>
    )
  }
  

export default App
