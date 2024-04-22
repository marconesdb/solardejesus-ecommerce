import React from 'react';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import Imagem from '../quemsomos/img-nossahistoria/Francisco Soares da Silva.png';
import { Helmet } from 'react-helmet';
const NossaHistoria = () => {
  return (
    <div>
      <Helmet>
        <link rel="icon" href="/Favicons/favicon-16x16.png" />
      </Helmet>
      <Navbar />
      <main>
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mt-12">
        
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="text-justify mt-4 lg:mt-0 lg:relative">
        
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Nosso Fundador</h2>
                  <img
                    className="w-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 lg:w-auto lg:h-auto mt-4 mb-4"
                    src={Imagem}
                    alt="Francisco Soares da Silva"
                  />
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Francisco Soares da Silva</h2>
                </div>
              </div>
              <div className="text-justify">
                <h1 className='text-2xl font-semibold text-gray-900 mb-2'>Nossa História</h1>
                <p className="mt-3 text-lg text-gray-500">
                No ano de 1930, Francisco Soares da Silva, conhecido como Chico Sapateiro, muda-se para Belo Horizonte, onde conhece o médium Antônio Loreto Flores, presidente do Centro Espírita Amor e Caridade. Lá desenvolve suas faculdades mediúnicas. Em uma das sessões mediúnicas, o Espírito Bezerra de Menezes, através do médium Flores, redigiu uma carta ao Chico Sapateiro. Nela revelava que o mesmo tinha uma missão nas terras do Norte de Minas: fundar um a casa espírita sob a proteção espiritual de Teresa de Jesus.
                Francisco não mediu esforços. Logo que se aposentou do DER, transferiu-se de Belo Horizonte para Montes Claros, determinado a fundar uma casa espírita na terra natal. No ano de 1979, no centro espírita Joana D`ark, situado então na Vila Guilhermina, conheci o Sr. Francisco (Chico Sapateiro). Na Verdade, foi um reencontro, pois a afinidade que se estabeleceu não podia ser traduzida em palavras. Ali desenvolvemos reuniões de estudos doutrinários e implantamos grupos de trabalhos.
                As reuniões mediúnicas aconteciam nas sextas-feiras. Numa dessas ocasiões, o espírito Eurípides Barsanulfo, através da mediunidade de Chico Sapateiro, advertiu o grupo a responsabilidade, pois, desde os tempos de adoração no templo de Apolo que alguns ali presente haviam se convertido ao cristianismo, e que, na atualidade, estávamos compromissados com a vivência e divulgação do Espiritismo, de contribuir para resgatar o cristianismo puro deixado por Jesus, promovendo a quebra de paradigmas vigentes à época, buscando a convivência ascendente, mostrando que ambas são necessárias e complementares para o homem. Destacou Eurípides Barsanulfo que toda atividade desenvolvida obedecesse ao lema da bandeira do Espírito Ismael: Deus, Cristo e Caridade.
                O templo Solar de Apolo nos faz regredir ao ano 195 d.c junto à pequena cidade grega de sicione, na região do Peloponeso, as margens do Golfo de Corinto, e Província Do Império Romano, da qual a Grécia fazia parte. Embora o cristianismo fosse tolerado nas províncias, a religião predominante era o culto aos deuses mitológicos. Apolo era consagrado ás artes e a medicina nos santuários de Delfos e Elêusis. Houve relatos de que no Solar de Apolo aconteciam fenômenos mediúnicos. Com a presença do Apostolo Paulo de Tarso na região, ocorreu grande número de conversões para o Cristianismo, e o Solar de Apolo se modificou para o Solar de Jesus. (Livro “ Solar de Apolo ”, de Zilda Gama).
                No dia 22 de outubro de 1982, fundamos o Centro Espírita Solar de Jesus, com as atividades na sede do Centro Espírita Joana Dark, onde fomos recebidos com muito carinho e respeito. Com o apoio do Presidente da Aliança Municipal Espírita de Montes Claros, Sr. Petrônio, realizamos o registro oficial da Instituição Espírita de Caridade Solar de Jesus, que passou a constar em cartório como entidade sem fins lucrativos, tendo Francisco Soares da Silva (Chico Sapateiro) como seu primeiro presidente.
                Foi uma tarefa executada com muita alegria e acompanhada de pessoas interessadas em desenvolver um grupo de estudos para que, posteriormente, a casa prestasse atendimento ao público. Nosso grupo contou inicialmente com Acácio Fonseca, Pedro Paulo, Maria José Fernandes, Eunice Aguiar, Willian Martins Santos, Durval Soares, Maria Adeide, Renilson Durães, Eugênio Assis e Athos Frões.
                Em 1998, surgiu a oportunidade de mudança, com a chegada da família Spyer Rabelo e, em seguida, do casal Marice e Paulo Dennucy. Foi a partir desse ano que conseguimos então fundar nossa Creche na Avenida Coração de Jesus, Bairro Major Prates, realizando convênio com a Secretaria de Educação para funcionamento da pré-escola e maternal. Mais uma experiência valiosa para nossa vida. Promovemos a partir daí campanhas de arrecadação de roupas e alimentos para irmãos em dificuldades; sopão comunitário para famílias mais necessitadas; palestras educativas e aulas de moral cristã.
                Todos sabíamos das responsabilidades em conduzir um trabalho 100% filantrópico. Como em todas as casas espíritas, também a nossa sofria, e sofre, com a rotatividade de colaboradores, fato compreendido por todos nós espíritas. Foram muitos os colaboradores que passaram e contribuíram de alguma forma para o crescimento do grupo.
                Rememorando esses acontecimentos, quando em nossa casa transcorre o 30º aniversário de fundação. Recordando especialmente o seu fundador, por quem sempre tive uma profunda admiração, deixo consignado aqui, a minha homenagem a um dos grandes pioneiros do Espiritismo no Norte de Minas. Que jesus aumente as possibilidades do querido companheiro que continua a lutar pela causa comum do Plano Invisível.
                <br />
                <br />
                Alfredo Lourenço
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NossaHistoria;
