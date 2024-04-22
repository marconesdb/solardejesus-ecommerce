import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import Logomarca from './assets/Logomarca.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logomarca} alt="Logo" className="h-20 rounded" />
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="block h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Desktop Menu Items */}
          <div className="hidden md:flex md:items-center">
            <Link
              to="/"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange400 hover:text-gray-500 transition duration-300"
            >
              Início
            </Link>

            <Menu as="div" className="relative z-20">
              <Menu.Button className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange400 hover:text-gray-500 transition duration-300">
                Quem Somos
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/nossahistoria"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Nossa História
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/galeria"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Galeria
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/nossosmomentos"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Nossos Momentos
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/nossostrabalhos"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Nossos Trabalhos
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/homenageados"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Homenageados
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>

            <Menu as="div" className="relative z-20">
              <Menu.Button className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange400 hover:text-gray-500 transition duration-300">
                Doutrina Espírita
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/obrasbasicas"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Obras Básicas
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/artigosespiritas"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Artigos Espíritas
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/oracoes"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Orações
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/downloadpalestras"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Downloads
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/vendas"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Venda de Livros
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>

            <Link
              to="/transmissao"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange400 hover:text-gray-500 transition duration-300"
            >
              Transmissão Online
            </Link>

            <Link
              to="/doacoes"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange400 hover:text-gray-500 transition duration-300"
            >
              Doações
            </Link>

            <Link
              to="/contato"
              className="text-gray-800 px-3 py-2 rounded-md text-sm font-medium border-b border-transparent hover:border-orange400 hover:text-gray-500 transition duration-300"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white z-20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Início
            </Link>
            <div>
              <button className="text-black hover:bg-orange400 hover:text-white block w-full px-3 py-2 rounded-md text-base font-medium">
                Quem Somos
              </button>
              <div className="px-2 py-1">
              <Link
                  to="/nossahistoria"
                  className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Nossa História
                </Link>
                <Link
                  to="/galeria"
                  className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Galeria
                </Link>
                <Link
                  to="/nossosmomentos"
                  className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                Nossos Momentos
                </Link>
                <Link
                  to="/nossostrabalhos"
                  className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Nossos Trabalhos
                </Link>
                <Link
                  to="/homenageados"
                  className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Homenageados
                </Link>
              </div>
            </div>
            <div>
              <button className="text-black hover:bg-orange400 hover:text-white block w-full px-3 py-2 rounded-md text-base font-medium">
                Doutrina Espírita
              </button>
              <div className="px-2 py-1">
                <Link
                  to="/obrasbasicas"
                  className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Obras Básicas
                </Link>
                <Link
                  to="/artigosespiritas"
                  className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Artigos Espíritas
                </Link>
                <Link
                  to="/oracoes"
                  className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Orações
                </Link>

                <Link
                  to="/downloadpalestras"
                  className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Downloads
                </Link>
              </div>
            </div>
            <Link
              to="/transmissao"
              className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Transmissões Online
            </Link>
            <Link
              to="/doacoes"
              className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Doações
            </Link>
            <Link
              to="/contato"
              className="text-black hover:bg-orange400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
