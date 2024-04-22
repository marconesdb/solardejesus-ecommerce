import React from 'react';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import VoluntariosDaAlegria from '../quemsomos/img-nossostrabalhos/Voluntários da Alegria.jpeg';
import TrabalhadorDaUltimaHora from '../quemsomos/img-nossostrabalhos/2.png'
import SolarDeJesus from'../quemsomos/img-nossostrabalhos/Logomarca Redonda - SolarDeJesus.jpg'
import evangelizacaoInfantil from "../quemsomos/img-nossostrabalhos/Turma - Evangelização Infantil.jpg"
import evangelizacao from "../quemsomos/img-nossostrabalhos/Logomarca - Evangelização Infantil.jpeg"
import assistenciasocial from "../quemsomos/img-nossostrabalhos/1.png"
import PasseEspirita from "../quemsomos/img-nossostrabalhos/Passe Espírita.jpg"

export default function NossosTrabalhos() {
  return (
    <div>
      <Navbar />
      {/* Voluntários da Alegria */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center mb-8">
          <img
            src={VoluntariosDaAlegria}
            alt="Imagem"
            className="w-96 "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4  flex justify-center items-center">Voluntários da Alegria</h1>
            <h2 className="text-xl md:text-2xl mb-4">"Costurando roupinhas, tecendo alegrias: Voluntários da Alegria, Transformando Linhas em Momentos Especiais."</h2>
            <p className="text-sm md:text-base">
             Na cidade de Montes Claros, MG, onde a luz brilhava intensamente com as cores da alegria, um grupo especial se reunia regularmente, conhecido como os "Voluntários da Alegria". Eles compartilhavam uma paixão comum: a costura. Cada agulha e linha eram como extensões de seus corações generosos e eram manuseadas por mãos dedicadas. Um dia, perceberam que mães em desespero sussurravam em seus ouvidos porque seus filhinhos carentes estavam necessitando de roupas novas, e muitos iriam nascer sem roupa alguma. As crianças, com suas histórias únicas e sorrisos radiantes, eram a inspiração perfeita para os Voluntários da Alegria. O grupo reuniu-se em sua oficina, no Centro Espírita Solar de Jesus, onde tecidos coloridos e linhas vibrantes enchiam o ambiente de positividade. Cada voluntário escolheu um pedaço de tecido com cuidado, imaginando como poderiam transformá-lo em algo especial. Alguns escolheram padrões brilhantes, enquanto outros optaram por tons suaves, criando uma coleção diversificada, assim como as próprias crianças. Enquanto costuravam, compartilhavam histórias e risadas, criando um ambiente repleto de calor humano. As agulhas moviam-se com habilidade, transformando simples pedaços de pano em peças únicas e cheias de carinho. Quando as roupas estavam prontas, os Voluntários da Alegria partiram e foram ao encontro daquelas futuras mães e mães que teriam seus filhinhos em condições difíceis em razão da vulnerabilidade econômica e social. As mães foram recebidas com abraços calorosos e alegraram-se com as novas roupas feitas sob medida, seus rostos se iluminaram. Era mais do que vestuário; era uma manifestação tangível do cuidado e da atenção que cada voluntário colocara em cada ponto. Os Voluntários da Alegria não apenas costuraram roupas naquela tarde, mas também teceram laços indestrutíveis de amizade e compaixão. O trabalho deles não era apenas sobre criar vestimentas, mas sobre envolver os recém-nascidos em um abraço coletivo de amor e esperança. Desde então, os Voluntários da Alegria continuaram a costurar não apenas roupas, mas também histórias de solidariedade e alegria, mostrando que, com um pouco de criatividade e muita dedicação, é possível transformar tecido em tesouros que aquecem corações.
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/S_R6P_oWQJk?si=0MGFNJZtetsqkbpL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p>
            Aprenda a costurar roupas para crianças necessitadas - Voluntários da Alegria | Centro Espírita Solar de Jesus
            </p>
          </div>
        </div>
      </section>
      {/* Fim - Voluntários da Alegria */}

      {/* ====== */}



      {/* Trabalhadores da Última Hora */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center -mb-24 -mt-32">
          <img
            src={TrabalhadorDaUltimaHora}
            alt="Imagem"
            className="w-96 "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center">Trabalhadores da Última Hora</h1>
            <h2 className="text-xl md:text-2xl mb-4">"Na Jornada Final, Trabalhadores da Luz: Semeando Amor e Esperança, Seguindo os Passos de Jesus."</h2>
            <p className="text-sm md:text-base">
             Na cidade de Montes Claros, MG, onde a luz brilhava intensamente com as cores da alegria, um grupo especial se reunia regularmente, conhecido como os "Voluntários da Alegria". Eles compartilhavam uma paixão comum: a costura. Cada agulha e linha eram como extensões de seus corações generosos e eram manuseadas por mãos dedicadas. Um dia, perceberam que mães em desespero sussurravam em seus ouvidos porque seus filhinhos carentes estavam necessitando de roupas novas, e muitos iriam nascer sem roupa alguma. As crianças, com suas histórias únicas e sorrisos radiantes, eram a inspiração perfeita para os Voluntários da Alegria. O grupo reuniu-se em sua oficina, no Centro Espírita Solar de Jesus, onde tecidos coloridos e linhas vibrantes enchiam o ambiente de positividade. Cada voluntário escolheu um pedaço de tecido com cuidado, imaginando como poderiam transformá-lo em algo especial. Alguns escolheram padrões brilhantes, enquanto outros optaram por tons suaves, criando uma coleção diversificada, assim como as próprias crianças. Enquanto costuravam, compartilhavam histórias e risadas, criando um ambiente repleto de calor humano. As agulhas moviam-se com habilidade, transformando simples pedaços de pano em peças únicas e cheias de carinho. Quando as roupas estavam prontas, os Voluntários da Alegria partiram e foram ao encontro daquelas futuras mães e mães que teriam seus filhinhos em condições difíceis em razão da vulnerabilidade econômica e social. As mães foram recebidas com abraços calorosos e alegraram-se com as novas roupas feitas sob medida, seus rostos se iluminaram. Era mais do que vestuário; era uma manifestação tangível do cuidado e da atenção que cada voluntário colocara em cada ponto. Os Voluntários da Alegria não apenas costuraram roupas naquela tarde, mas também teceram laços indestrutíveis de amizade e compaixão. O trabalho deles não era apenas sobre criar vestimentas, mas sobre envolver os recém-nascidos em um abraço coletivo de amor e esperança. Desde então, os Voluntários da Alegria continuaram a costurar não apenas roupas, mas também histórias de solidariedade e alegria, mostrando que, com um pouco de criatividade e muita dedicação, é possível transformar tecido em tesouros que aquecem corações.
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/rSwDNNeB9CQ?si=DE3P-TlEpX9cWzoN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p>
            Venha colaborar no trabalho do BEM - Grupo Trabalhadores da Última Hora - Centro Espírita Solar de Jesus
            </p>
          </div>
        </div>
      </section>
      {/* Fim - Trabalhadores da Última Hora */}

      {/* =========== */}
      {/* Bazar Centro Espírita Solar de Jesus */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center mb-8 -mt-28">
          <img
            src={SolarDeJesus}
            alt="Imagem"
            className="w-36 "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center">Bazar Centro Espírita Solar de Jesus</h1>
            <h2 className="text-xl md:text-2xl mb-4">"Brilhe com Solidariedade: Bazar Centro Espírita Solar de Jesus, Onde Cada Compra Ilumina Vidas!"</h2>
            <p className="text-sm md:text-base">
            Havia uma pequena comunidade, abraçada pela fé e pela vontade de fazer o bem. No coração dessa comunidade, erguia-se o Centro Espírita Solar de Jesus, um farol de amor e solidariedade. Um dia, um grupo de voluntários teve uma ideia brilhante para unir esforços e contribuir ainda mais para o bem-estar daqueles que necessitavam. Nascia assim o "Bazar Centro Espírita Solar de Jesus". Este lugar especial tornou-se um ponto de encontro para doações generosas de roupas, utensílios domésticos e outros recursos materiais. A comunidade se mobilizou, cada pessoa trazendo um pedacinho de amor consigo. O Bazar, com suas prateleiras coloridas e vitrines cheias de histórias, transformou-se em um espaço de partilha. As roupas, antes guardadas nos armários, encontravam novos donos, proporcionando não apenas calor físico, mas também calor humano. Os recursos arrecadados ganhavam vida própria, transformando-se em auxílio material para os que mais necessitavam. Cada doação, cada peça de roupa, contava uma história de generosidade. E assim, o Bazar Centro Espírita Solar de Jesus não era apenas um local de transações comerciais, mas um ponto de encontro para corações solidários. As doações não eram simples objetos; eram abraços invisíveis, transmitindo amor e esperança. Ao final de cada jornada no Bazar, os voluntários sorriam sabendo que estavam fazendo a diferença na vida de muitos. O dinheiro arrecadado encontrava seu caminho para auxílio a projetos sociais, apoio a famílias em dificuldade e suporte a causas nobres. O Bazar Centro Espírita Solar de Jesus tornou-se um símbolo da capacidade humana de se unir em prol do próximo. Ele não apenas vestia corpos, mas também aquecia almas. Em cada peça doada e em cada compra realizada, ecoava o lema do centro: "Iluminando Vidas, Espalhando Amor."
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/SN3Do9I_zRw?si=ZlHe5BcMGnfpbg-7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p>
            Bazar da Instituição Espírita de Caridade Solar de Jesus - Montes Claros-MG
            </p>
          </div>
        </div>
      </section>
      {/* Fim - Bazar Centro Espírita Solar de Jesus */}

      {/* Evangelização Infantil */}

      <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center mb-8 -mt-16">
          <img
            src={evangelizacao}
            alt="Imagem"
            className="w-36 "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center">Evangelização Infantil</h1>
            <h2 className="text-xl md:text-2xl mb-4">"Plantando Sementes Divinas: Oficina de Amor, Valores e Espiritualidade para Pequenos Corações!"</h2>
            <p className="text-sm md:text-base">
            A evangelização espírita infantil é um trabalho espiritual que possui uma estrutura de estudo e entendimento das boas práticas, acolhimento e apoio tanto para as crianças como para suas famílias. Esse trabalho ajuda as crianças em sua formação moral através dos ensinamentos de Jesus . A Evangelização Infantil auxilia o ser a preparar-se para a vida adulta, para enfrentar os desafios terrenos, cultivando em si a prática de fazer o bem e o desenvolvimento da moral cristã . A evangelização espírita infantil é essencial para educar e atribuir valores morais, além de ensinar sobre o espiritismo para crianças. Além de aproximar o indivíduo com Deus, também o conecta consigo mesmo. A evangelização espirita proporciona um ambiente acolhedor e seguro para que as crianças e jovens possam se expressar livremente, compartilhar suas experiências e receber orientação adequada para lidar com as dificuldades da vida. É uma oportunidade de aprendizado e crescimento pessoal, que contribui para a formação de indivíduos mais conscientes e responsáveis.
            </p>
            <img src={evangelizacaoInfantil} alt="" />
            <p>
            Alunos e Educadora da Evangelização Infantil Centro Espírita Solar de Jesus - Montes Claros-MG
            </p>
          </div>
        </div>
      </section>
       {/* Fim - Evangelização Infantil */}

       {/* ============= */}

         

      {/* Assistência Social */}

      
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center -mb-32 -mt-32">
          <img
            src={assistenciasocial}
            alt="Imagem"
            className="w-96 "
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center">Assistência Social</h1>
            <h2 className="text-xl md:text-2xl mb-4">A Distribuição de Cestas Básicas Natal 2023 - Centro Espírita Solar de Jesus - Montes Claros - MG</h2>
            <p className="text-sm md:text-base">
            *Oração para quem tem fome no Natal* Pai Celestial, No Natal, celebramos o nascimento de Jesus, o Pão da Vida. Mas sabemos que, em muitos lugares do mundo, ainda há pessoas que passam fome. Pedimos-te que olheis para aqueles que sofrem nesta noite santa. Que lhes envieis o Vosso amor e o Vosso sustento. Que lhes abris as Vossas portas e lhes mostrais a Vossa misericórdia. Que lhes dais o pão que alimenta o corpo e a alma. Que lhes dais a paz e a esperança. Pedimos-te também que nos ajudeis a sermos mais solidários com os que passam fome. Que nos inspireis a partilhar o que temos com os que precisam. Que nos mostreis como podemos fazer a diferença no mundo. Em nome de Jesus, o Pão da Vida, Amém!
            </p>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/M5mRcV2fT_8" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></iframe>
            <p>
            Distribuição de Cestas Básicas Natal 2023 - Centro Espírita Solar de Jesus
            </p>
          </div>
        </div>
      </section>

      {/* Fim - Assistência Social */}


        {/* ======= */}


     {/* O passe Espírita */}
      
     <section className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 md:p-8 mt-24">
        <div className="w-full md:w-1/2 md:pr-4 flex justify-center items-center">
          {/* <img
            src={assistenciasocial}
            alt="Imagem"
            className="w-96 "
          /> */}
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <div className="text-justify">
            <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center">O Passe Espírita</h1>
            <h2 className="text-xl md:text-2xl mb-4">"Renove suas energias, encontre equilíbrio: o Passe Espírita, um toque de bem-estar para o corpo e a alma."</h2>
            <p className="text-sm md:text-base">
              O passe espírita e a água fluidificada é uma prática comum dentro do espiritismo, uma doutrina que tem suas raízes no século XIX. Essa técnica envolve a transmissão de energias fluídicas benéficas por meio das mãos, com o objetivo de promover o equilíbrio energético, físico e espiritual de uma pessoa. Por meio do passe canaliza-se energias positivas, que podem auxiliar na harmonização dos centros de energia do corpo (chakras) e proporcionar bem-estar. O passe espírita é frequentemente realizado em centros espíritas durante reuniões públicas, sendo considerado um recurso terapêutico complementar dentro do contexto da espiritualidade espírita.

              <strong>**Oração pelos Enfermos** </strong>Deus Pai, Todo-Poderoso, Vós que sois a fonte da vida e da cura, olhai com misericórdia para os vossos filhos e filhas que sofrem de enfermidades do corpo e da alma. Tocai-lhes com a vossa mão poderosa, e curai-lhes de todas as suas dores e sofrimentos. Dá-lhes a força para enfrentarem a sua doença, e a esperança de um dia serem curados. Envolve-os no vosso amor misericordioso, e dai-lhes a paz que só Vós podeis dar. Pedimos por todos os enfermos do mundo, especialmente por aqueles que estão mais necessitados: pelos que sofrem de doenças graves, pelos que estão em fase terminal, pelos que vivem com dor crônica, pelos que são discriminados por causa da sua doença, e pelos que não têm acesso aos cuidados de saúde de que precisam. Ouvi a nossa súplica, e dai-lhes a cura que tanto anseiam. Em nome de Jesus Cristo, Nosso Senhor. Amém!
            </p>
            <img src={PasseEspirita} alt="Passe Espírita" />
            <p>
            Ilustração do passe Espírita
            </p>
          </div>
        </div>
      </section>

      {/* Fim - Passe Espírita */}

      <Footer />
    </div>
  );
}
