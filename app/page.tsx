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

      <section id="product" className="product py-20">
        <div className="container mx-auto px-4">

        <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <div className="py-8 h-full text-center">
                <i className="fas fa-envelope text-blue-500 mb-2"></i>
                <h4 className="text-white text-lg uppercase">Product Development</h4>
                <hr className="my-4 border-white" />
                <div className="text-white text-opacity-50">
                  <div className="grid grid-cols-3 gap-4 mt-10">
                  <div className="text-white text-opacity-50">
                      <Image
                        className="rounded-lg ring-2 ring-white shadow-xl brightness-125 hover:-translate-y-1 hover:scale-110"
                        src="/images/hardware.jpg"
                        alt="Example prototype product"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="text-white text-opacity-50">
                      <Image
                        className="rounded-lg ring-2 ring-white shadow-xl hover:-translate-y-1 hover:scale-110"
                        src="/images/hardware1.jpg"
                        alt="Testing prototype product"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="text-white text-opacity-50">
                      <Image
                        className="rounded-lg ring-2 ring-white shadow-xl brightness-125 hover:-translate-y-1 hover:scale-110"
                        src="/images/hardware2.jpg"
                        alt="Testing prototype product"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="text-white text-opacity-50">
                      <Image
                        className="rounded-lg ring-2 ring-white shadow-xl brightness-125 hover:-translate-y-1 hover:scale-110"
                        src="/images/hardware3.jpg"
                        alt="Testing prototype product"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="text-white text-opacity-50">
                      <Image
                        className="rounded-lg ring-2 ring-white shadow-xl brightness-125 hover:-translate-y-1 hover:scale-110"
                        src="/images/hardware4.jpg"
                        alt="Testing prototype product"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="text-white text-opacity-50">
                      <Image
                        className="rounded-lg ring-2 ring-white shadow-xl brightness-125 hover:-translate-y-1 hover:scale-110"
                        src="/images/hardware5.jpg"
                        alt="Testing prototype product"
                        width={500}
                        height={500}
                      />
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 px-4">
                <div className="py-8 h-full text-center">
                  <i className="fas fa-mobile-alt text-blue-500 mb-2"></i>
                  <h4 className="text-white text-lg uppercase">Performance Metrics</h4>
                  <hr className="my-4 border-white" />
                  <div className="text-white text-opacity-50">
                    <Image
                      className="rounded-lg ring-2 ring-white hover:scale-125"
                      alt="Comparison of energy cost over a month"
                      src="/images/roi.png"
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="flex p-2">
                    <div className="w-3/4 pr-2">
                      <div className="text-white text-opacity-50 hover:scale-125">
                        <Image
                          className="rounded-lg ring-2 ring-white"
                          alt="Comparison of energy cost over a month"
                          src="/images/roi1.jpg"
                          width={1212}
                          height={226}
                        />
                      </div>
                    </div>
                    <div className="w-1/4">
                      <div className="text-white text-opacity-50">
                        <Image
                          className="rounded-lg ring-2 ring-whiteh over:-translate-y-1 hover:scale-150"
                          alt="Comparison of energy cost over a month"
                          src="/images/roi2.jpg"
                          width={1370}
                          height={652}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
            className="mt-4 mx-auto"
            width={650}
            src="https://s3.ap-southeast-2.amazonaws.com/assets.newenergytech.org.au/uploads/NETCC-Features-01.png"
            alt="Approved Seller Logo"
          />
          </div>

        </div>
      </section>


      <footer className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center text-white text-opacity-50">
          Copyright &copy; BlissAI Pty Ltd is a proud New Energy Tech Approved Seller committed to meeting consumer protection standards throughout your customer journey with us.
          <a href="https://www.newenergytech.org.au/find-an-approved-seller" target="_blank" rel="noopener noreferrer">
          <img
            className="mt-4 mx-auto"
            width={150}
            src="https://s3.ap-southeast-2.amazonaws.com/assets.newenergytech.org.au/uploads/New-Energy-Tech-Approved-Seller-Logo.svg"
            alt="Approved Seller Logo"
          />
          </a>
        </div>
      </footer>


    </>
  )
}
