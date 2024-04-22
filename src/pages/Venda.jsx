import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.png';
import img5 from '../images/img5.jpg';
import livro2Img1 from '../images/img1.jpg';
import livro2Img2 from '../images/img2.jpg';
import livro2Img3 from '../images/img3.jpg';
import livro1 from '../images/img1.jpg';
import livro2 from '../images/img2.jpg';
const Venda = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [bookImages, setBookImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (book) => {
        setModalOpen(true);
        if (book === 'livro1') {
            setBookImages([img1, img2, img3, img4, img5]);
        } else if (book === 'livro2') {
            setBookImages([livro2Img1, livro2Img2, livro2Img3]);
        }
        setCurrentImageIndex(0);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentImageIndex(index)
    };

    return (
        <div>
            <Navbar />
            <main className="container mx-auto py-8 mt-24 sm:px-4">
                {/* Banner */}
                <div className="text-center mb-8 bg-amber-300">
                    <h1 className="text-3xl font-bold">Vendas e Entregas somente para a cidade de Montes Claros-MG</h1>
                    <p className="text-gray-700">Não perca nossas promoções exclusivas!</p>
                </div>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Livro 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                        <img src={livro1} alt="Livro 1" className="w-full h-90 object-cover cursor-pointer"
                            onClick={() => openModal('livro1')} />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Título do Livro 1</h2>
                            <p className="text-gray-700">Descrição curta do livro 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="font-bold text-xl">R$29,99</span>
                                <a href="/Formulario_Vendas" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</a>
                            </div>
                        </div>
                    </div>
                    {/* Livro 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mr-4 ml-4">
                        <img src={livro2} alt="Livro 2" className="w-full h-90 object-cover cursor-pointer"
                            onClick={() => openModal('livro2')} />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">Título do Livro 2</h2>
                            <p className="text-gray-700">Descrição curta do livro 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="font-bold text-xl">R$24,99</span>
                                <a href="/Formulario_Vendas" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">Comprar Agora</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-80 mx-4 max-h-screen">
                        <div className="relative">
                            <button className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900" onClick={closeModal}>
                                &#10006; {/* Caractere Unicode para o ícone de "X" */}
                            </button>
                            <div className="p-8 max-h-full overflow-y-auto">
                                {/* Exibição das imagens do livro */}
                                <Slider {...settings}>
                                    {bookImages.map((imageObj, index) => (
                                        <div key={index} className="flex justify-center">
                                            <img src={imageObj} alt={`Livro ${index + 1}`} className="max-h-96" />
                                        </div>
                                    ))}
                                </Slider>
                                <p className="text-gray-700 mt-2 text-center">{currentImageIndex + 1} de {bookImages.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default Venda;
