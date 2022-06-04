import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Servicios from "../components/Servicios";
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {

  const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "",
      slidesToShow: 1,
      speed: 500,
      swipeToSlide: true,
  }

  configureAnchors({offset: 28, scrollDuration: 1000})
  return (
    <Layout>
      <Head>
        <title>Addition - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div 
          className="bg-no-repeat bg-cover relative h-screen flex items-center"
          style={{
            backgroundImage: `url(/img/portada/imagen-portada.png)`,
          }}
        >
          <section className="glass font-comm h-[500px] m-auto md:ml-[50px]">
            <h2 className="text-gray-700 pt-8 pb-6 text-center text-3xl font-medium">
              La diversidad e inclusión enriquece a tu organización{" "}
            </h2>
            <h3 className="text-center text-xl">¿Tu organización promueve ambientes de diversidad e inclusión?</h3> <br />
            <p className="text-gray-700 text-lg mx-10 text-justify">
              Más de 20 años de experiencia haciendo trascender a empresas
              nacionales y transnacionales, a través de la implementación de
              sistemas que promueven la{" "}
              <span className="font-bold">
                inclusión y permanencia laboral.
              </span>
              <br /> <br />
              Somos la primera empresa de consultoría en{" "}
              <span className="font-bold">Recursos Humanos </span>en obtener la
              certificación en la{" "} <br />
              <span className="font-bold">
                Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación.
              </span>
            </p>
            <a href="#servicios">
              <button className="btn px-8 py-4 animate-none mt-8 ml-10">
              Conoce más
            </button>
            </a>
          </section>
        </div>
        <section className="bg-white h-auto p-8 flex flex-col md:flex-row font-comm pt-24">
          <div className="w-full md:w-1/2 overflow-hidden self-end -m-10">
            <Image
              src="/img/home/lihuba-home.png"
              width={600}
              height={600}
              className="absolute origin-bottom-left left-[300px] top-[400px]"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-[#EA5076] font-regular mb-4 self-start">
              {" "}
              Bienvenido/a a <span className="font-bold">Addition RH</span>
            </h2>
            <p className="text-base text-gray-600">
              Sabemos que las personas que conforman tu empresa son cruciales
              para su crecimiento. <br /> <br /> Estamos comprometidos a
              ayudarte con la{" "}
              <span className="font-bold">
                motivación, retención y desarrollo de tu equipo de trabajo
              </span>{" "}
              basado en una{" "}
              <span className="font-bold">cultura de respeto</span> y de{" "}
              <span className="font-bold">diversidad e inclusión</span> para el
              crecimiento de tu empresa. <br />
              <br /> Addition ocupa el lugar 13 a nivel nacional dentro de las
              50 mejores empresas de consultoría en{" "}
              <span className="font-bold">Recursos Humanos,</span> de acuerdo
              con el ranking de la Revista Consultoría y el lugar No.40 de las
              mejores empresas de{" "}
              <span className="font-bold">
                consultoría Administrativa y de Gestión.
              </span>{" "}
              <br /> <br />
              ¡Conoce más de nosotros!
            </p>
          </div>
        </section>
        <ScrollableAnchor id={'servicios'}>
        <section className="bg-[#EA5076] items-center py-12 flex flex-col justify-center font-comm">
          <h2 className="text-white text-3xl mb-4">Nuestras Soluciones </h2>
          <Servicios />
        </section>
        </ScrollableAnchor>
        {/* Seccion de metodologia */}
        <section className="bg-white h-auto p-8 flex flex-col md:flex-row font-comm px-10 ">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
            <h2 className="text-3xl text-[#9825A6] font-bold mb-4 self-start">
              {" "}
              ¡Nos preocupamos por las personas <br />
              <span>que forman tu empresa!</span>
            </h2><br />
            <p className="text-base text-gray-600 w-4/5 py-3">
              Con más de 20 años de experiencia, hemos ayudado a empresas nacionales y transnacionales, a través de la implementación de sistemas que promueven la <span className="font-bold"> inclusión y permanencia laboral </span> ofreciendo soluciones a la medida de cada uno de nuestros clientes. <br /> <br />
              Con nuestra formula hemos participado en asesoría, formación, y/o certificación de más de 2,879 empresas del sector público y privado. <br /> <br />
              Siendo “Agente Capacitador” en temas de <span className="font-bold"> desarrollo, derechos humanos, hostigamiento y acoso, igualdad laboral, violencia laboral y no discriminación </span> ante la STPS. <br /> <br />
              Contamos con un equipo de asesores con certificaciones internacionales en temas de <span className="font-bold"> Equidad de Género.</span> <br /> <br />
              ¡Transforma tu empresa!
            </p>
            <Link href="/nosotros/#aqui">
            <button className="text-white rounded-3xl py-2 px-6 bg-[#9825A6] hover:bg-[#ce84d8] my-2">
              Conoce más
            </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden flex justify-center">
            <Image
              src="/img/home/formula-addition.png"
              width={700}
              height={700}
              className="relative origin-bottom-left left-[300px] top-[400px]"
              alt=""
            />
          </div>
        </section>
        <div className="w-full bg-gray-200 font-comm">
          <div className="flex flex-wrap text-center font-jost divide-x-2 divide-white">
            <div className="py-10 w-1/3">
              <h3 className="title-font font-bold md:text-6xl text-3xl text-black">
                +20
              </h3>
              <p className="leading-relaxed font-regular text-base text-black">
                AÑOS DE EXPERIENCIA
              </p>
            </div>
            <div className="py-10 w-1/3">
              <h3 className="title-font font-bold md:text-6xl text-3xl text-black">
                +40.000
              </h3>
              <p className="leading-relaxed font-regular text-base text-black">
                personas por año impactadas
              </p>
            </div>
            <div className="py-10 w-1/3">
              <h3 className="title-font font-bold md:text-6xl text-3xl text-black">
                +2000
              </h3>
              <p className="leading-relaxed font-regular text-base text-black">
                Empresas satisfechas
              </p>
            </div>
          </div>
        </div>
        {/* Seccion Frase */}
        <div
          className="bg-no-repeat bg-cover relative h-[600px] flex flex-row"
          style={{
            backgroundImage: `url(/img/portada/laboral.jpg)`,
            objectPosition: "bottom",
          }}
        >
          <section className="glass font-comm h-auto">
            <h2 className="text-gray-700 pt-8 pb-6 text-center text-3xl font-medium h-auto">
              “El éxito de una empresa es simplemente el reflejo de la actitud, grado de motivación y compromiso de las personas que la forman” Camilo Cruz
            </h2>
          </section>
        </div>
        <section className="flex flex-row h-[800px]"> 
          <div className="bg-[#69C6FA] w-1/4">
            <div className="h-[605px] w-[500px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-xl ml-40 mt-24">
            <div className="shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/home/alianzas-casos-de-exito.jpg"
                width={500}
                height={400}
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
                  <Link href="blog/alianza">
                    <button className="inline-flex text-[#69C6FA] font-bold border-2 border-[#69C6FA]  py-2 px-6 focus:outline-none hover:bg-[#83d2ff] hover:text-white rounded text-lg transition ease-in duration-250">
                    Leer el artículo
                    </button>
                 </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="w-3/4 flex flex-col items-end px-10 font-comm justify-center">
            <h3 className="w-1/2 text-3xl text-[#69C6FA] py-10">
              Casos de éxito
            </h3>
            <p className="w-1/2 py-5 pr-10">
              Para Addition, la unión hace la fuerza. <br /> <br />

              Nuestros clientes son parte importante de nuestro crecimiento, por lo que hemos construido útiles alianzas con empresas especializadas para mayor eficiencia en nuestras soluciones. <br /> <br />

              Hemos trabajado con empresas tanto públicas como privadas de todos los giros: <br /> <br />
              Industriales: Extractivas, manufactureras, de consumo final, producción, etc. <br /> <br />
              Comerciales: Mayoristas, minoristas, comisionistas. <br /> <br />
              De servicios: Transporte, turismo, instituciones financieras, servicios públicos y privados, educación, finanzas, salud, farmacéutica, etc.
            </p>
            <Link href="/alianzas">
              <button className="text-white mr-10 rounded-3xl border-2 border-[#69C6FA] py-2 px-6 my-2 bg-[#69C6FA] hover:bg-white hover:text-[#69C6FA]">
                Conoce más
              </button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col h-[500px] bg-[#EA5076]">
          <div className="py-10 pl-28 w-5/6">
            <h3 className="font-comm text-white font-light text-3xl">
              Lo que nuestros clientes <br/> opinan de nosotros
            </h3>
          </div>
          <div className="flex flex-row space-x-10 w-5/6 mx-auto">
            <div className="shadow-lg border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden font-comm w-1/3 space-y-2 p-4">
                <p className="">
                  “Somos una empresa transnacional con representación en México. Addition nos ha brindado asesoría integral en la <span className="font-bold">gestión de nuestro personal,</span> Addition es reconocido internamente en nuestra organización por otros países, como parte del éxito de los resultados en el crecimiento de la operación en México”.
                </p>
                <p className="text-base text-[#69A3A2]">David, Manager, Billing Services</p>
                <p className="text-base text-[#69A3A2]">
                  MARKEN a UPS company 
                </p>
            </div>
            <div className="shadow-lg border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden font-comm w-1/3 space-y-2 p-4">
                <p className="">
                  “Somos una Firma comprometida con la <span className="font-bold">inclusión y la diversidad,</span> por esto, decidimos apoyarnos de Addition para obtener la certificación en la <span className="font-bold">Norma de Igualdad Laboral y no Discriminación,</span> quienes nos asesoraron en materia de interpretación e integración de evidencias. Agradecemos su apoyo para cumplir con dicho objetivo.”
                </p>
                <p className="text-base text-[#69A3A2]">Ruth Sanders Inclusión, Diversidad y Equidad</p>
                <p className="text-base text-[#69A3A2]">
                  KPMG 
                </p>
            </div>
            <div className="shadow-lg border-gray-200 bg-white border-opacity-60 rounded-lg overflow-hidden font-comm w-1/3 space-y-2 p-4">
                <p className="">
                  “Somos una empresa donde la <span className="font-bold">seguridad e integridad de nuestros colaboradores</span> es de suma importancia por las actividades que desempeñan, Addition nos asesoró para implementar la <span className="font-bold">Nom 035,</span> alineando el cumplimiento de esta norma a otras que estamos obligados a atender por el giro de nuestro negocio.”
                </p>
                <p className="text-base text-[#69A3A2]">Gabriela Esquivel, Gerente de EHS</p>
                <p className="text-base text-[#69A3A2]">
                  ADT 
                </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-white flex flex-row space-x-10 h-[400px] justify-center items-center px-10 font-comm">
          <div className="w-2/3">
            <h3 className="text-2xl font-comm">
              Somos una empresa con calidad comprobada
            </h3>
          </div>
          <div className="flex flex-col space-y-4">
          <div className="flex justify-center">
            <Image
              src="/img/home/certificado-igualdad.png"
              width={200}
              height={200}
              className="object-cover rounded-xl object-center"
              alt="Aqui va el alt de la imagen"
            />
          </div>
          <p className="text-sm">
            Somos la primer empresa de consultoría en Recursos Humanos en obtener la certificación en la Norma Mexicana de Igualdad Laboral y No Discriminación.
          </p>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-center">
               <Image
              src="/img/home/certificado-rh.png"
              width={200}
              height={200}
              className="object-cover rounded-xl object-center"
              alt="Aqui va el alt de la imagen"
            />
            </div>
            <p className="text-sm">
              Ocupamos el lugar número 15 a nivel Nacional dentro de las 50 mejores empresas en Recursos Humanos, y el 39 de las mejores empresas de consultoría administrativa de gestión.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
} 