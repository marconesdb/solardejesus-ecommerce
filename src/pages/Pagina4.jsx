import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import livro1 from '../images/Alma e Coração/Alma e Coração.jpg';
import livro2 from '../images/Ave Cristo/Ave Cristo.jpg';
import livro3 from '../images/Ação e Reação/Ação e Reação - Capa.jpg';
import livro4 from '../images/A Caminho da Luz/A Caminho da Luz.jpg';
import { Link,  useLocation } from 'react-router-dom';
const Pagina4 = () => {
  
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
                    <p className="text-gray-700">Alma e Coração lembra com acerto que, no mundo em que vivemos, nossas conquistas em termos espirituais têm de ser feitas no dia-a-dia, paralelamente às conquistas que visam mais diretamente ao progresso material; que solucionando os problemas internos...</p>
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
                    <p className="text-gray-700">A história gira em torno da dolorosa experiência de Quinto Varro, que reencarnou obstinado pela salvação do filho amado e ingrato, que ainda se deixava seduzir pelos espetáculos sangrentos do circo, fiel aos deuses de barro de sua época.</p>
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
                    <p className="text-gray-700">Durante três anos, o Espírito André Luiz permaneceu na Mansão Paz, instituição sob jurisdição da colônia Nosso Lar que atende Espíritos sofredores de regiões próximas à Terra. Acompanhado do amigo Hilário, o autor espiritual conhece...</p>
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
                    <p className="text-gray-700">Objetivando orientar o homem de acordo com os desígnios da Misericórdia divina, apresentando reflexões sobre as situações cotidianas à guisa dos ensinamentos e bondade celestes, A caminho da luz é obra merecedora de leitura e estudo ... </p>
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
            {/* Livro 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                <img src={livro1} alt="Livro 1" className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">Alma e Coração</h2>
                    <p className="text-gray-700">Alma e Coração lembra com acerto que, no mundo em que vivemos, nossas conquistas em termos espirituais têm de ser feitas no dia-a-dia, paralelamente às conquistas que visam mais diretamente ao progresso material; que solucionando os problemas internos...</p>
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
                    <p className="text-gray-700">A história gira em torno da dolorosa experiência de Quinto Varro, que reencarnou obstinado pela salvação do filho amado e ingrato, que ainda se deixava seduzir pelos espetáculos sangrentos do circo, fiel aos deuses de barro de sua época.</p>
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
                    <p className="text-gray-700">Durante três anos, o Espírito André Luiz permaneceu na Mansão Paz, instituição sob jurisdição da colônia Nosso Lar que atende Espíritos sofredores de regiões próximas à Terra. Acompanhado do amigo Hilário, o autor espiritual conhece...</p>
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
                    <p className="text-gray-700">Objetivando orientar o homem de acordo com os desígnios da Misericórdia divina, apresentando reflexões sobre as situações cotidianas à guisa dos ensinamentos e bondade celestes, A caminho da luz é obra merecedora de leitura e estudo ... </p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="font-bold text-xl">R$77,00</span>
                        <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                    </div>
                </div>
            </div>
        </section>






                  {/* Exibição dos resultados da pesquisa */}
                <div className="text-center mt-8">
                <div className="flex flex-wrap justify-center">
                        <Link to="/Pagina3" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 hover:bg-amber-500`}>Anterior</Link>
                        <Link to="/venda" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/venda' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>1</Link>
                        <Link to="/Pagina2" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina2' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>2</Link>
                        <Link to="/Pagina3" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina3' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>3</Link>
                        <Link to="/Pagina4" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina4' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>4</Link>
                        <Link to="/Pagina5" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 ${location.pathname === '/Pagina5' ? 'bg-amber-500 text-white' : 'hover:bg-amber-500'}`}>5</Link>
                        <Link to="/Pagina5" className={`rounded-full border-2 border-gray-500 px-4 py-2 m-1 hover:bg-amber-500`}>Próximos</Link>
                    </div>
                </div>


            </main>


            <Footer />
        </div>
    )
}

export default Pagina4;
