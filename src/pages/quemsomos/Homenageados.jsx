import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import homenageado1 from '../quemsomos/img-homenageados/Cunha.jpg';
import homenageado2 from '../quemsomos/img-homenageados/Sr-Joaquin.jpeg';
import homenageado3 from '../quemsomos/img-homenageados/Mariza.jpeg';

import homenageado4 from '../quemsomos/img-homenageados/Deuslira.jpeg';
import homenageado5 from '../quemsomos/img-homenageados/Orion.jpeg';
import homenageado6 from '../quemsomos/img-homenageados/Neuza.jpeg';
import homenageado7 from '../quemsomos/img-homenageados/Marta.jpeg';

import homenageado8 from '../quemsomos/img-homenageados/Zeze.jpeg';




const homenageados = [
  { 
    nome: 'Alder Cunha', 
    descricao: <i>Falecido Trabalhador do Centro Espírita Solar de Jesus</i>,
    imagem: homenageado1
  },
  { 
    nome: 'Joaquim Araujo', 
    descricao:<i>Falecido Trabalhador do Centro Espírita Solar de Jesus</i>,
    imagem: homenageado2
  },


  { 
    nome: 'Marisa Santos Bonfim', 
    descricao: <i>Falecia Trabalhadora do Centro Espírita Solar de Jesus</i>,
    imagem: homenageado3
  },

  { 
    nome: 'Deuslira Rameta Gonçalves Barbosa ', 
    descricao: <i>Falecida Trabalhadora do Centro Espírita Solar de Jesus</i>,
    imagem: homenageado4
  },
  { 
    nome: 'Orion Barbosa ', 
    descricao:<i>Falecido Trabalhador do Centro Espírita Solar de Jesus</i>,
    imagem: homenageado5
  },


  { 
    nome: 'Maria Neuza Rameta Gonçalves', 
    descricao: <i>Falecia Trabalhadora do Centro Espírita Solar de Jesus</i>,
    imagem: homenageado6
  },


  { 
    nome: 'Marta Spyer Rabelo', 
    descricao: <i>Falecia Trabalhadora do Centro Espírita Solar de Jesus</i>,
    imagem: homenageado7
  },
  

  { 
    nome: 'Maria José dos Santos Nunes (ZEZÉ)', 
    descricao: <i>Falecia Trabalhadora do Centro Espírita Solar de Jesus</i>,
    imagem: homenageado8
  },
  // Adicione mais homenageados conforme necessário
];
  // Adicione mais homenageados conforme necessário
export default function Homenageados() {
  return (
    <div>
    <div>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mt-24 text-center mb-4">Homenageados</h1>
      <p className='text-justify'><i>
        "Com profundo respeito e gratidão, prestamos neste espaço uma singela homenagem aos abnegados trabalhadores do Centro Espírita Solar de Jesus que já partiram para a vida espiritual. Suas vidas dedicadas ao estudo e à prática do Espiritismo deixaram um legado de amor, caridade e esclarecimento que permanecerá como inspiração para todos nós.
        Possamos honrar suas memórias seguindo seus nobres exemplos, cultivando a fraternidade, o conhecimento das leis divinas e o auxílio ao próximo. Que a luz do Evangelho de Jesus continue a iluminar seus caminhos na jornada infinita dos espíritos imortais.
        Nossos corações se elevam em prece de gratidão por suas vidas e obras em prol da causa maior da renovação espiritual da humanidade. Que possam prosseguir sua missão de esclarecimento e amparo das esferas espirituais superiores."
      </i></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {homenageados.map((homenageado, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <img src={homenageado.imagem} alt={homenageado.nome} className="w-full mb-4 rounded-lg" />
            <h2 className="text-xl font-bold mb-2">{homenageado.nome}</h2>
            <p>{homenageado.descricao}</p>
          </div>
        ))}
      </div>
    </div>
      <Footer/>
    </div>
    </div>
  )
}
