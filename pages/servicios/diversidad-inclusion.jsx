import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SimpleSlider from "../../components/Slider";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'



configureAnchors({offset: 30, scrollDuration: 1000})


const diversidadInclusion = () => {

  const MySwal = withReactContent(Swal)

  const callServices1 = () => {
  Swal.fire({
    title: 'Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y no Discriminación',
    text: 'Certifícate en la Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación.Reconoce a tu empresa como un centro de trabajo que cuenta con prácticas en materia de igualdad laboral y no discriminación,para favorecer el desarrollo integral de las y los trabajadores.',
    imageUrl: '/img/servicios/diversidad-inclusion.jpg',
    imageAlt: 'Custom image',
    confirmButtonText: 'Contactanos',
})
}


  const callServices2 = () => {
  Swal.fire({
    title: 'Norma Oficial Mexicana NOM-035-STPS-2018',
    text: '¡Nos preocupamos por las personas que forman tu empresa! Identificar, analizar y prever factores de riesgo psicosocial en tu empresa y promueve un entorno organizacional favorable para tus trabajadores. Logra la certificación de tu empresa.',
    imageUrl: '/img/servicios/servicios-especializados.jpg',
    imageAlt: 'Custom image',
    confirmButtonText: 'Salir',
})
}
  const callServices3 = () => {
  Swal.fire({
    title: 'Distintivo de Empresa Socialmente Responsable',
    text: 'Adopta los principios de una empresa socialmente responsable como parte de la cultura de tu empresa y como estrategia de negocio generando más competitividad empresarial y un mejor funcionamiento interno de tus trabajadores. Obtén el distintivo de Empresa Socialmente Responsable.',
    imageUrl: '/img/servicios/gestion-recursos.jpg',
    imageAlt: 'Custom image',
    confirmButtonText: 'Salir',
})
}


  return (
    <Layout>
        <Head>
        <title>Addition - Diversidad e Inclusión</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
          <section 
          className="bg-no-repeat bg-cover relative flex items-center px-10"
          style={{
            backgroundImage: `url(/img/servicios/portada-servicios.png)`,
          }}
        >
          <div className="glass font-comm h-auto mt-32 mb-16  m-auto md:ml-[50px]">
            <h2 className="text-gray-700 py-6 text-center text-3xl font-medium">
            Diversidad e Inclusión
            </h2>
            <p className="text-gray-700 text-lg mx-10 text-justify">
              Nuestro compromiso es crear un buen ambiente laboral dentro de las empresas, por lo que implementamos programas de <span className="font-bold">diversidad & inclusión</span>{' '}
              para mejorar la productividad de las organizaciones y el cumplimiento de la normatividad vigente.
              <br />
              Apoyamos a las empresas a implementar mecanismos de denuncia por lo que 
              contamos con un sistema para <span className="font-bold">prevenir, atender y sancionar prácticas de discriminación y violencia laboral. </span>
            </p>
            <a href="#serviciosd">
            <button className="btn bg-[#A036AD] hover:bg-[#a159ab] tex-white px-8 py-4 animate-none mt-8 mb-4 ml-10">
              Conoce más
            </button>
            </a>    
          </div>
        </section>
        <ScrollableAnchor id={'serviciosd'}>
        <section className="bg-gradient-to-tl from-[#5900B1] to-[#FD1593] items-center py-12 flex flex-col justify-center font-comm">
          <h2 className="text-white text-3xl mb-4">Servicios en Diversidad e Inclusión</h2>
          <section className="flex flex-row space-x-12 mt-5">
        <div className="h-[600px] w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg border-gray-200 h-full border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/servicios/diversidad-inclusion.jpg"
                width={1200}
                height={1200}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y no Discriminación<n></n>
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Certifícate en la <span className="font-bold">Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación.</span>
              </p>
              <div className="flex items-center justify-end flex-wrap">                
                  <button className="btn-servicios transition ease-in duration-250"
                  onClick={() => callServices1()}
                  >
                    Conoce más
                  </button>
              </div>
            </div>
          </div>
        </div>
        {/*--------- Segundo servicios -------*/}
        <div className="h-[600px] w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg border-gray-200 h-full border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/servicios/servicios-especializados.jpg"
                width={1200}
                height={1200}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Norma Oficial Mexicana NOM-035-STPS-2018
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Identifica, analiza y prevé <span className="font-bold">factores de riesgo psicosocial</span> en tu empresa y promueve un entorno organizacional favorable para tus trabajadores.
              </p>
              <div className="flex items-center justify-end flex-wrap">
                <Link href="#">
                  <button className="btn-servicios transition ease-in duration-250"
                  onClick={() => callServices2()}
                  >
                    Conoce más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*--------- Tercer servicios -------*/}
        <div className="h-[600px] w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg border-gray-200 h-full border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/servicios/gestion-recursos.jpg"
                width={1200}
                height={1200}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Distintivo de Empresa Socialmente Responsable
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Adopta los principios de una empresa socialmente responsable como parte de la cultura de tu empresa
              </p>
              <div className="flex items-center justify-end flex-wrap">
                <Link href="#">
                  <button className="btn-servicios mt-6 transition ease-in duration-250"
                  onClick={() => callServices3()}
                  >
                    Conoce más
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
            backgroundImage: `url(/img/servicios/servicios-section.png)`,
          }}
      />
      </div>
      <div className="bg-white flex flex-col justify-center space-y-7 items-center w-1/2 font-comm py-12">
        <h2 className="text-[#A036AD] text-2xl w-4/5">
          ¿Tu organización asume las normas sobre diversidad e inclusión?
        </h2>
        <p className="text-black w-4/5">
          Con nuestra fórmula hemos participado en la asesoría y/o certificación de más de 2,879 empresas del sector público y privado. 

          Iniciamos con un <span className="font-bold">diagnóstico gratuito,</span>
          medimos el <span className="font-bold">clima laboral, no discriminación y factores de riesgo psicosocial de tu organización,</span>
          sensibilizamos y capacitamos a todos los integrantes de la empresa, asesoramos y hacemos ajustes en las políticas, procedimientos y estrategias de gestión. 

          Apoyamos a tu empresa a implementar mecanismos de denuncia de <span className="font-bold">discriminación y violencia laboral. </span>


¡Evalúate y certifícate! 
        </p>
        <div className="w-4/5">
        <Link href="/contacto">
          <button className="btn-servicios btn-servicios transition ease-in duration-250">
          Obtén un diagnóstico gratuito
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
        <section className="flex h-[400]">
          <div className="flex w-1/2 justify-center items-center bg-[#A036AD] h-[473px]">
            <h3 className="text-white text-4xl">
              ¿Por qué pensar en <br /><span className="font-bold">
                Diversidad e inclusión?
              </span>
            </h3>
          </div>
          <div className="w-1/2">
          <div className="w-full border-2 bg-white border-gray-200 border-opacity-60 h-500">
            <SimpleSlider/>
          </div>
          </div>
        </section>
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

export default diversidadInclusion
