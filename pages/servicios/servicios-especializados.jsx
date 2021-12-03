import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: -45, scrollDuration: 1000})

const serviciosEspecializados = () => {
  const MySwal = withReactContent(Swal)

  return (
    <Layout>
        <Head>
        <title>Addition - Servicios Especializados</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
          <section 
          className="bg-no-repeat bg-cover relative flex items-center px-10"
          style={{
            backgroundImage: `url(/img/especializados/portada-especializados.png)`,
          }}
        >
          <div className="glass font-comm h-auto my-32  m-auto md:ml-[50px]">
            <h2 className="text-gray-700 py-12 text-center text-3xl font-medium">
            Servicios Especializados
            </h2>
            <p className="text-gray-700 text-lg mx-10 text-justify">
              ¡En Addition evolucionamos a un modelo de <span className="font-bold">servicios especializados!</span>

              Estamos autorizados y cumplimos con todos los requisitos para ofrecer <span className="font-bold">Servicios Especializados</span> enfocados en enriquecer al personal de tu empresa para que logres alcanzar objetivos administrativos, comerciales y de innovación.
            </p>
            <a href="#serviciose">
            <button className="btn bg-[#FE6472] hover:bg-opacity-90 border-[#FE6472] text-white px-8 py-4 animate-none mt-8 mb-4 ml-10">
              Conoce más
            </button>
            </a>
          </div>
        </section>
        <ScrollableAnchor id={"serviciose"}>
        <section className="bg-gradient-to-l from-[#FD1593] to-[#FFFF33] items-center py-12 flex flex-col justify-center font-comm">
          <h2 className="text-white text-3xl mb-4">Servicios Especializados</h2>
          <section className="flex flex-row space-x-12 mt-5">
        <div className="h-auto w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/especializados/manos.png"
                width={600}
                height={400}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Addition Back Office Administrativo
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Ofrecemos <span className="font-bold">soluciones profesionales</span> que optimizan los procesos contables, legales, comerciales y administrativos de tu empresa para mejorar la productividad y cumplimiento de los objetivos de esta.
              </p>
              <div className="flex items-center justify-end flex-wrap">
                <Link href="/contacto">
                  <button className="btn-servicios bg-[#FE6472] hover:text-[#FE6472] border-[#FE6472] transition ease-in duration-250"
                  >
                    Contáctanos
                  </button>
                </Link>   
              </div>
            </div>
          </div>
        </div>
        {/*--------- Segundo servicios -------*/}
        <div className="h-auto w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/especializados/personas.png"
                width={600}
                height={400}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Addition IT Technology
              </h3>
              <p className="leading-relaxed mb-3.5 text-justify pb-6">
                Contamos con un <span className="font-bold">soporte profesional especializado</span> en programación, implementación, diseño, asesoría y servicios de internet.
              </p>
              <div className="flex items-center justify-end flex-wrap">
                <Link href="/contacto">
                  <button className="btn-servicios bg-[#FE6472] hover:text-[#FE6472] border-[#FE6472] transition ease-in duration-250"
                  >
                    Contáctanos
                  </button>
                </Link>   
              </div>
            </div>
          </div>
        </div>
        {/*--------- Tercer servicios -------*/}
        <div className="h-auto w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/especializados/sonrisa.png"
                width={600}
                height={400}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Addition personal de Marketing
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Brindamos <span className="font-bold">soluciones especializadas</span> en el área de mercadotecnia, publicidad y actividades relacionadas, ayudando a nuestros clientes a impulsar sus ventas y hacer crecer tu negocio.
              </p>
              <div className="flex items-center justify-end flex-wrap">
                <Link href="/contacto">
                  <button className="btn-servicios bg-[#FE6472] hover:text-[#FE6472] border-[#FE6472] transition ease-in duration-250"
                  >
                    Contáctanos
                  </button>
                </Link>   
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
      </ScrollableAnchor>
      <section className="h-[400px] flex flex-row">
      <div className="w-full md:w-1/2">
        <div
          className="bg-no-repeat bg-cover relative h-[400px] flex items-center"
          style={{
            backgroundImage: `url(/img/especializados/especializado-equipo.png)`,
          }}
      />
      </div>
      <div className="bg-white flex flex-col justify-center space-y-7 items-center w-1/2 font-comm">
        <h2 className="text-[#FE6472] text-2xl w-4/5">
          Servicios Especializados
        </h2>
        <p className="text-black w-4/5">
          En Addition pensamos en ti y en las necesidades específicas de tu empresa, por eso, evolucionamos y te ofrecemos un modelo de <span className="font-bold">soporte profesional especializado</span> que ayude a tu organización a gestionar áreas y procesos de suma importancia en tu empresa para que tú puedas enfocarte en el crecimiento y desarrollo de esta.
        </p>
        <div className="w-4/5">
        <Link href="/contacto">
          <button className="btn-servicios border-[#FE6472] hover:text-[#FE6472] bg-[#FE6472] transition ease-in duration-250">
          ¡Contáctanos!
        </button>
        </Link>
        
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
        <section className="bg-[#EDEDED] flex flex-col cursor-pointer">
          <div className="px-10 py-10 font-comm text-xl">
            <h3>
              Conoce mas de este y otros temas en nuestro blog
            </h3>
          </div>
          <Link href="/blog/alianza" >
          <div className="p-10">
            <div className="grid grid-cols-4 grid-rows-1 gap-4 gap-x-4 ">
            <div className="bg-white h-auto w-full shadow-lg flex flex-col  items-center space-y-4 hover:scale-105 hover:shadow-2xl p-3 rounded-sm">
              <div>
                <Image
                src="/img/home/alianzas-casos-de-exito.jpg"
                width={400}
                height={200}
                className="object-cover object-bottom rounded-lg"
                alt="Aqui va el alt de la imagen"
                />
              </div>
              <h3 className="w-full">Addition y Proanalytics unen esfuerzos por la Diversidad e Inclusión</h3>
              <div className="justify-end w-full">
                <p className="w-full text-sm text-[#69A3A2] pt-24">
                  2, Diciembre 2021
                </p>
              </div>
            </div>
            </div>
          </div>
          </Link>
        </section>
      </main>
    </Layout>
  )
}

export default serviciosEspecializados
