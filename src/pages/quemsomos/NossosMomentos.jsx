import React, { useState } from 'react';
import Footer from '../../Footer';
import Navbar from '../../Navbar';
import ReactPlayer from 'react-player';
import thumbnailImage1 from './img-nossosmomentos/Snapinsta.app_403962682_316885447826703_1152426539391938943_n_1080.jpg';

export default function NossosMomentos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const videos = [
    { id: 1, url: 'https://youtube.com/shorts/NTFlcvPjEJM', title: 'Aniversário ENREJE 2024', thumbnail: thumbnailImage1 },
    { id: 2, url: 'https://youtube.com/shorts/EIt8_l29nDg', title: 'Jantar ENREJE 2024', thumbnail: thumbnailImage1 },
    { id: 3, url: 'https://www.youtube.com/shorts/wqPV-OorCD8', title: 'Jantar ENREJE 2024', thumbnail: thumbnailImage1 },
    { id: 4, url: 'https://www.youtube.com/shorts/Kq1ypvViKzs', title: 'Abertura do ENREJE 2024', thumbnail: thumbnailImage1 },
    
  ];

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo('');
    setModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-xl font-bold text-center mb-8 mt-28">Nossos Momentos - Galeria de Vídeos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 sm:h-80 md:h-96 object-cover cursor-pointer"
                onClick={() => openModal(video.url)}
              />
            </div>
          ))}
        </div>
      </main>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75">
          <div className="relative w-full max-w-screen-lg h-full">
            <button className="absolute top-4 right-4 text-white z-10" onClick={closeModal}>
              Fechar
            </button>
            <ReactPlayer
              url={selectedVideo}
              width="100%"
              height="100%"
              controls
              playing
              className="react-player"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
