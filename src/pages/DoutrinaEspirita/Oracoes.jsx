import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import img1 from '../DoutrinaEspirita/img-oracoes/IMG-1.png';
import img2 from '../DoutrinaEspirita/img-oracoes/IMG-2.png'
import img3 from '../DoutrinaEspirita/img-oracoes/IMG-3.png'
import img4 from '../DoutrinaEspirita/img-oracoes/IMG-4.png'
import img5 from '../DoutrinaEspirita/img-oracoes/IMG-5.png'
import img6 from '../DoutrinaEspirita/img-oracoes/IMG-6.png'
import img7 from '../DoutrinaEspirita/img-oracoes/IMG-7.png'
import img8 from '../DoutrinaEspirita/img-oracoes/IMG-8.png'
import img9 from '../DoutrinaEspirita/img-oracoes/IMG-9.png'
import img10 from '../DoutrinaEspirita/img-oracoes/IMG-10.png'
// import img11 from '../DoutrinaEspirita/img-oracoes/IMG-11.png';
import img12 from '../DoutrinaEspirita/img-oracoes/IMG-12.png'
import img13 from '../DoutrinaEspirita/img-oracoes/IMG-13.png'
import img14 from '../DoutrinaEspirita/img-oracoes/IMG-14.png'
import img15 from '../DoutrinaEspirita/img-oracoes/IMG-15.png'
import img16 from '../DoutrinaEspirita/img-oracoes/IMG-16.png'
import img17 from '../DoutrinaEspirita/img-oracoes/IMG-17.png'
import img18 from '../DoutrinaEspirita/img-oracoes/IMG-18.png'
import img19 from '../DoutrinaEspirita/img-oracoes/IMG-19.png'
import img20 from '../DoutrinaEspirita/img-oracoes/IMG-20.png'
import img21 from '../DoutrinaEspirita/img-oracoes/IMG-21.png'
import img22 from '../DoutrinaEspirita/img-oracoes/IMG-22.png'
import img23 from '../DoutrinaEspirita/img-oracoes/IMG-23.png'
import img24 from '../DoutrinaEspirita/img-oracoes/IMG-24.png'



import audioPortugues1 from './Audio-Orações/Oracao1.mp3';
import audioEnglish1 from './Audio-Orações/O God, our Father.mp3';
import audioEspanol1 from './Audio-Orações/Oh Dios, Padre nuestro.mp3';

import audioPortugues2 from './Audio-Orações/Ó Grande criador do Universo (2).mp3';
import audioEnglish2 from './Audio-Orações/O Great Creator of the Universe.mp3';
import audioEspanol2 from './Audio-Orações/Oh Gran Creador del Universo.mp3';

import audioPortugues4 from './Audio-Orações/Oração da Esperança.mp3';
import audioEspanol4 from './Audio-Orações/Oración de Esperanza.mp3';
import audioEnglish4 from './Audio-Orações/Prayer of Hope.mp3';
import audioPortugues10 from './Audio-Orações/Perdão 2.mp3'
import audioEspanol10 from './Audio-Orações/Perdón.mp3';
import audioEnglish10 from './Audio-Orações/Forgiveness.mp3';

import audioPortugues11 from './Audio-Orações/Oração para quem tem fome no Natal.mp3'
import audioEspanol11 from './Audio-Orações/Oración por los que tienen hambre en Navidad-Espanhol.mp3';
import audioEnglish11 from './Audio-Orações/Prayer for those who are hungry at Christmas-Inglês.mp3';

import audioPortugues12 from './Audio-Orações/Oração para os Criminosos.mp3'
import audioEspanol12 from './Audio-Orações/Oración por los criminales.mp3';
import audioEnglish12 from './Audio-Orações/Prayer for criminals.mp3';

import audioPortugues13 from './Audio-Orações/oração3.mp3'
import audioEspanol13 from './Audio-Orações/Oración.mp3';
import audioEnglish13 from './Audio-Orações/Prayer.mp3';



import audioEspanol14 from './Audio-Orações/Acto de fe.mp3';
import audioEnglish14 from './Audio-Orações/Act of faith.mp3';
import audioPortugues14 from './Audio-Orações/Oração4.mp3'
import audioPortugues15 from './Audio-Orações/Oração5.mp3'
import audioEspanol15 from './Audio-Orações/Oración para pedir perdón.mp3';
import audioEnglish15 from './Audio-Orações/Prayer to ask for forgiveness.mp3';
import audioPortugues16 from "./Audio-Orações/Oração6.mp3"
import audioEspanol16 from './Audio-Orações/Chico Xavier- Espanhol.mp3';
import audioEnglish16 from './Audio-Orações/Chico Xavier - Inglês.mp3';
import audioPortugues17 from "./Audio-Orações/Oração7.mp3"
import audioEspanol17 from './Audio-Orações/Oración por los Niños del Mundo-Espanhol.mp3';
import audioEnglish17 from './Audio-Orações/Prayer for the Children of the World - Inglês.mp3';
import audioPortugues18 from './Audio-Orações/Oração da Esperança.mp3'
import audioEspanol18 from './Audio-Orações/Oración de Esperanza.mp3';
import audioEnglish18 from './Audio-Orações/Prayer of Hope.mp3';
import audioPortugues19 from './Audio-Orações/Oração para o cultivo do Amor.mp3'
import audioEspanol19 from './Audio-Orações/Oración por el cultivo del amor.mp3';
import audioEnglish19 from './Audio-Orações/Prayer for the Cultivation of Love.mp3';
import audioPortugues20 from './Audio-Orações/Oração para o homem orgulhoso superar seus preconceitos.mp3'
import audioEspanol20 from './Audio-Orações/Oración para que el hombre orgulloso supere sus prejuicios.mp3';
import audioEnglish20 from './Audio-Orações/Prayer for the proud man to overcome his prejudices.mp3';
import audioEspanol21 from './Audio-Orações/Oración por un rayo de luz en el mundo-Espanhol.mp3';
import audioEnglish21 from './Audio-Orações/Prayer for a ray of light in the world-Inglês.mp3';
import audioEspanol22 from './Audio-Orações/Madres desesperadas.mp3';
import audioEnglish22 from './Audio-Orações/Mothers in Despair.mp3';
import audioEspanol23 from './Audio-Orações/Oración por lá ansiedad.mp3';
import audioEnglish23 from './Audio-Orações/Prayer for Anxiety.mp3';
import audioEspanol24 from './Audio-Orações/Oración de Unidad.mp3';
import audioEnglish24 from './Audio-Orações/Prayer of Unity.mp3';


