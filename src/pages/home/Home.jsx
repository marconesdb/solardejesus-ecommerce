import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import image1 from './img-carousel/Captura de Tela (4035).png'; // Adicione o caminho correto para image1
import image2 from './img-carousel/Captura de Tela (4036).png'; // Adicione o caminho correto para image2
import image3 from './img-carousel/Captura de Tela (4037).png'; // Adicione o caminho correto para image3




import myImage from '../home/img-home/DSCN9271.jpg';
import Banner from '../home/Banner';
import Modal from '../home/Modal';
import Carousel from './Carousel';

export default function Home() {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Altere este valor para ajustar o intervalo de tempo entre os slides (em milissegundos)

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div>
      
      <Navbar />
      <Carousel/>
     
      <Modal />
       <Banner />
      {/* IMG - Oração */}
      <section>
        <h1 className="flex justify-center items-center font-bold text-3xl">Momento de Oração</h1>
        <p className="flex justify-center items-center  text-2xl">Creche - Solar de Jesus</p>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <img src={myImage} alt="Imagem" className="max-w-full h-auto" />
          </div>
        </div>
      </section>
      {/* Fim - IMG Oração */}
      
      <Footer />
    </div>
  );
}
