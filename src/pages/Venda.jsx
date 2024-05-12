import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import livro1 from '../images/Alma e Coração/Alma e Coração.jpg';
import livro2 from '../images/Ave Cristo/Ave Cristo.jpg';
import livro3 from '../images/Ação e Reação/Ação e Reação - Capa.jpg';
import livro4 from '../images/A Caminho da Luz/A Caminho da Luz.jpg';
import livro5 from '../images/Caminho Espírita/Caminho Espirita.jpg';
import livro6 from '../images/Caminho Verdade e Vida/caminho verdade e vida.jpg';
import livro7 from '../images/Ceifa de Luz/Ceifa de Luz.jpg';
import livro8 from '../images/Cinquenta Anos depois/Cinquenta anos depois.png';
import livro9 from '../images/Entre a Terra e o Céu/Entre a Terra e o Céu.jpg';
import livro10 from '../images/Estamos no Além/Estamos no Além.jpg';
import livro11 from '../images/Claramente Vivos/Claramente Vivos.jpg';
import livro12 from '../images/Contos de Apólogos/Contos de Apólogos.jpg';
import livro13 from '../images/Contos desta e doutra Vida/Contos desta e doutra Vida.jpg';
import livro14 from '../images/Coragem/Coragem.jpg';
import livro15 from '../images/Crônicas de Além-Túmulo/Crônicas de Além-Túmulo.jpg';
import livro16 from '../images/E a vida continua/E a vida continua.jpg';
import { Link,  useLocation } from 'react-router-dom';
const Venda = () => {
  
    const location = useLocation(); // useLocation agora está definido corretamente


    return (
        <div>
            <Navbar />
            <main className="container mx-auto py-8 mt-24 sm:px-4">
                {/* Banner */}
                <div className="text-center mb-8 bg-amber-300">
                    <h1 className="text-3xl font-bold">Vendas e Entregas somente para a cidade de Montes Claros-MG</h1>
                    <p className="text-gray-700">Não perca nossas promoções exclusivas!</p>
                    
                </div>
                 {/* Campo de pesquisa */}
                 {/* <div className="flex justify-end mt-4">
                        <input type="text" placeholder="Pesquisar" className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500" />
                    </div> */}

         {/* Section 1 */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Livro 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro1} alt="Livro 1" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Alma e Coração</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>Alma e Coração lembra com acerto que, no mundo em que vivemos, nossas conquistas em termos espirituais têm de ser feitas no dia-a-dia, paralelamente às conquistas que visam mais diretamente ao progresso material; que solucionando os...</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$52,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>
            {/* Livro 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro2} alt="Livro 2" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Ave, Cristo!</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>A história gira em torno da dolorosa experiência de Quinto Varro, que reencarnou obstinado pela salvação do filho amado e ingrato, que ainda se deixava seduzir pelos espetáculos sangrentos do circo, fiel aos deuses de barro de sua época.</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$70,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>

            {/* Livro 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro3} alt="Livro 3" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Ação e Reação</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>Durante três anos, o Espírito André Luiz permaneceu na Mansão Paz, instituição sob jurisdição da colônia Nosso Lar que atende Espíritos sofredores de regiões próximas à Terra. Acompanhado do amigo Hilário, o autor espiritual conhece...</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$70,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>

            {/* Livro 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro4} alt="Livro 4" className="w-full object-contain sm:h-auto mt-4 " style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">A Caminho da Luz</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>Objetivando orientar o homem de acordo com os desígnios da Misericórdia divina, apresentando reflexões sobre as situações cotidianas à guisa dos ensinamentos e bondade celestes, A caminho da luz é obra merecedora de leitura e estudo ... </p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$77,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>
        </section>

{/* Section 2 */}
<hr className="mt-8 mb-8 mr-4 ml-4"/>
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Livro 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro5} alt="Livro 1" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Caminho Espírita</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>O Caminho Espírita é uma compilação de mensagens que, seguindo as orientações de Emmanuel, funcionam como lembretes valiosos em nossa jornada pelo reino interior da alma.Estas mensagens nos guiam, ajudando-nos a superar dificuldades e...  </p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$40,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>
            {/* Livro 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro6} alt="Livro 2" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Caminho, verdade e vida</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>Emmanuel extrai de conceitos do Cristo, ou de seus colaboradores dIretos, a lição para determinada situação do Espírito nos caminhos da vida de relação. o autor comenta ensinamentos do Evangelho de forma original e atraente, ensinando-nos não apenas a ...</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$60,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>

            {/* Livro 7 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro7} alt="Livro 3" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Ceifa de Luz</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>Este livro apresenta um tesouro de mensagens reconfortantes e diretrizes essenciais, lembrando ao leitor a importância de aproveitar plenamente as experiências diárias em busca da iluminação interior, através do cultivo de sentimentos nobres e do trabalho... </p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$60,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>

            {/* Livro 8 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro8} alt="Livro 4" className="w-full object-contain sm:h-auto mt-4 " style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Cinquenta anos depois</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>Apenas décadas de trabalho árduo e sofrimento podem desfazer os séculos de egoísmo, orgulho e ambição que nos conduziram à injustiça! Após cinquenta anos desde sua encarnação como o senador Publius Lentulus, o Espírito Emmanuel retorna à vida... </p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$60,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>
        </section>

{/* Section 3 */}
<hr className="mt-8 mb-8 mr-4 ml-4"/>
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Livro 9 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro9} alt="Livro 1" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Entre a Terra e o Céu</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>"Quase em todas as páginas desta obra, encontramos a rotina das almas que almejam vencer a si mesmas, utilizando os recursos do tempo para adquirir uma nova e renovada luz." De acordo com a psicografia de Francisco Cândido Xavier, o Espírito André Luiz compartilha... </p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$80,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>
            {/* Livro 10 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro10} alt="Livro 2" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Estamos no Além</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>"Eis aqui, caro leitor, o livro que te apresentamos para tua leitura e reflexão. Que estas páginas repletas de amor e conforto, encontro e consolo, possam te guiar na jornada de renovação pessoal que todos buscamos, sob a proteção de Jesus. São os nossos sinceros votos."...</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$40,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>

            {/* Livro 11 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro11} alt="Livro 3" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Claramente Vivos</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>Esta obra é uma das respostas do Plano Espiritual a muitas das nossas perguntas sobre o tema da desencarnação. Ao percorrer as páginas deste volume, qualquer pessoa sensata reconhecerá que aqueles que são tidos como falecidos continuam, de forma...</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$40,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>

            {/* Livro 12 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro12} alt="Livro 4" className="w-full object-contain sm:h-auto mt-4 " style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Contos e Apólogos</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>O autor espiritual nos convida à leitura de seus contos e parábolas! "Trago apenas as histórias simples e humildes que ouvi de outros viajantes. Receba-as, elas são nossas". Assim, Irmão X apresenta a você, estimado leitor, esta obra que abriga grande sabedoria... </p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$60,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>
        </section>


{/* Section 4 */}
<hr className="mt-8 mb-8 mr-4 ml-4"/>
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Livro 13 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro13} alt="Livro 1" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Contos desta e doutra vida</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>Com narrativas envolventes que retratam exemplos da vida diária, o autor transmite valiosos ensinamentos aos "viajantes da Terra", seja enfrentando pequenos obstáculos, seja refletindo sobre escolhas que conduzam ao sucesso. Em contos simples... </p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$45,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>
            {/* Livro 14 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro14} alt="Livro 2" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Coragem</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>Para uma alma em evolução que ainda somos, este livro pode servir como um guia na formação do homem virtuoso de amanhã. São ensinamentos simples, baseados nos princípios cristãos, que tocam profundamente nossos corações e nos impulsionam a ser pessoas...</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$40,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>

            {/* Livro 15 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro15} alt="Livro 3" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Crônicas de Além-Túmulo</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>O Espírito Humberto de Campos, por meio da psicografia de Chico Xavier, reúne uma série de elucidativas crônicas, abordando temas diversos como longevidade, paz, verdade e justiça, além de retratar figuras como Sócrates, Charles Richet, os apóstolos Pedro...</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$60,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>

            {/* Livro 16 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro16} alt="Livro 4" className="w-full object-contain sm:h-auto mt-4 " style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">E a vida continua</h2>
                    <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>
                    O Espírito André Luiz narra as histórias de Ernesto e Evelina, dois indivíduos doentes que se encontram às vésperas de cirurgias arriscadas. Ele é um pensador livre e experiente, enquanto ela é uma jovem esposa católica devota. Em breve, descobrirão que a doença</p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$71,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>
        </section>



                  {/* Exibição dos resultados da pesquisa */}
                <div className="text-center mt-8">
                    <div className="flex flex-wrap justify-center">
                        <Link to="/venda" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/venda' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>1</Link>
                        <Link to="/Pagina2" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina2' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>2</Link>
                        <Link to="/Pagina3" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina3' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>3</Link>
                        <Link to="/Pagina4" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina4' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>4</Link>
                        <Link to="/Pagina5" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina5' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>5</Link>
                        <Link to="/Pagina2" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 hover:bg-amber-500`}>Próximos</Link>
                    </div>
                </div>


            </main>


            <Footer />
        </div>
    )
}

export default Venda;
