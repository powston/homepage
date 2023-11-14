import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white min-h-14">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
              <div className="text-xl font-semibold text-gray-700 hover:text-gray-900">POWSTON</div>
              
              <button className="text-xs p-3 text-teal-500 border border-teal-500">
                <FontAwesomeIcon icon={faBars} className="text-xl text-gray-500" />
              </button>

              <div className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6">
                  <ul className="lg:flex">
                      <li className="nav-item">
                          <a className="text-black font-bold py-3" href="mailto:ian@blissai.com">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>


      <header className="masthead relative w-full auto min-h-[35rem] pt-36 pb-36">
        <div className="relative w-full auto min-h-[35rem] pt-60 pb-60 bg-cover bg-center">
          <div className="mx-auto text-center">
            <h1 className="font-bold mx-auto my-0 uppercase bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent text-8xl">
              <span className="pow">POW</span><span className="ston">STON</span>
            </h1>
            <h2 className="mx-auto mt-2 mb-5 max-w-[60rem] text-3xl font-bold text-gray-800">
            CHEAPER POWER FOR YOUR HOME
            </h2>
          </div>
        </div>
      </header>
      
      <section id="contact" className="contact py-20">
        <div className="container mx-auto px-4">

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <div className="py-8 h-full text-center">
                <i className="fas fa-map-marked-alt text-blue-500 mb-2"></i>
                <h4 className="text-white text-lg uppercase">Address</h4>
                <hr className="my-4 border-white" />
                <div className="text-white text-opacity-50">Paddington Qld 4064</div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <div className="py-8 h-full text-center">
                <i className="fas fa-envelope text-blue-500 mb-2"></i>
                <h4 className="text-white text-lg uppercase">Email</h4>
                <hr className="my-4 border-white" />
                <div className="text-white text-opacity-50">
                  <a href="#" className="hover:text-blue-300">ian@blissai.com</a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-4">
              <div className="py-8 h-full text-center">
                <i className="fas fa-mobile-alt text-blue-500 mb-2"></i>
                <h4 className="text-white text-lg uppercase">Phone</h4>
                <hr className="my-4 border-white" />
                <div className="text-white text-opacity-50">+61 (0408) 740 869</div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <footer className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center text-white text-opacity-50">
          Copyright &copy; BlissAI Pty Ltd 2023
        </div>
      </footer>

    </>
  )
}
