import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";


const index = () => {
  return (
    <Layout>
        <Head>
        <title>Addition - Servicios</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
          <section 
          className="bg-no-repeat bg-cover relative flex items-center"
          style={{
            backgroundImage: `url(/img/servicios/portada-servicios.png)`,
          }}
        >
          <div className="glass font-comm h-auto my-24 py-8 m-auto md:ml-[50px]">
            <h2 className="text-gray-700 py-12 text-center text-3xl font-medium">
            Diversidad e inclusión
            </h2>
            <p className="text-gray-700 text-lg mx-10 text-justify">
              Más de 20 años de experiencia haciendo trascender a empresas
              nacionales y transnacionales, a través de la implementación de
              sistemas que promueven la
            </p>
            <button className="btn bg-[#A036AD] tex-white px-8 py-4 animate-none mt-8 ml-10">
              Conoce más
            </button>
          </div>
        </section>
        <section className="bg-gradient-to-tl from-[#5900B1] to-[#FD1593] items-center py-12 flex flex-col justify-center font-comm">
          <h2 className="text-white text-3xl mb-4">Nuestros Servicios</h2>
          <section className="flex flex-row space-x-12 mt-5">
        <div className="h-[596px] w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/servicios/diversidad-inclusion.jpg"
                width={1200}
                height={1200}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Diversidad e inclusion
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Con la asesoría de nuestro Coach, podrás elegir entre uno o
                varios temas de nuestro catálogo de servicios ajustándose a un
                tiempo y presupuesto objetivo
              </p>
              <div className="flex items-center flex-wrap">
                <Link href="#">
                  <button className="inline-flex text-brink-pink-500 font-bold border-2 border-brink-pink-500  py-2 px-6 focus:outline-none hover:bg-brink-pink-500 hover:text-white rounded text-lg transition ease-in duration-250">
                    Conoce más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*--------- Segundo servicios -------*/}
        <div className="h-[596px] w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/servicios/servicios-especializados.jpg"
                width={1200}
                height={1200}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Servicios Especializados
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Con la asesoría de nuestro Coach, podrás elegir entre uno o
                varios temas de nuestro catálogo de servicios ajustándose a un
                tiempo y presupuesto objetivo
              </p>
              <div className="flex items-center flex-wrap">
                <Link href="#">
                  <button className="inline-flex text-brink-pink-500 font-bold border-2 border-brink-pink-500  py-2 px-6 focus:outline-none hover:bg-brink-pink-500 hover:text-white rounded text-lg transition ease-in duration-250">
                    Conoce más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*--------- Tercer servicios -------*/}
        <div className="h-[596px] w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/servicios/gestion-recursos.jpg"
                width={1200}
                height={1200}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Gestión de recursos humanos
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Con la asesoría de nuestro Coach, podrás elegir entre uno o
                varios temas de nuestro catálogo de servicios ajustándose a un
                tiempo y presupuesto objetivo
              </p>
              <div className="flex items-center flex-wrap">
                <Link href="#">
                  <button className="inline-flex text-brink-pink-500 font-bold border-2 border-brink-pink-500  py-2 px-6 focus:outline-none hover:bg-brink-pink-500 hover:text-white rounded text-lg transition ease-in duration-250">
                    Conoce más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
      <section className="h-[400px] flex flex-row">
      <div className="w-full md:w-1/2">
        <div
          className="bg-no-repeat bg-cover relative h-[400px] flex items-center"
          style={{
            backgroundImage: `url(/img/nosotros/lihuba-nosotros.png)`,
          }}
      />
      </div>
      <div className="bg-[#EA5076] flex flex-col justify-center space-y-7 items-center w-1/2 font-comm">
        <h2 className="text-white text-2xl w-4/5">
          Acerca de Lihuba Vences
        </h2>
        <p className="text-white w-4/5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          Amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
        </p>
        <div className="w-4/5">
        <button className="btn bg-white hover:bg-gray-200 text-[#EA5076] py-3">
          Ponte en contacto conmigo
        </button>
        </div>
      </div>
    </section>
    <div className="w-full bg-gray-200 font-comm">
          <div className="flex flex-wrap text-center font-jost divide-x-2 divide-white">
            <div className="py-10 w-1/3">
              <h3 className="title-font font-bold md:text-6xl text-3xl text-black">
                +12
              </h3>
              <p className="leading-relaxed font-regular text-base text-black">
                AÑOS DE EXPERIENCIA
              </p>
            </div>
            <div className="py-10 w-1/3">
              <h3 className="title-font font-bold md:text-6xl text-3xl text-black">
                +100
              </h3>
              <p className="leading-relaxed font-regular text-base text-black">
                Clientes Satisfechos
              </p>
            </div>
            <div className="py-10 w-1/3">
              <h3 className="title-font font-bold md:text-6xl text-3xl text-black">
                +80
              </h3>
              <p className="leading-relaxed font-regular text-base text-black">
                Empresas impactadas
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default index
