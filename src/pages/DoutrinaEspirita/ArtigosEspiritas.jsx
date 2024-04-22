import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import img1 from '../DoutrinaEspirita/img-artigosespiritas/IMG-01.png'
import img2 from '../DoutrinaEspirita/img-artigosespiritas/IMG-02.png'
// import img1 from 'caminho/para/img1'; // Importe as imagens necessárias

export default function ArtigosEspiritas() {
  return (
    <div> {/* Adicionando margens laterais na versão mobile e centralizando na versão desktop */}
      <Navbar />
      <div>
        <h1 className='text-center mt-28 font-bold'>Artigo - A Caridade Segundo Jesus: Benevolência, Indulgência e Perdão das Ofensas</h1>
        {/* Container com imagens e texto */}
        <div className="mx-4 md:mx-auto flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start ml-4">
              <img src={img1} alt="Imagem 1" className="w-48 h-48 mx-2 mb-2" />
            </div>
          </div>
          <div className="md:w-1/2 text-black text-justify md:text-left mt-4 md:mt-0"> {/* Alterando o alinhamento do texto para justificado */}
            <div className="content text-justify">
              <div className="message-text ml-4 mr-4">
                <p className=''>O artigo "A Caridade Segundo Jesus: Benevolência, Indulgência e Perdão das Ofensas" destaca a mensagem atemporal de Jesus Cristo sobre a caridade, que continua a inspirar milhões de pessoas globalmente. A essência da caridade, segundo Jesus, envolve benevolência, indulgência e perdão das ofensas. Benevolência refere-se a um amor desinteressado e compassivo, estendido a todos, independentemente de diferenças. Indulgência implica compreensão das fraquezas humanas e oferecer ajuda para superá-las, promovendo empatia e misericórdia. O perdão, central na mensagem de Jesus, não significa esquecer, mas libertar-se do rancor, seguindo o exemplo de Jesus que perdoou mesmo durante sua crucificação. Esses princípios formam a base da vida cristã, promovendo relações interpessoais fundamentadas no amor e na compaixão, e continuam a ser uma força transformadora para aqueles que buscam seguir os ensinamentos de Jesus.
                <Link to='/caridade' className='text-orange400 font-bold'>Leia Mais</Link>
                
                
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artigo - 2 */}
      <div>
        <h1 className='text-center mt-16 font-bold'>Artigo - A coragem da fé segundo a doutrina espírita</h1>
        {/* Container com imagens e texto */}
        <div className="flex flex-col md:flex-row md:justify-between items-center py-8 container mx-auto border-orange300 border-2 mt-4">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start ml-4">
              <img src={img2} alt="Imagem 1" className="w-48 h-48 mx-2 mb-2" />
            </div>
          </div>
          <div className="md:w-1/2 text-black text-justify md:text-left mt-4 md:mt-0"> {/* Alterando o alinhamento do texto para justificado */}
            <div className="content">
              <div className="message-text text-justify ml-4 mr-4">
                <p>A coragem da fé é uma virtude que nos permite viver a nossa fé de forma autêntica, mesmo diante das adversidades. É a coragem de professarmos nossas crenças, mesmo quando elas são contrariadas pela sociedade. É a coragem de praticarmos o bem, mesmo quando isso nos custa. O espiritismo nos ensina que a coragem da fé é uma virtude que deve ser cultivada por todos os que buscam o progresso espiritual. É uma virtude que nos permite vencer os obstáculos da vida e alcançar a felicidade plena. 
                <Link to='/coragem' className='text-orange400 font-bold'>Leia Mais</Link></p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fim do Artigo - 2 */}

      {/* ================= */}

      {/* Artigo - 3 */}
      
      {/* Fim do Artigo - 3 */}

      <Footer />
    </div>
    
  );
}
