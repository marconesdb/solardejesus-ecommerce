import React from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import poster1 from '../doacoes/img-doacoes/WhatsApp Image 2024-01-13 at 07.23.20.jpeg'
import poster2 from '../doacoes/img-doacoes/Pix-1.png'
import poster3 from '../doacoes/img-doacoes/Instagram Story Dia do trabalhador.png'
import poster4 from '../doacoes/img-doacoes/2.png'
import poster5 from '../doacoes/img-doacoes/Pix-2.png'
import poster6 from '../doacoes/img-doacoes/3.png'
const posters = [
  { src: poster1, alt: 'Poster 1', text: 'O Bazar Solidário da Instituição Espírita de Caridade Solar de Jesus é um evento encantador que une a magia das compras a uma nobre causa. Em um ambiente acolhedor e cheio de amor, este bazar oferece uma variedade de produtos cuidadosamente selecionados, desde roupas e calçados. Ao participar desse bazar, cada pessoa se torna parte de uma corrente de amor que ilumina vidas e transforma comunidades.' },
  { src: poster2, alt: 'Poster 2', text: 'A Instituição Espírita de Caridade Solar de Jesus opera um sistema transparente e eficiente para distribuição de recursos. As doações financeiras destinadas às campanhas de bazar, assistência social, oficina de costura, trabalhadores da última hora e manutenção da instituição são gerenciadas de forma organizada. O dinheiro é alocado de maneira equitativa, cobrindo despesas como prédio e limpeza, energia, água e esgoto e repasse de doações. A instituição prioriza a sustentabilidade e ações beneficentes, assegurando que cada contribuição seja utilizada de maneira responsável para o bem-estar da comunidade atendida.' },
  { src: poster3, alt: 'Poster 3', text: 'O Grupo Trabalhadores da Última Hora é a mão estendida da Instituição Espírita de Caridade Solar de Jesus para aqueles que mais necessitam. Dedicados a oferecer auxílio imediato e acolhimento aos moradores de rua e às pessoas em fila de espera nos hospitais, esses voluntários são verdadeiros anjos que atuam nos momentos mais cruciais.' },
  { src: poster4, alt: 'Poster 4', text: 'A Assistência Social da Instituição Espírita de Caridade Solar de Jesus é um elo de amor e solidariedade, dedicado a transformar vidas por meio de ações concretas e acolhedoras. Com base nos princípios espíritas, nossa equipe comprometida trabalha incansavelmente para oferecer apoio integral a indivíduos em situação de vulnerabilidade, promovendo dignidade, inclusão e bem-estar. Buscamos não apenas suprir necessidades básicas, mas também inspirar esperança e promover o desenvolvimento pessoal, visando a construção de uma sociedade mais justa e fraterna. Juntos, iluminamos caminhos e cultivamos o amor ao próximo, guiados pela luz do entendimento e compaixão.' },
  { src: poster5, alt: 'Poster 5', text: 'A Instituição Espírita de Caridade Solar de Jesus opera um sistema transparente e eficiente para distribuição de recursos. As doações financeiras destinadas às campanhas de bazar, assistência social, oficina de costura, trabalhadores da última hora e manutenção da instituição são gerenciadas de forma organizada. O dinheiro é alocado de maneira equitativa, cobrindo despesas como prédio e limpeza, energia, água e esgoto e repasse de doações. A instituição prioriza a sustentabilidade e ações beneficentes, assegurando que cada contribuição seja utilizada de maneira responsável para o bem-estar da comunidade atendida.' },
  { src: poster6, alt: 'Poster 6', text: 'O Grupo Voluntários da Alegria, vinculado à Instituição Espírita de Caridade Solar de Jesus, é uma equipe dedicada e apaixonada que costura enxovais de bebê para recém-nascidos em situações de necessidade. Com amor e habilidade, esses voluntários transformam tecidos em verdadeiras obras de carinho, proporcionando não apenas itens essenciais, mas também um toque especial de carinho e esperança para as famílias beneficiadas.' }
];

export default function Doacoes() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Nossos Posters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {posters.map((poster, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={poster.src} alt={poster.alt} className="w-full mb-2" />
              <p className="text-center text-justify">{poster.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
