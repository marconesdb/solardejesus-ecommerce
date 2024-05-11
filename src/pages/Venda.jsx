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