export default function Oracoes() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ajuste esse valor conforme necessário para controlar quando a âncora aparecerá
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      
        <h1 className='mt-32 flex justify-center items-center text-xl md:text-2xl font-bold mb-4'>Orações</h1>
        {/* Oração 1 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center">
          <img
            src={img1}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
              Ó Deus, nosso Pai,
              Nós Te agradecemos por refrescar nossas almas após o calor da prova, expiação e sofrimento.
              Tu és o Deus da compaixão e do amor. Tu nos conheces e nos entendes. Tu sabes o que passamos e o que sentimos.
              No calor da prova, Tu nos deste forças para perseverar. No calor da expiação, Tu nos deste paz e consolo. No calor do sofrimento, Tu nos deste esperança e renovação.
              Graças a Ti, podemos descansar em Tuas promessas de amor e fidelidade. Podemos confiar em Tua justiça e misericórdia. Podemos saber que Tu estás conosco em todos os momentos, nos bons e nos maus.
              Ó Deus, refresca nossas almas com Tua presença. Dai-nos a Tua paz, a Tua alegria e a Tua esperança. Ajuda-nos a viver em Tua presença, todos os dias de nossas vidas.
              <br />
              <b>Prayer in English:</b>
              O God, our Father, We thank You for refreshing our souls after the heat of trial, atonement and suffering. You are the God of compassion and love. You know us and understand us. You know what we go through and what we feel. In the heat of the test, You gave us strength to persevere. In the heat of atonement, You gave us peace and comfort. In the heat of suffering, You gave us hope and renewal. Thanks to You, we can rest in Your promises of love and faithfulness. We can trust in Your justice and mercy. We can know that You are with us at all times, in the good and the bad. O God, refresh our souls with Your presence. Give us Your peace, Your joy and Your hope. Help us to live in Your presence, every day of our lives.
              <br />
              <b>Oración en español:</b>
              Oh Dios, Padre nuestro, Te damos gracias por refrescar nuestras almas después del calor de la prueba, la expiación y el sufrimiento. Eres el Dios de la compasión y el amor. Tú nos conoces y nos entiendes. Sabes lo que pasamos y lo que sentimos. En el fragor de la prueba, Tú nos diste fuerza para perseverar. En el calor de la expiación, nos diste paz y consuelo. En el calor del sufrimiento, nos diste esperanza y renovación. Gracias a Ti podemos descansar en Tus promesas de amor y fidelidad. Podemos confiar en Tu justicia y misericordia. Podemos saber que Tú estás con nosotros en todo momento, en las buenas y en las malas. Oh Dios, refresca nuestras almas con tu presencia. Danos tu paz, tu alegría y tu esperanza. Ayúdanos a vivir en Tu presencia, todos los días de nuestras vidas.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues1} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish1} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol1} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/* Fim - Oração 1 */}
        {/* ========= */}
        {/* Oração 2 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img2}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
            Ó Grande Criador do Universo,
            hoje, em humildade, voltamos nossos corações para Ti, reconhecendo Tua grandiosidade e amor infinito. Pedimos que guies cada passo de nossas vidas, entendendo as necessidades únicas de cada filho Teu neste vasto mundo.
            Para aqueles que enfrentam desafios financeiros, pedimos Tua provisão generosa, para que a abundância possa fluir em suas vidas e as preocupações financeiras se dissipem como a névoa ao amanhecer.
            Aos que enfrentam dificuldades na saúde, imploramos Tua cura compassiva, para que sintam Teu toque restaurador e encontrem conforto nos momentos de dor.
            Para os que estão perdidos na escuridão da solidão, pedimos Tua presença calorosa, para que sintam Teu amor envolvendo-os e trazendo-lhes consolo.
            Aos que buscam sabedoria, conceda-lhes discernimento em suas escolhas, iluminando o caminho à frente e guiando-os nas decisões que moldarão seus destinos.
            Para aqueles que lutam por paz interior, ofereça-lhes tranquilidade em meio à agitação do mundo, permitindo que encontrem serenidade em Tua graça.
            Aos que enfrentam desafios familiares, derrama Tua bênção sobre seus lares, promovendo a compreensão, o perdão e o amor incondicional entre os entes queridos.
            Senhor, conheces os anseios secretos de cada coração, e confiamos que, através de Tua misericórdia, atenderás a cada necessidade única.
            Que Tua luz divina brilhe sobre todos os cantos da Terra, unindo-nos em compaixão e solidariedade. Fortaleça-nos para enfrentar os desafios diários e inspire-nos a sermos instrumentos de Tua paz e amor neste mundo.
            Em Teu nome, oramos, confiantes de que Tu és a fonte de todo bem e que, em Tua infinita sabedoria, atenderás às preces daqueles que buscam Teu auxílio.
              <br />
              <b>Prayer in English:</b>
              O Great Creator of the Universe, Today, in humility, we turn our hearts to You, recognizing Your greatness and infinite love. We ask that You guide each step of our lives, understanding the unique needs of each of Your children in this vast world. For those facing financial challenges, we ask for Your generous provision so that abundance can flow into their lives and financial worries dissipate like mist at dawn. To those who face health difficulties, we implore Your compassionate healing, so that they may feel Your restorative touch and find comfort in times of pain. For those who are lost in the darkness of loneliness, we ask for Your warm presence, so that they may feel Your love enveloping them and bringing them comfort. To those who seek wisdom, grant them discernment in their choices, illuminating the path ahead and guiding them in the decisions that will shape their destinies. For those who struggle for inner peace, offer them tranquility amidst the hustle and bustle of the world, allowing them to find serenity in Your grace. To those facing family challenges, pour Your blessing upon their homes, promoting understanding, forgiveness and unconditional love among loved ones. Lord, You know the secret longings of every heart, and we trust that through Your mercy You will meet each unique need. May Your divine light shine upon every corner of the Earth, uniting us in compassion and solidarity. Strengthen us to face daily challenges and inspire us to be instruments of Your peace and love in this world. In Your name, we pray, confident that You are the source of all good and that, in Your infinite wisdom, You will answer the prayers of those who seek Your help.
            </p>
              <b>Oración en español:</b>
              <p>Oh Gran Creador del Universo, Hoy, con humildad, volvemos nuestro corazón hacia Ti, reconociendo Tu grandeza y tu infinito amor. Te pedimos que guíes cada paso de nuestras vidas, entendiendo las necesidades únicas de cada uno de Tus hijos en este vasto mundo. Para aquellos que enfrentan desafíos financieros, te pedimos Tu generosa provisión para que la abundancia pueda fluir en sus vidas y las preocupaciones financieras se disipen como la niebla al amanecer. A aquellos que enfrentan dificultades de salud, imploramos Tu sanación compasiva, para que puedan sentir Tu toque restaurador y encontrar consuelo en momentos de dolor. Por aquellos que están perdidos en la oscuridad de la soledad, te pedimos Tu cálida presencia, para que sientan Tu amor envolviéndolos y brindándoles consuelo. A quienes buscan sabiduría, concédeles discernimiento en sus elecciones, iluminando el camino a seguir y guiándolos en las decisiones que moldearán sus destinos. Para aquellos que luchan por la paz interior, ofréceles tranquilidad en medio del ajetreo del mundo, permitiéndoles encontrar la serenidad en Tu gracia. A quienes enfrentan desafíos familiares, derrama Tu bendición sobre sus hogares, promoviendo la comprensión, el perdón y el amor incondicional entre sus seres queridos. Señor, Tú conoces los anhelos secretos de cada corazón y confiamos en que a través de Tu misericordia satisfarás cada necesidad única. Que Tu luz divina brille sobre cada rincón de la Tierra, uniéndonos en compasión y solidaridad. Fortalécenos para enfrentar los desafíos diarios e inspíranos a ser instrumentos de Tu paz y amor en este mundo. En Tu nombre oramos, confiados en que Tú eres la fuente de todo bien y que, en Tu infinita sabiduría, responderás las oraciones de quienes buscan Tu ayuda.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues2} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish2} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol2} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 2 */}
        {/* ======== */}
        {/* Oração 3 */}
        
        {/*Fim - Oração 3 */}
        
         {/* ========== */}
        
        {/* Oração 4 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img4}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
             <b>Oração da Esperança</b><br />
            Deus de esperança, Em um mundo cheio de incertezas, Nós te buscamos.
            Nos dá esperança para o futuro, Força para enfrentar os desafios, E paz para nossos corações.
            Ajuda-nos a ver o bem em cada pessoa, A encontrar beleza no mundo, E a viver com fé e alegria.
            Esta oração é uma forma de expressarmos nossa esperança no futuro. Pedimos a Deus que nos dê força para enfrentar os desafios, paz para nossos corações, e a capacidade de ver o bem em cada pessoa.
            É claro que existem muitas outras maneiras de escrever uma oração dominical. A melhor maneira é encontrar uma oração que expresse sua própria fé e esperança.
              <br />
              <b>Prayer in English:</b><br />
              <b>Prayer of Hope</b><br /> God of hope, In a world full of uncertainty, We seek you. It gives us hope for the future, Strength to face challenges, And peace for our hearts. Help us to see the good in every person, To find beauty in the world, And to live with faith and joy. This prayer is a way of expressing our hope for the future. We ask God to give us strength to face challenges, peace in our hearts, and the ability to see the good in each person. Of course, there are many other ways to write a Sunday prayer. The best way is to find a prayer that expresses your own faith and hope.
              <br/><b>Oración en español:</b><br/>
              <b>Oración de Esperanza</b><br /> Dios de esperanza, En un mundo lleno de incertidumbre, Te buscamos. Nos da esperanza para el futuro, fuerza para afrontar los desafíos y paz para nuestros corazones. Ayúdanos a ver el bien en cada persona, a encontrar la belleza en el mundo y a vivir con fe y alegría. Esta oración es una manera de expresar nuestra esperanza para el futuro. Le pedimos a Dios que nos dé fuerza para enfrentar los desafíos, paz en nuestro corazón y la capacidad de ver el bien en cada persona. Por supuesto, hay muchas otras formas de escribir una oración dominical. La mejor manera es encontrar una oración que exprese su propia fe y esperanza.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues4} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish4} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol4} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 4 */}
        {/* ================ */}
        {/* Oração 5 */}
        
              
        {/*Fim - Oração 5 */}
        {/* ============== */}
        
        {/* Oração 6 */}
        
              
        {/*Fim - Oração 6 */}
        {/* =============== */}
        
        {/* Oração 7 */}

        {/*Fim - Oração 7 */}
        {/* ================= */}
        
        {/* Oração 8 */}
        {/*Fim - Oração 8 */}
        {/* =============== */}
        
        {/* Oração 9 */}
        {/*Fim - Oração 9 */}
        {/* ================= */}
        
        {/* Oração 10 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img10}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
                   <p><b>Perdão</b></p>

              Perdoa a quem te ofendeu, esquecendo-te do que ele fez. Dá o teu irmão não só o que tens, mas um poucou de Ti mesmo...

              Consolando aquêle que sofre, dá-lhe o teu amor. Alegra-te com quem é feliz, agradecendo ao Senhor por ele. Que a rotina não diminua o ardor dos teus atos.

              Nunca justifiques o que é condenável. Nem toleres o mal que o mundo aceita. E a Paz  descerá sobre Ti.
              <br />
              <b>Prayer in English:</b>
                      <p><b>Forgiveness</b></p>

                Forgive anyone who offended you, forgetting what he did. Give your brother not only what you have, but a little of yourself...

                Consoling the one who suffers, give him your love. Rejoice with those who are happy, thanking the Lord for them. May routine not diminish the ardor of your actions.

                Never justify what is reprehensible. Nor tolerate the evil that the world accepts. And the Peace of Christmas will descend upon You.
              <br />
              <b>Oración en español:</b>
                 <p><b>Perdón</b></p>

              Perdona a quien te haya ofendido, olvidando lo que hizo. Dale a tu hermano no sólo lo que tienes, sino un poco de ti mismo...

              Consolando al que sufre, dale tu amor. Alegraos con los que están felices, dando gracias al Señor por ellos. Que la rutina no disminuya el ardor de tus acciones.

              Nunca justifiques lo que es reprobable. Ni tolerar el mal que el mundo acepta. Y la Paz de la Navidad descenderá sobre Ti.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues10} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish10} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol10} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 10 */}
        {/* =============== */}
        
        {/* Oração 11 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img8}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
               <p><b>Oração para quem tem fome no Natal</b></p>

            Pai Celestial, No Natal, celebramos o nascimento de Jesus, o Pão da Vida.

            Mas sabemos que, em muitos lugares do mundo, ainda há pessoas que passam fome. Pedimos-te que olheis para aqueles que sofrem nesta noite santa. Que lhes envieis o Vosso amor e o Vosso sustento.

            Que lhes abris as Vossas portas e lhes mostrais a Vossa misericórdia. Que lhes dais o pão que alimenta o corpo e a alma. Que lhes dais a paz e a esperança.

            Pedimos-te também que nos ajudeis a sermos mais solidários com os que passam fome. Que nos inspireis a partilhar o que temos com os que precisam.

            Que nos mostreis como podemos fazer a diferença no mundo. Em nome de Jesus, o Pão da Vida, Amém.

            (Pode-se acrescentar uma frase pessoal, pedindo a Deus que abençoe alguém específico que passa fome.) Esta oração pode ser rezada individualmente ou em grupo.

            Ela é uma forma de expressarmos a nossa compaixão pelos que sofrem e de pedirmos a Deus que os abençoe.

            Ela também é uma oportunidade de nos comprometermos a sermos mais solidários com os que passam fome.
              <br />
              <b>Prayer in English:</b>
                  <p><b>Prayer for those who are hungry at Christmas</b></p>

              Heavenly Father, At Christmas, we celebrate the birth of Jesus, the Bread of Life.

              But we know that, in many places around the world, there are still people who go hungry. We ask you to look at those who suffer on this holy night. May You send them Your love and Your sustenance.

              May You open Your doors to them and show them Your mercy. May you give them the bread that feeds the body and soul. May you give them peace and hope.

              We also ask you to help us be more supportive of those who are hungry. May you inspire us to share what we have with those who need it.

              May you show us how we can make a difference in the world. In the name of Jesus, the Bread of Life, Amen.

              (You can add a personal phrase, asking God to bless someone specific who is hungry.) This prayer can be prayed individually or in a group.

              It is a way of expressing our compassion for those who suffer and asking God to bless them.

              It is also an opportunity to commit to being more supportive of those who are hungry.
              <br />
              <b>Oración en español:</b>
                   <p><b>Oración por los que tienen hambre en Navidad</b></p>

              Padre celestial, En Navidad celebramos el nacimiento de Jesús, el Pan de Vida.

              Pero sabemos que en muchos lugares del mundo todavía hay personas que pasan hambre. Te pedimos que mires a los que sufren en esta noche santa. Que les envíes Tu amor y Tu sustento.

              Que les abras Tus puertas y les muestres Tu misericordia. Que les des el pan que alimenta el cuerpo y el alma. Que les des paz y esperanza.

              También te pedimos que nos ayudes a ser más solidarios con quienes tienen hambre. Que nos inspires a compartir lo que tenemos con quienes lo necesitan.

              Que nos muestres cómo podemos marcar la diferencia en el mundo. En el nombre de Jesús, el Pan de Vida, Amén.

              (Puede agregar una frase personal, pidiéndole a Dios que bendiga a alguien específico que tenga hambre). Esta oración se puede rezar individualmente o en grupo.

              Es una forma de expresar nuestra compasión por quienes sufren y pedirle a Dios que los bendiga.

              También es una oportunidad para comprometernos a apoyar más a quienes tienen hambre.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues11} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish11} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol11} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 11 */}
        {/* ================= */}
        
        {/* Oração 12 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img12}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
            <p><b>Prece para os criminosos</b></p>

            Senhor Deus, Pai de todos, Com humildade e compaixão, nos dirigimos a Ti, rogando por todos os criminosos que estão neste mundo. Sabemos que eles são seres humanos, assim como nós, e que também têm o direito de serem amados e perdoados. Peçamos, Senhor, que Tu ilumines seus corações, para que eles possam reconhecer seus erros e se arrepender. Que Tu lhes dês a força para superar suas dificuldades e encontrarem um caminho de paz e justiça. Que Tu também abençoes as vítimas dos crimes, para que encontrem conforto e cura. E que Tu nos dês a sabedoria para agirmos com amor e compaixão, mesmo diante da dor e do sofrimento. Amém! 
              <br />
            <p><b>Prayer in English:</b></p>
            <p><b>Prayer for criminals</b></p>

            Lord God, Father of all, With humility and compassion, we turn to You, praying for all the criminals in this world. We know that they are human beings, just like us, and that they also have the right to be loved and forgiven. Let us ask, Lord, that You enlighten their hearts, so that they can recognize their mistakes and repent. May You give them the strength to overcome their difficulties and find a path of peace and justice. May You also bless the victims of crimes, so that they may find comfort and healing. And may You give us the wisdom to act with love and compassion, even in the face of pain and suffering. Amen! 
            </p>

            <p><b>Oración en español</b><br />
                 <p><b>Oración por los delincuentes</b></p>

            Señor Dios, Padre de todos, Con humildad y compasión, acudimos a Ti orando por todos los criminales de este mundo. Sabemos que son seres humanos, como nosotros, y que también tienen derecho a ser amados y perdonados. Pidamos, Señor, que ilumines sus corazones, para que reconozcan sus errores y se arrepientan. Que les des la fuerza para superar sus dificultades y encontrar un camino de paz y justicia. Bendices también a las víctimas de crímenes, para que encuentren consuelo y curación. Y que nos des la sabiduría para actuar con amor y compasión, incluso ante el dolor y el sufrimiento. ¡Amén! 
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues12} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish12} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol12} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 12 */}
        {/* ================= */}
        
        {/* Oração 13 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img13}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
             <p><b>Oração</b></p>
            No silêncio da alma, ecoa a prece,
            Uma sinfonia suave que eleva o ser.
            É o encontro íntimo com o divino,
            Um diálogo sagrado, puro e sincero a tecer.
            Na oração, as asas da esperança se abrem,
            Levando-nos além das fronteiras terrenas.
            É o refúgio da alma em momentos de aflição,
            Onde encontramos paz nas horas mais serenas.
            Nas palavras sussurradas ao universo,
            Reside o poder de transformação.
            É um portal que nos conecta ao infinito,
            Guiando-nos com amor e compaixão.
            Na oração, o coração se abre em humildade,
            Reconhecendo nossa fragilidade e fé.
            É a ponte que une o humano ao divino,
            Um laço etéreo que nos conduz à harmonia e à fé.
            Que em cada prece, encontremos luz e força,
            Para enfrentar os desafios do caminho.
            Que a oração seja nosso farol na escuridão,
            E a expressão mais pura do amor divino.
              <br />
              <b>Prayer in English:</b>
              <p><b>Prayer</b></p>
            In the silence of the soul, the prayer echoes,
            A gentle symphony that elevates the being.
            It is an intimate encounter with the divine,
            A sacred, pure and sincere dialogue to be had.
            In prayer, the wings of hope open,
            Taking us beyond earthly borders.
            It is the soul's refuge in times of distress,
            Where we find peace in the most serene hours.
            In words whispered to the universe,
            There lies the power of transformation.
            It is a portal that connects us to infinity,
            Guiding us with love and compassion.
            In prayer, the heart opens in humility,
            Recognizing our fragility and faith.
            It is the bridge that unites the human with the divine,
            An ethereal bond that leads us to harmony and faith.
            That in every prayer, we find light and strength,
            To face the challenges along the way.
            May prayer be our beacon in the darkness,
            It is the purest expression of divine love.
              <br />
              <b>Oración en español:</b>
               <p><b>Oración</b></p>
            En el silencio del alma resuena la oración,
            Una suave sinfonía que eleva el ser.
            Es un encuentro íntimo con lo divino,
            Se debe mantener un diálogo sagrado, puro y sincero.
            En la oración se abren las alas de la esperanza,
            Llevándonos más allá de las fronteras terrenales.
            Es el refugio del alma en tiempos de angustia,
            Donde encontramos la paz en las horas más serenas.
            En palabras susurradas al universo,
            Ahí reside el poder de la transformación.
            Es un portal que nos conecta con el infinito,
            Guiándonos con amor y compasión.
            En la oración, el corazón se abre en humildad,
            Reconociendo nuestra fragilidad y fe.
            Es el puente que une lo humano con lo divino,
            Un vínculo etéreo que nos lleva a la armonía y la fe.
            Que en cada oración encontremos luz y fuerza,
            Para afrontar los retos del camino.
            Que la oración sea nuestro faro en la oscuridad,
            Es la expresión más pura del amor divino.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues13} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish13} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol13} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 13 */}
        {/* ================ */}
        
        {/* Oração 14 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img14}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
                  <p><b>Ato de Fé</b></p>
              Em todo instante Confio em Deus. No que faço Penso em Deus. Com quem vivo Amo a Deus. Por onde sigo. Sigo com Deus. No que acontece. Deus faz o melhor. Tudo o que tenho, é bênção de Deus. EMMANUEL (Chico Xavier)
              <br />
              <b>Prayer in English:</b><br />
              <b>Act of Faith</b><br />
              At all times I trust in God. In what I do I think about God. Who I live with I love God. Where do I follow. I continue with God. In what happens. God does the best. Everything I have is a blessing from God. EMMANUEL (Chico Xavier)
              <br />
              <b>Oración en español:</b><br />
              <b>Acto de Fe</b><br />
              En todo momento confío en Dios. En lo que hago pienso en Dios. Con quien vivo, amo a Dios. ¿Adónde sigo? Sigo con Dios. En lo que pasa. Dios hace lo mejor. Todo lo que tengo es una bendición de Dios. EMMANUEL (Chico Xavier)
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues14} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish14} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol14} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 14 */}
        
        {/* Oração 15 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img15}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
                  <b>Oração pra pedir perdão</b><br />
              Ó Deus, Pai de amor e bondade, Eu venho a Ti hoje para pedir perdão.
              Eu peço perdão por todas as vezes que errei, Por todas as vezes que magoei os outros, Por todas as vezes que não fui fiel a Ti.
              Eu sei que o perdão é um dom, E eu o peço com humildade.
              Eu reconheço que preciso do Teu perdão, Para que eu possa ser livre do peso do pecado, E para que eu possa viver em paz.
              Eu também peço perdão por todas as vezes Em que eu não perdoei aqueles que me feriram.
              Eu sei que o perdão é um processo, Mas eu estou disposto a perdoar, Para que eu possa ser livre do ódio e do ressentimento.
              Abençoa-me com o Teu perdão, E ajuda-me a ser um instrumento do Teu amor. Amém.
              <br />
              <b>Prayer in English:</b><br />
                 <b>Prayer to ask for forgiveness</b><br />
              O God, Father of love and kindness, I come to You today to ask for forgiveness.
              I ask forgiveness for all the times I made mistakes, For all the times I hurt others, For all the times I wasn't faithful to You.
              I know that forgiveness is a gift, And I ask it with humility.
              I recognize that I need Your forgiveness, So that I can be free from the weight of sin, And so that I can live in peace.
              I also ask for forgiveness every time In which I have not forgiven those who hurt me.
              I know forgiveness is a process, But I'm willing to forgive, So that I can be free from hate and resentment.
              Bless me with Your forgiveness, And help me to be an instrument of Your love. Amen.
              <br />
              <b>Oración en español:</b><br />
                   <b>Oración para pedir perdón</b><br />
              Oh Dios, Padre del amor y de la bondad, Vengo a Ti hoy para pedirte perdón.
              Pido perdón por todas las veces que cometí errores, Por todas las veces que lastimé a otros, Por todas las veces que no te fui fiel.
              Sé que el perdón es un regalo, Y lo pido con humildad.
              Reconozco que necesito tu perdón, Para que pueda ser libre del peso del pecado, Y para que pueda vivir en paz.
              Yo también pido perdón cada vez. En el que no he perdonado a los que me hicieron daño.
              Sé que el perdón es un proceso, Pero estoy dispuesto a perdonar, Para poder estar libre del odio y del resentimiento.
              Bendíceme con tu perdón, Y ayúdame a ser un instrumento de Tu amor. Amén.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues15} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish15} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol15} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 15 */}
        
        {/* Oração 16 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img16}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
                Senhor, ensina-nos a orar sem esquecer o trabalho, a dar sem olhar a quem, a servir sem perguntar até quando, a sofrer sem magoar seja a quem for, a progredir sem perder a simplicidade, a semear o bem sem pensar nos resultados, a desculpar sem condições, a marchar para a frente sem contar os obstáculos, a ver sem malícia, a escutar sem corromper os assuntos, a falar sem ferir, a compreender o próximo sem exigir entendimento, a respeitar os semelhantes sem reclamar consideração, a dar o melhor de nós, além da execução do próprio dever sem cobrar taxas de reconhecimento.
                
                Senhor, fortalece em nós a paciência para com as dificuldades dos outros, assim como precisamos da paciência dos outros para com as nossas próprias dificuldades. Ajuda-nos para que a ninguém façamos aquilo que não desejamos para nós. Auxilia-nos sobretudo a reconhecer que a nossa felicidade mais alta será invariavelmente aquela de cumprir os desígnios, onde e como queiras, hoje, agora e sempre. Amém! pelo Espírito<i> Emmanuel</i>, psicografia de <i>Francisco Cândido Xavier</i>
              <br />
              <b>Prayer in English:</b><br />
              Sir, teach us to pray without forgetting work, To give, without looking who, to serve without asking until when, to suffer without hurting anyone, to progress without losing simplicity, to sow good without thinking about the results, to apologize without conditions, to march forward without counting the obstacles, to see without malice, to listen without corrupting matters, to speak without hurting, to understand others without demanding understanding, to respect others without demanding consideration, to do our best, in addition to performing our own duties without charging recognition fees.
              Sir, strengthens our patience with difficulties of others, just as we need the patience of others to our own difficulties. Help us so that no one does that to anyone that we don't want for ourselves. Above all, it helps us to recognize that our higher happiness will invariably be that of fulfilling the designs, where and however you want, today, now and always. Amen! by the Spirit <i>Emmanuel</i>, psychography by <i>Francisco Cândido Xavier </i>
              <br />
              <b>Oración en español:</b><br />
              Señor, enséñanos a orar sin olvidar el trabajo, Para dar, sin mirar a quién, servir sin preguntar hasta cuando, sufrir sin lastimar a nadie, progresar sin perder la sencillez, sembrar el bien sin pensar en los resultados, para disculparse sin condiciones, marchar hacia adelante sin contar los obstáculos, para ver sin malicia, escuchar sin corromper las cosas, hablar sin lastimar, comprender a los demás sin exigir comprensión, respetar a los demás sin exigir consideración, hacer lo mejor que podamos, además de realizar nuestras propias tareas sin cobrar tasas de reconocimiento. Señor, fortalece nuestra paciencia ante las dificultades de los demás, así como necesitamos la paciencia de los demás a nuestras propias dificultades. Ayúdanos a que nadie le haga eso a nadie. que no queremos para nosotros. Sobre todo, nos ayuda a reconocer que nuestra una mayor felicidad será invariablemente el de cumplir los diseños, dónde y como quieras, hoy, ahora y siempre. ¡Amén! por el Espíritu <i>Emmanuel</i>, psicografía por <i>Francisco Cándido Xavier</i>
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues16} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish16} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol16} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 16 */}
        
        {/* Oração 17 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img17}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
             <b>Oração pelas Crianças do Mundo</b><br />
            Deus Pai, Nós te louvamos e te agradecemos pelo dom da vida.
            Nós te pedimos por todas as crianças do mundo. Abençoa-as com tua paz, teu amor e tua proteção.
            Guarda-as do mal e da violência. Dá-lhes pais amorosos e responsáveis.
            Dá-lhes professores e educadores que as ajudem a crescer e aprender. Dá-lhes amigos que as amem e as aceitem como são.
            Dá-lhes saúde, alegria e esperança. Que elas possam crescer em sabedoria e graça, E que um dia possam conhecer o teu amor infinito. Amém!
              <br />
              <b>Prayer in English:</b><br />
              <b>Prayer for the Children of the World</b><br />
              Father God, We praise you and thank you for the gift of life. We ask you for all the children in the world. Bless them with your peace, your love and your protection. Keep them from evil and violence. Give them loving and responsible parents. Give them teachers and educators to help them grow and learn. Give them friends who love and accept them as they are. Give them health, joy and hope. May they grow in wisdom and grace, And may they one day know your infinite love. Amen!
            </p>
              <b>Oración en español:</b><br />
        
              <p>
                 <b>Oración por los niños del mundo:</b><br />
              Padre Dios, te alabamos y te damos gracias por el don de la vida. Te lo pedimos por todos los niños del mundo. Bendícelos con tu paz, tu amor y tu protección. Guárdalos del mal y de la violencia. Dales padres amorosos y responsables. Bríndeles maestros y educadores que los ayuden a crecer y aprender. Dales amigos que los amen y los acepten tal como son. Dales salud, alegría y esperanza. Que crezcan en sabiduría y gracia, y que algún día conozcan tu infinito amor. ¡Amén!
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues17} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish17} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol17} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 17 */}
        
        {/* Oração 18 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img18}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
                <b>Oração da Esperança</b> <br />
            Deus de esperança, Em um mundo cheio de incertezas, Nós te buscamos.
            Nos dá esperança para o futuro, Força para enfrentar os desafios, E paz para nossos corações.
            Ajuda-nos a ver o bem em cada pessoa, A encontrar beleza no mundo, E a viver com fé e alegria.
            Esta oração é uma forma de expressarmos nossa esperança no futuro. Pedimos a Deus que nos dê força para enfrentar os desafios, paz para nossos corações, e a capacidade de ver o bem em cada pessoa.
            É claro que existem muitas outras maneiras de escrever uma oração dominical. A melhor maneira é encontrar uma oração que expresse sua própria fé e esperança.
              <br />
              <b>Prayer in English:</b> <br />
               <b>Prayer of Hope</b> <br />
            God of hope, In a world full of uncertainty, We seek you. It gives us hope for the future, Strength to face challenges, And peace for our hearts. Help us to see the good in every person, To find beauty in the world, And to live with faith and joy. This prayer is a way of expressing our hope for the future. We ask God to give us strength to face challenges, peace in our hearts, and the ability to see the good in each person. Of course, there are many other ways to write a Sunday prayer. The best way is to find a prayer that expresses your own faith and hope.
              <br />
            <b>Oración en español:</b> <br />
            <b>Oración de esperanza</b> <br />
            Dios de esperanza, En un mundo lleno de incertidumbre, Te buscamos. Nos da esperanza para el futuro, fuerza para afrontar los desafíos y paz para nuestros corazones. Ayúdanos a ver el bien en cada persona, a encontrar la belleza en el mundo y a vivir con fe y alegría. Esta oración es una manera de expresar nuestra esperanza para el futuro. Le pedimos a Dios que nos dé fuerza para enfrentar los desafíos, paz en nuestro corazón y la capacidad de ver el bien en cada persona. Por supuesto, hay muchas otras formas de escribir una oración dominical. La mejor manera es encontrar una oración que exprese su propia fe y esperanza.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues18} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish18} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol18} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 18 */}
        
        {/* Oração 19 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img19}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
                <b>Oração para o cultivo do Amor</b><br />
            Ó Deus, fonte de todo amor, Venho a Ti hoje para pedir a Tua ajuda para cultivar o amor em minha vida.
            Sei que o amor é o caminho para a paz e a felicidade, E eu quero viver uma vida cheia de amor.
            Ajude-me a ser mais compassivo e gentil com os outros, A perdoar aqueles que me feriram, E a ver o bem em todos.
            Dê-me a força para superar os meus medos e preconceitos, E para construir pontes de entendimento com aqueles que são diferentes de mim.
            Ajude-me a ser um instrumento do Teu amor no mundo, E a fazer a diferença na vida das pessoas. Em nome de Jesus, Amém.
            Reflexão: O amor é uma força poderosa que pode transformar o mundo. Quando cultivamos o amor em nossas vidas, estamos contribuindo para a criação de um mundo mais pacífico e harmonioso.
            Esta oração pode nos ajudar a lembrar da importância do amor e a buscar maneiras de cultivá-lo em nossas vidas. Aqui estão algumas ideias específicas para cultivar o amor:
            Seja gentil e atencioso com as pessoas ao seu redor. Perdoe aqueles que o machucaram. Veja o bem em todos, mesmo nas pessoas que são diferentes de você.
            Seja um instrumento de paz e reconciliação no mundo. O amor é uma escolha,mas é uma escolha que vale a pena fazer.
              <br />
              <b>Prayer in English:</b><br />
              <b>Prayer for the cultivation of Love</b><br />
               O God, source of all love, I come to You today to ask for Your help in cultivating love in my life. I know that love is the path to peace and happiness, and I want to live a life full of love. Help me to be more compassionate and kind to others, To forgive those who have hurt me, And to see the good in everyone. Give me the strength to overcome my fears and prejudices, And to build bridges of understanding with those who are different from me. Help me to be an instrument of Your love in the world, And to make a difference in people's lives. In the name of Jesus, Amen. Reflection: Love is a powerful force that can transform the world. When we cultivate love in our lives, we are contributing to the creation of a more peaceful and harmonious world. This prayer can help us remember the importance of love and look for ways to cultivate it in our lives. Here are some specific ideas for cultivating love: Be kind and considerate to the people around you. Forgive those who hurt you. See the good in everyone, even in people who are different from you. Be an instrument of peace and reconciliation in the world. Love is a choice, but it's a choice worth making.
              <br />
              <b>Oración en español:</b><br />
                  <b>Oración por el cultivo del Amor</b><br />
              Oh Dios, fuente de todo amor, hoy vengo a Ti para pedirte ayuda para cultivar el amor en mi vida. Sé que el amor es el camino hacia la paz y la felicidad y quiero vivir una vida llena de amor. Ayúdame a ser más compasivo y amable con los demás, a perdonar a quienes me han herido y a ver el bien en todos. Dame la fuerza para superar mis miedos y prejuicios, y para tender puentes de entendimiento con quienes son diferentes a mí. Ayúdame a ser un instrumento de Tu amor en el mundo y a marcar una diferencia en la vida de las personas. En el nombre de Jesús, Amén.
              Reflexión: El amor es una fuerza poderosa que puede transformar el mundo. Cuando cultivamos el amor en nuestras vidas, estamos contribuyendo a la creación de un mundo más pacífico y armonioso.
              Esta oración puede ayudarnos a recordar la importancia del amor y buscar formas de cultivarlo en nuestras vidas. Aquí hay algunas ideas específicas para cultivar el amor: Sea amable y considerado con las personas que le rodean. Perdona a quienes te lastimaron. Ve lo bueno en todos, incluso en las personas que son diferentes a ti. Ser un instrumento de paz y reconciliación en el mundo. El amor es una elección, pero vale la pena tomarla.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues19} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish19} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol19} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 19 */}
        
        {/* Oração 20 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img20}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
              <b>Oração para o homem orgulhoso superar seus preconceitos</b><br />
              Pai Celestial, Eu venho a Ti, humildemente, Pedir-te que me ajude a superar meus preconceitos.
              Sei que sou um homem orgulhoso, E que isso me impede de ver o mundo com clareza. Eu julgo as pessoas pelas suas aparências, E não pelas suas ações.
              Eu me sinto superior aos outros, E isso me leva a tratar as pessoas com desdém. Eu sei que isso é errado, E eu quero mudar.
              Peço-te que me ajude a ser mais humilde, A ver o mundo com o coração, E a tratar as pessoas com respeito. Ensina-me a amar meus inimigos, E a perdoar aqueles que me ofenderam.
              Dá-me a força para quebrar as minhas barreiras, E para construir um mundo mais justo e fraterno. Amém.
              (Pode-se acrescentar uma súplica específica, por exemplo, pela ajuda a superar o preconceito contra uma determinada raça, etnia, religião, orientação sexual, etc.)
               <br />
               <b>Oração pessoal:</b> Ó Deus, Eu quero ser um homem melhor.
              Quero ser um homem que ama e respeita a todos, Independentemente de suas diferenças. Dai-me a força para superar meus preconceitos, E para construir um mundo mais justo e fraterno. Amém.
              Essa oração é uma forma de o homem orgulhoso reconhecer seu erro e pedir ajuda a Deus para mudar. Ela começa com uma súplica humilde, pedindo a Deus que o ajude a superar seu orgulho.
              Em seguida, ela reconhece os erros do homem orgulhoso, como julgar as pessoas pelas aparências, sentir-se superior aos outros e tratar as pessoas com desdém. A oração termina com um pedido de ajuda a Deus para ser mais humilde, amar os inimigos e perdoar aqueles que o ofenderam.
              É importante que a oração seja feita com sinceridade e humildade. O homem orgulhoso deve estar disposto a reconhecer seus erros e pedir a ajuda de Deus para mudar.
              <br />
              <b>Prayer in English:</b><br />
               <b>Prayer for the proud man to overcome his prejudices</b> <br />
              Heavenly Father, I come to You, humbly, Asking you to help me overcome my prejudices.
              I know I'm a proud man, And that prevents me from seeing the world clearly. I judge people by their appearances, And not because of your actions.
              I feel superior to others, And that leads me to treat people with disdain. I know this is wrong, And I want to change.
              I ask you to help me to be more humble, Seeing the world with the heart, And treating people with respect. Teach me to love my enemies, And to forgive those who offended me.
              Give me the strength to break my barriers, And to build a more just and fraternal world. Amen.
              (You can add a specific prayer, for example, for help in overcoming prejudice against a certain race, ethnicity, religion, sexual orientation, etc.)
              <br /><b>Personal prayer:</b><br /> O God, I want to be a better man.
              I want to be a man who loves and respects everyone, Regardless of their differences. Give me the strength to overcome my prejudices, And to build a more just and fraternal world. Amen.
              This prayer is a way for a proud man to recognize his mistake and ask God for help to change. She begins with a humble plea, asking God to help him overcome his pride.
              Next, she acknowledges the mistakes of the proud man, such as judging people by appearances, feeling superior to others, and treat people with disdain. The prayer ends with a request to God for help to be more humble, love your enemies and forgive those who offend you.
              It is important that prayer is done with sincerity and humility. A proud man must be willing to recognize his mistakes and ask God for help to change.
              <br />
              <b>Oración en español:</b><br />
               <b>Oración para que el hombre orgulloso supere sus prejuicios</b><br />
              Padre celestial, A Ti vengo, humildemente, Pidiéndote que me ayudes a superar mis prejuicios.
              Sé que soy un hombre orgulloso, Y eso me impide ver el mundo con claridad. Juzgo a las personas por sus apariencias, Y no por tus acciones.
              Me siento superior a los demás, Y eso me lleva a tratar a la gente con desdén. Sé que esto está mal Y quiero cambiar.
              Te pido que me ayudes a ser más humilde, Ver el mundo con el corazón, Y tratar a las personas con respeto. Enséñame a amar a mis enemigos, Y perdonar a los que me ofendieron.
              Dame la fuerza para romper mis barreras, Y para construir un mundo más justo y fraterno. Amén.
              (Puedes añadir una oración específica, por ejemplo, pidiendo ayuda para superar los prejuicios contra una determinada raza, etnia, religión, orientación sexual, etc.)
              <br /><b>Oración personal:</b><br /> Oh Dios, Quiero ser un mejor hombre.
              Quiero ser un hombre que ame y respete a todos, Independientemente de sus diferencias. Dame la fuerza para superar mis prejuicios, Y para construir un mundo más justo y fraterno. Amén.
              Esta oración es una manera para que un hombre orgulloso reconozca su error y pida ayuda a Dios para cambiar. Comienza con una humilde súplica, pidiendo a Dios que le ayude a superar su orgullo.
              A continuación, reconoce los errores del hombre orgulloso, como juzgar a las personas por las apariencias, sentirse superior a los demás y tratar a las personas con desdén. La oración termina con una petición a Dios de ayuda para ser más humilde, amar a tus enemigos y perdonar a quienes te ofenden.
              Es importante que la oración se haga con sinceridad y humildad. Un hombre orgulloso debe estar dispuesto a reconocer sus errores y pedir ayuda a Dios para cambiar.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues20} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish20} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol20} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 20 */}
        
        {/* Oração 21 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img21}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
              <b>Oração para uma réstia de luz no mundo</b><br />
            Oh, Deus, Em um mundo de escuridão, Peço-te uma réstia de luz.
            Uma luz que ilumine os nossos caminhos, Que nos guie na escuridão, Que nos dê esperança.
            Que esta luz seja uma fonte de amor, De paz, de justiça, De bondade.
            Que ela possa tocar os corações das pessoas, E transformar o mundo.
            Que esta luz seja um sinal de que o bem ainda existe, Que a esperança ainda é possível, Que o amor ainda vence.
            Oh, Deus, Envia-nos uma réstia de luz, Para que possamos construir um mundo melhor. Amém !
              <br />
              <b>Prayer in English:</b><br />
            <b>Prayer for a ray of light in the world</b><br />
            Oh God, In a world of darkness, I ask you for a ray of light.
            A light that illuminates our paths, May it guide us in the darkness, May it give us hope.
            May this light be a source of love, Of peace, of justice, Of kindness.
            May she touch people's hearts, And transform the world.
            May this light be a sign that good still exists, That hope is still possible, That love still wins.
            Oh God, Send us a ray of light, So that we can build a better world. Amen !
              <br />
              <b>Oración en español:</b><br />
            <b>Oración por un rayo de luz en el mundo</b><br />
            Oh Dios, En un mundo de oscuridad, Te pido un rayo de luz.
            Una luz que ilumina nuestros caminos, Que nos guíe en la oscuridad, Que nos dé esperanza.
            Que esta luz sea fuente de amor, De paz, de justicia, De bondad.
            Que ella toque el corazón de la gente, Y transformar el mundo.
            Que esta luz sea señal de que el bien aún existe, Esa esperanza todavía es posible, Ese amor todavía gana.
            Oh Dios, Envíanos un rayo de luz, Para que podamos construir un mundo mejor. Amén !
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues1} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish21} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol21} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 21 */}
        {/* Oração 22 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img22}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
                  <b>Mães em Desespero</b><br />
              Pai, Venho a Ti hoje em nome de todas as mães que se encontram em desespero. Elas estão passando por momentos difíceis, e não sabem como encontrar a saída. Elas estão cansadas, sobrecarregadas, e às vezes até sem esperança. Pai, Entra no coração dessas mães. Dá-lhes a paz que elas precisam. Dá-lhes a força que elas precisam. Dá-lhes a sabedoria que elas precisam. Pai, Mostra-lhes o Teu amor. Mostra-lhes que Tu estás com elas. Que Tu nunca as abandonarás. Pai, Sê a luz que guia esses seus filhos. Sê a esperança que lhes dá forças para seguir em frente. Sê o refúgio que lhes dá descanso.
              <br />
              <b>Prayer in English:</b><br />
                <b>Mothers in Despair</b><br />
              Father, I come to You today in the name of all mothers who are in despair. They are going through difficult times, and they don't know how to find a way out. They are tired, overwhelmed, and sometimes even hopeless. Father, Get into the hearts of these mothers. Give them the peace they need. Give them the strength they need. Give them the wisdom they need. Father, Show them Your love. Show them that You are with them. That You will never abandon them. Father, Be the light that guides these children of yours. Be the hope that gives them strength to move forward. Be the refuge that gives them rest.
              <br />
              <b>Oración en español:</b><br />
                    <b>Madres desesperadas</b><br />
              Padre, Vengo a Ti hoy en nombre de todas las madres que están desesperadas. Están pasando por momentos difíciles y no saben cómo encontrar una salida. Están cansados, abrumados y, a veces, incluso desesperados. Padre, Métete en el corazón de estas madres. Dales la paz que necesitan. Dales la fuerza que necesitan. Dales la sabiduría que necesitan. Padre, Muéstrales tu amor. Muéstrales que estás con ellos. Que nunca los abandonarás. Padre, Sé la luz que guíe a estos hijos tuyos. Sé la esperanza que les da fuerzas para seguir adelante. Sé el refugio que les dé descanso.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues1} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish22} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol22} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 22 */}
        {/* Oração 23 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img23}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
        
              <b>Oração pela ansiedade</b><br />
              Deus, Pai de amor e misericórdia, Vinde em socorro daqueles que passam pela ansiedade. Eles se sentem perdidos, confusos e desorientados. O medo e a preocupação os dominam, E eles não conseguem encontrar paz.
              Senhor, Renovai a sua paz em seus corações. Afastai de seus pensamentos as preocupações e os medos. Dê-lhes a certeza de que não estão sozinhos, E que vocês estão sempre com eles.
              Que eles possam sentir o vosso amor e a vossa presença, E que isso lhes dê força e coragem para enfrentarem os desafios.
              Senhor, Dai-lhes a graça de confiarem em vós, E de saberem que vocês têm o controle de tudo. Que eles possam descansar em vossos braços, E encontrar a paz que só vocês podem dar.
              Em nome de Jesus, Amém.
              **(Você pode acrescentar o nome de uma pessoa específica ou de um grupo de pessoas que você deseja orar.)**
              Essa oração pode ser feita individualmente ou em grupo. Ela pode ser repetida quantas vezes forem necessárias, até que a ansiedade seja aliviada.
              Além da oração, é importante que as pessoas que sofrem de ansiedade busquem ajuda profissional. Um psicólogo ou psiquiatra poderá ajudá-los a entender a origem da sua ansiedade e a desenvolver estratégias para lidar com ela.
              <br />
              <b>Prayer in English:</b><br />
                  <b>Prayer for anxiety</b><br />
              God, Father of love and mercy, Come to the aid of those experiencing anxiety. They feel lost, confused and disoriented. Fear and worry overwhelm them, And they can't find peace.
              Sir, Renew your peace in their hearts. Keep worries and fears out of your thoughts. Give them reassurance that they are not alone, And that you are always with them.
              May they feel your love and your presence, And may this give them strength and courage to face challenges.
              Sir, Give them the grace to trust in you, And knowing that you have control over everything. May they rest in your arms, And find the peace that only you can give.
              In the name of Jesus, Amen.
              **(You can add the name of a specific person or group of people you want to pray for.)**
              This prayer can be done individually or in a group. It can be repeated as many times as necessary until the anxiety is relieved.
              In addition to prayer, it is important that people suffering from anxiety seek professional help. A psychologist or psychiatrist can help you understand the origin of your anxiety and develop strategies to deal with it.
              <br />
              <b>Oración en español:</b><br />
                 <b>Oración por la ansiedad</b><br />
              Dios, Padre del amor y de la misericordia, Acuda en ayuda de quienes experimentan ansiedad. Se sienten perdidos, confundidos y desorientados. El miedo y la preocupación los abruman, Y no pueden encontrar la paz.
              Señor, Renueva tu paz en sus corazones. Mantenga las preocupaciones y los miedos fuera de sus pensamientos. Dales la seguridad de que no están solos, Y que siempre estás con ellos.
              Que sientan tu amor y tu presencia, Y que esto les dé fuerza y ​​coraje para afrontar los desafíos.
              Señor, Dales la gracia de confiar en ti, Y saber que tienes control sobre todo. Que descansen en tus brazos, Y encuentra la paz que sólo tú puedes dar.
              En nombre de Jesús, Amén.
              **(Puedes agregar el nombre de una persona o grupo de personas específico por el que quieras orar.)**
              Esta oración se puede hacer individualmente o en grupo. Se puede repetir tantas veces como sea necesario hasta aliviar la ansiedad.
              Además de la oración, es importante que las personas que sufren de ansiedad busquen ayuda profesional. Un psicólogo o psiquiatra puede ayudarte a comprender el origen de tu ansiedad y desarrollar estrategias para afrontarla.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues1} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish23} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol23} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
        {/*Fim - Oração 23 */}
        
        {/* Oração 24 */}
        <div className="container mx-auto p-4 md:p-8 border border-orange400 rounded-md flex flex-col md:flex-row items-center mt-8">
          <img
            src={img24}
            alt="Imagem"
            className="w-32 h-auto md:w-48 md:h-auto rounded mr-4 md:mr-8 mt-4 md:mt-0"
          />
          <div className="text-center md:text-left justify-center items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Prece</h2>
            <p className="text-justify">
                  <b>Oração da Unidade</b><br />
            Deus Criador, Nós nos reunimos hoje para te louvar e te agradecer. Somos um povo diverso, de diferentes origens e culturas, Mas estamos unidos em nossa fé em ti.
            Pedimos-te que nos ajudes a viver em paz e harmonia, A respeitar uns aos outros, E a trabalhar juntos para um mundo melhor.
            Abençoa nossas famílias e amigos, E guia-nos em nossos caminhos. Faz-nos instrumentos da tua paz, E ajuda-nos a construir um mundo onde todos sejam respeitados e amados.
            (Adaptado de uma oração do movimento ecumênico): Esta oração é uma forma de expressarmos nosso desejo de unidade e paz no mundo. Ela reconhece a diversidade de nosso povo, mas também a nossa unidade em Cristo. Pedimos a Deus que nos ajude a viver em paz e harmonia, a respeitar uns aos outros, e a trabalhar juntos para um mundo melhor.
              <br />
              <b>Prayer in English:</b><br />
               <b>Prayer of Unity</b> <br />
            Creator God, We gather today to praise you and thank you. We are a diverse people, from different origins and cultures, But we are united in our faith in you.
            We ask you to help us live in peace and harmony, To respect each other, And working together for a better world.
            Bless our families and friends, And guide us on our paths. Make us instruments of your peace, And help us build a world where everyone is respected and loved.
            (Adapted from a prayer from the ecumenical movement): This prayer is a way for us to express our desire for unity and peace in the world. It recognizes the diversity of our people, but also our unity in Christ. We ask God to help us live in peace and harmony, respect each other, and work together for a better world.
              <br />
              <b>Oración en español:</b><br />
                <b>Oración de Unidad</b><br />
            Dios creador, Nos reunimos hoy para alabarte y agradecerte. Somos un pueblo diverso, de diferentes orígenes y culturas, Pero estamos unidos en nuestra fe en ti.
            Te pedimos que nos ayudes a vivir en paz y armonía, Para respetarnos unos a otros, Y trabajar juntos por un mundo mejor.
            Bendice a nuestras familias y amigos, Y guíanos por nuestros caminos. Haznos instrumentos de tu paz, Y ayúdanos a construir un mundo donde todos sean respetados y amados.
            (Adaptado de una oración del movimiento ecuménico): Esta oración es una manera de expresar nuestro deseo de unidad y paz en el mundo. Reconoce la diversidad de nuestro pueblo, pero también nuestra unidad en Cristo. Le pedimos a Dios que nos ayude a vivir en paz y armonía, respetarnos unos a otros y trabajar juntos por un mundo mejor.
            </p>
            <p><b><em>Oração em áudio: Português</em></b></p>
            <audio controls>
              <source src={audioPortugues1} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Audio Prayer: English</em></b></p>
            <audio controls>
              <source src={audioEnglish24} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><b><em>Oración en audio: español</em></b></p>
            <audio controls>
              <source src={audioEspanol24} type="audio/mp3" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
       
       
        {isVisible && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', }}>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Voltar ao Topo ^
          </a>
        </div>
      )}


      

      {/*Fim - Oração 24 */}

      <Footer />
    </div>
  );
}
