import Navbar from '../../Navbar';
import Footer from '../../Footer';
import SemanaEspirita from '../home/semanaEspirita';
import myImage from '../home/img-home/DSCN9271.jpg';
import Banner from '../home/Banner';
import Modal from '../home/Modal';
import Carousel from './Carousel';
import EvangelizacaoInfantil from './EvangelizacaoInfantil';
import DailyQuote from './DailyQuote';


export default function Home() {
  
  return (
    <div>
      <Navbar />
      <Carousel/>
      <DailyQuote />
      <SemanaEspirita/>
      <EvangelizacaoInfantil/>
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
