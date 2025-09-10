import { getCharacters } from '../../api/character';
import './style.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



function ApiRickandMorty() {
    const [conteudo, setConteudo] = useState(<>Carregando...</>);


    async function TransformarEmLista() {
        const todosPersonagens = await getCharacters()
        return todosPersonagens.map(personagem =>
            <div className='card char' key={personagem.id}>
                <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
                <h2>{personagem.name}</h2>
                <div className='char-info'>
                    <span><b>Espécie: </b> {personagem.species}</span>
                    <span><b>Genêro: </b> {personagem.gender}</span>
                </div>
                <div>
                    <div className='lista-secundaria'>
                        <b>Participações: </b> {
                            personagem.episode.map((t) =>
                                t.split("/").pop()).join(", ") 
                            //.pop() pega o ultimo pedaco de cara item do arrey
                            //.join() coloca uma virgula para dividir cada item do arrey
                                
                        }
                    </div>
                    <h5><b>Status: </b>{personagem.status}</h5>
                </div>
            </div>
        )
    }
    //funcao a ser executada
    useEffect(() => {
        async function Carregar() {
            setConteudo(await TransformarEmLista())
        }
        Carregar()
    }, [])//quando ela vai executar

    return (
        <>
            <main>
                
                <div className='lista-principal'>
                    {conteudo}
                </div>

            </main>
        </>
    )
}


export default ApiRickandMorty;