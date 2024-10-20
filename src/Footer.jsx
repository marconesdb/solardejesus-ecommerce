import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'; 

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual

  return (
    <footer className="bg-white text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Texto de direitos reservados */}
          <p className="text-center md:text-left md:ml-4 mb-4 md:mb-0">
            &copy; Instituição Espírita de Caridade Solar de Jesus - {currentYear} Todos os direitos reservados
          </p>

          {/* Informações de contato */}
          <div className="text-center md:text-left">
            <p className="mb-2">
              Endereço: Av. Leonel Beirão de Jesus, 1555, Bairro: Sumaré
              <br />
              CEP: 39402-547 - Montes Claros - MG/BR
            </p>
            <p>CPNJ 21.355.599/0001-56</p>
            <p>Telefone: (38) 3214-2878</p>
            <p>Alfredo Lorenço: (38) 99979-9996</p>
            <p>Cláudio Mendes: (38) 99166-0454</p>
            {/* Adição de quebra automática de linha para o e-mail */}
            <p className="break-words">
              <a href="mailto:instituicaoespiritadecaridadesolardejesus@solardejesus.com.br">
                instituicaoespiritadecaridadesolardejesus@solardejesus.com.br
              </a>
            </p>

            {/* Ícones de redes sociais */}
            <div className="flex justify-center md:justify-start mt-4">
              <a href="https://www.facebook.com/solardejesus/" target='_blank' className="text-gray-400 hover:text-blue-500 mr-4">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/voluntariasdaalegria1/" target='_blank' className="text-gray-400 hover:text-pink-500 mr-4">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/5538999799996" target='_blank' className="text-gray-400 hover:text-green-500">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
