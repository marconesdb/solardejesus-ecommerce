import cartazSemanaEspirita from './semana-espirita/Cartaz-Solar de Jesus.png';
import Oficina from '../../../src/pages/img-cartaz-palestras/Oficina.png';

const SemanaEspirita = () => {
  return (
    <div className="flex flex-col mt-12 md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-12">
      <div className="w-full max-w-[calc(100%+10px)] sm:max-w-sm md:max-w-lg lg:max-w-xl">
        <img
          src={cartazSemanaEspirita}
          alt="Promo Image"
          className="w-full rounded-lg shadow-md h-full"
        />
      </div>

      {/* Comentado: Código para o iframe, caso precise ser reinserido */}
      {/* 
      <div className="w-full max-w-[calc(100%+10px)] sm:max-w-sm md:max-w-lg lg:max-w-xl">
        <div className="aspect-w-16 aspect-h-9 w-full rounded-lg shadow-md">
          <iframe
            width="880"
            height="495"
            src="https://www.youtube.com/embed/tLxtodVjA2s?si=HzZ-f7RnwTLksAWi"
            title="Semana Espírita de Montes Claros - 2024"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe> 
        </div>
      </div> 
      */}

      <div className="w-full max-w-[calc(100%+10px)] sm:max-w-sm md:max-w-lg lg:max-w-xl">
        <img
          src={Oficina}
          alt="Promo Image"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default SemanaEspirita;
