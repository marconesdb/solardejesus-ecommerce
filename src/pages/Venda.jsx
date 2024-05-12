import React, { useState } from 'react';
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
import { Link, useLocation } from 'react-router-dom';

const Venda = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation(); // useLocation agora está definido corretamente

    // Função para filtrar os livros com base no termo de pesquisa para a Section 1
    const filteredBooks = [
        { image: livro1, title: 'Alma e Coração', description: 'Alma e Coração lembra com acerto que, no mundo em que vivemos, nossas conquistas em termos espirituais têm de ser feitas no dia-a-dia, paralelamente às conquistas que visam mais diretamente ao progresso material; que solucionando os...', price: '52,00' },
        { image: livro2, title: 'Ave, Cristo!', description: 'A história gira em torno da dolorosa experiência de Quinto Varro, que reencarnou obstinado pela salvação do filho amado e ingrato, que ainda se deixava seduzir pelos espetáculos sangrentos do circo, fiel aos deuses de barro de sua época.', price: '70,00' },
        { image: livro3, title: 'Ação e Reação', description: 'Durante três anos, o Espírito André Luiz permaneceu na Mansão Paz, instituição sob jurisdição da colônia Nosso Lar que atende Espíritos sofredores de regiões próximas à Terra. Acompanhado do amigo Hilário, o autor espiritual conhece...', price: '70,00' },
        { image: livro4, title: 'A Caminho da Luz', description: 'Objetivando orientar o homem de acordo com os desígnios da Misericórdia divina, apresentando reflexões sobre as situações cotidianas à guisa dos ensinamentos e bondade celestes, A caminho da luz é obra merecedora de leitura e estudo ...', price: '77,00' },
        // Adicione os demais livros aqui
    ].filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Função para filtrar os livros com base no termo de pesquisa para a Section 2
    const filteredBooks2 = [
        { image: livro5, title: 'Caminho Espírita', description: 'O Caminho Espírita é uma compilação de mensagens que, seguindo as orientações de Emmanuel, funcionam como lembretes valiosos em nossa jornada pelo reino interior da alma.Estas mensagens nos guiam, ajudando-nos a superar dificuldades e...', price: '40,00' },
        { image: livro6, title: 'Caminho, verdade e vida', description: 'Emmanuel extrai de conceitos do Cristo, ou de seus colaboradores diretos, a lição para determinada situação do Espírito nos caminhos da vida de relação. o autor comenta ensinamentos do Evangelho de forma original e atraente, ensinando-nos não apenas a ...', price: '60,00' },
        { image: livro7, title: 'Ceifa de Luz', description: 'Este livro apresenta um tesouro de mensagens reconfortantes e diretrizes essenciais, lembrando ao leitor a importância de aproveitar plenamente as experiências diárias em busca da iluminação interior, através do cultivo de sentimentos nobres e do trabalho...', price: '60,00' },
        { image: livro8, title: 'Cinquenta anos depois', description: 'Apenas décadas de trabalho árduo e sofrimento podem desfazer os séculos de egoísmo, orgulho e ambição que nos conduziram à injustiça! Após cinquenta anos desde sua encarnação como o senador Publius Lentulus, o Espírito Emmanuel retorna à vida...', price: '60,00' },
        // Adicione os demais livros aqui
    ].filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Função para filtrar os livros com base no termo de pesquisa para a Section 3
    
    const filteredBooks3 = [
        // Adicione os livros para a Section 3 aqui

        { image: livro9, title: 'Entre a Terra e o Céu', description: 'Quase em todas as páginas desta obra, encontramos a rotina das almas que almejam vencer a si mesmas, utilizando os recursos do tempo para adquirir uma nova e renovada luz." De acordo com a psicografia de Francisco Cândido Xavier, o Espírito André Luiz compartilha...', price: '80,00' },
        { image: livro10, title: 'Estamos no Além', description: 'Eis aqui, caro leitor, o livro que te apresentamos para tua leitura e reflexão. Que estas páginas repletas de amor e conforto, encontro e consolo, possam te guiar na jornada de renovação pessoal que todos buscamos, sob a proteção de Jesus. São os nossos sinceros votos...', price: '40,00' },
        { image: livro11, title: 'Claramente Vivos', description: 'Esta obra é uma das respostas do Plano Espiritual a muitas das nossas perguntas sobre o tema da desencarnação. Ao percorrer as páginas deste volume, qualquer pessoa sensata reconhecerá que aqueles que são tidos como falecidos continuam, de forma...', price: '40,00' },
        { image: livro12, title: 'Contos de Apólogos', description: 'O autor espiritual nos convida à leitura de seus contos e parábolas! "Trago apenas as histórias simples e humildes que ouvi de outros viajantes. Receba-as, elas são nossas". Assim, Irmão X apresenta a você, estimado leitor, esta obra que abriga grande sabedoria...', price: '60,00' },
        // Adicione os demais livros aqui
    ].filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Função para filtrar os livros com base no termo de pesquisa para a Section 4
    const filteredBooks4 = [
        // Adicione os livros para a Section 4 aqui
        { image: livro13, title: 'Contos desta e doutra Vida', description: 'Com narrativas envolventes que retratam exemplos da vida diária, o autor transmite valiosos ensinamentos aos "viajantes da Terra", seja enfrentando pequenos obstáculos, seja refletindo sobre escolhas que conduzam ao sucesso. Em contos simples...', price: '45,00' },
        { image: livro14, title: 'Coragem', description: 'Para uma alma em evolução que ainda somos, este livro pode servir como um guia na formação do homem virtuoso de amanhã. São ensinamentos simples, baseados nos princípios cristãos, que tocam profundamente nossos corações e nos impulsionam a ser pessoas...', price: '40,00' },
        { image: livro15, title: 'Crônicas de Além-Túmulo', description: 'O Espírito Humberto de Campos, por meio da psicografia de Chico Xavier, reúne uma série de elucidativas crônicas, abordando temas diversos como longevidade, paz, verdade e justiça, além de retratar figuras como Sócrates, Charles Richet, os apóstolos Pedro...', price: '60,00' },
        { image: livro16, title: 'E a vida continua', description: ' O Espírito André Luiz narra as histórias de Ernesto e Evelina, dois indivíduos doentes que se encontram às vésperas de cirurgias arriscadas. Ele é um pensador livre e experiente, enquanto ela é uma jovem esposa católica devota. Em breve, descobrirão que a doença...', price: '71,00' },
        // Adicione os demais livros aqui
    ].filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

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
                <div className="flex justify-end mt-4">
                    <p className=' px-4 py-2 mb-4 font-bold '>Pesquisar :</p>
                    <input
                        type="text"
                        placeholder="Digite o nome do Livro"
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 mb-4  mr-4"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Section 1 */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredBooks.map((book, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                            <img src={book.image} alt={book.title} className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                                <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>{book.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="font-bold text-xl">R${book.price}</span>
                                    <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Section 2 */}
                <hr className="mt-8 mb-8 mr-4 ml-4"/>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredBooks2.map((book, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                            <img src={book.image} alt={book.title} className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                                <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>{book.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="font-bold text-xl">R${book.price}</span>
                                    <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Section 3 */}
                <hr className="mt-8 mb-8 mr-4 ml-4"/>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredBooks3.map((book, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                            <img src={book.image} alt={book.title} className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                                <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>{book.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="font-bold text-xl">R${book.price}</span>
                                    <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Section 4 */}
                <hr className="mt-8 mb-8 mr-4 ml-4"/>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredBooks4.map((book, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                            <img src={book.image} alt={book.title} className="w-full object-contain sm:h-auto mt-4" style={{ height: '450px' }} />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                                <p className="text-gray-700" style={{ height: '170px', overflow: 'hidden' }}>{book.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="font-bold text-xl">R${book.price}</span>
                                    <Link to="/comprovante" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</Link>
                                </div>
                            </div>
                        </div>
                    ))}
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
    );
};

export default Venda;
