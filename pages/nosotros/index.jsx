import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faBalanceScale, faHandshake, faPeopleArrows, faHandHoldingHeart, faHeart, faUserPlus, faArrowsAltV } from '@fortawesome/free-solid-svg-icons'


const nosotros = () => {
  return (
   <Layout>
      <Head>
        <title>Addition - Nosotros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <div
          className="bg-no-repeat bg-cover relative h-[300px] flex items-center"
          style={{
            backgroundImage: `url(/img/nosotros/portada-nosotros.png)`,
          }}
      />
    </div>
    <div className="h-[500px] flex flex-col justify-center space-y-7 items-center">
        <h2 className="text-3xl font-mont w-1/2">
          ¿Quiénes somos?
        </h2>
        <p className="w-1/2 text-justify">
          En Addition Human Resources sabemos que el recurso más valioso de tu empresa es su gente. <br /> <br />
          Somos una empresa mexicana de consultoría en <span className="font-bold">Recursos Humanos</span> con más de 20 años de experiencia en proporcionar asesoría para la <span className="font-bold">motivación, retención y desarrollo del recurso humano de las empresas. </span> <br /> <br />
          Contamos con programas de gestión interna para <span className="font-bold">ingreso, permanencia y desarrollo del personal;</span> basado en una <span className="font-bold">cultura de respeto</span> que contribuye a tener una sociedad más incluyente con <span className="font-bold">igualdad de oportunidades, sin discriminación</span> o cualquier dimensión que prive los derechos de la persona. <br /> <br />
          Estamos constituidos por personal de amplia experiencia y trayectoria en Sistemas de <span className="font-bold">Gestión, Recursos Humanos, Igualdad Laboral y Género.</span> 
        </p>
    </div>
    <section className="flex flex-row ">
      <div className="w-full md:w-1/3">
        <div
          className="bg-no-repeat bg-cover h-[613px] content-left"
          style={{
            backgroundImage: `url(/img/nosotros/lihuba-nosotros.png)`,
          }}
      />
      </div>
      <div className="bg-[#EA5076] flex flex-col justify-center space-y-7 items-center w-2/3 font-comm py-6">
        <h2 className="text-white text-2xl w-4/5">
          Acerca de Lihuba Vences
        </h2>
        <p className="text-white w-4/5">
        Psicóloga egresada de la Universidad Nacional Autónoma de México especializada en el área laboral y desarrollo organizacional, con <span className="font-bold">certificaciones para asesorar y auditar programas de género para erradicar la discriminación y contribuir a la igualdad de oportunidades. </span> <br /> <br />

        <span className="font-bold">Cuenta con capacitación en el desarrollo de competencias de Ombudsperson Organizacional,</span> Coach e instructora de diversos temas; recursos humanos, sistemas de gestión, derechos humanos, hostigamiento y acoso, igualdad laboral, violencia laboral y no discriminación.<br /> <br />

        Fundó <span className="font-bold">Addition Human Resources</span> con el propósito de optimizar el cumplimiento de los objetivos estratégicos de las empresas, a través, del establecimiento de planes y estrategias de motivación, retención y desarrollo de Capital Humano, enfocados a atender la diversidad e inclusion de las personas.<br /> <br />

        Ha apoyado de manera parcial o integral a más de 2000 empresas en sus procesos de gestión de Recursos Humanos, cuenta con experiencia en formación, procesos de auditoría y asesoría para la acreditación, certificación y re - certificación de Distintivos de Género,  Discriminación, <span className="font-bold">Diversidad & Inclusión;</span> incluyendo la <span className="font-bold">Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y no Discriminación, y Norma Oficial Mexicana NOM-035-STPS- Factores de riesgo psicosocial</span> Identificación, análisis, prevención y distintivos de la Secretaria de Trabajo y Previsión Social.
        </p>
        <div className="w-4/5">
        <Link href="/contacto">
        <button className="btn bg-white hover:bg-gray-200 text-[#EA5076] py-3">
          Ponte en contacto conmigo
        </button>
        </Link>
        
        </div>
      </div>
    </section>
    <section className="flex flex-row space-x-10 h-auto items-center justify-center m-10">
      <div className="flex flex-col bg-white shadow-xl w-1/2 h-[350px] rounded-xl">
        <div className="w-full h-[100px] rounded-t-xl">
          <Image
                src="/img/nosotros/portada-nosotros.png"
                width={700}
                height={100}
                className="object-cover object-center rounded-t-xl"
                alt="Aqui va el alt de la imagen"
              />
        </div>
        <div className="flex flex-col justify-center space-y-7 items-center font-comm py-5">
          <h3 className="w-2/3">
            Nuestra Misión
          </h3>
          <p className="w-2/3">
            Proporcionar soluciones funcionales, prácticas y eficaces a nuestros clientes en el área de <span className="font-bold">Recursos Humanos,</span> utilizando como herramienta de trabajo la calidad y una comunicación estrecha y personalizada; además de brindar satisfacción total para cada uno de los involucrados a nivel individual, grupal y/o organizacional.
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-white shadow-xl w-1/2 h-[350px] rounded-xl">
        <div className="w-full h-[100px] rounded-t-xl">
          <Image
                src="/img/nosotros/footer-nosotros.png"
                width={700}
                height={100}
                className="object-cover object-center rounded-t-xl"
                alt="Aqui va el alt de la imagen"
              />
        </div>
        <div className="flex flex-col justify-center space-y-7 items-center font-comm py-5">
          <h3 className="w-2/3">
            Nuestra visión
          </h3>
          <p className="w-2/3" id="aqui">
            Ser reconocidos como una de las principales empresas de <span className="font-bold">Recursos Humanos</span> dentro del país en donde la confianza sea nuestra primera recomendación.
          </p>
        </div>
      </div>
    </section>
    <section className="flex flex-row bg-[#A036AD] w-full h-[500px] px-16">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-white font-regular mb-4 self-start">
              {" "}
              Esta es la fórmula <br /><span className="font-bold">Addition</span>
            </h2>
            <ol className="list-decimal w-full space-y-2">
              <li className="text-white">
                Implementamos programas de <span className="font-bold">diversidad e inclusión</span> para mejorar la productividad de las organizaciones y cumplimiento de la normatividad vigente.
                <span className="font-bold">Norma Mexicana NMX-R-025-SCFI-2015</span>
                <span className="font-bold">Norma Oficial Mexicana NOM-035-STPS-2018</span>
              </li>
              <li className="text-white">
                Estamos autorizados y cumplimos con todos los requisitos para ofrecer servicios especializados enfocados en enriquecer el personal de tu empresa. 
              </li>
              <li className="text-white">
                Brindamos Servicios especializados con administración total y/o parcial de sus procesos de Recursos Humanos.
              </li>
            </ol>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <Image
                src="/img/nosotros/footer-nosotros.png"
                width={560}
                height={315}
                className="object-cover object-center mt-10 rounded-xl"
                alt="Aqui va el alt de la imagen"
              />
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
      <section className="flex h-[500px] bg-white">
          <div className="bg-[#69C6FA] w-2/5 ml-28 relative">
            <div className="absolute top-32 grid grid-cols-4 grid-rows-2 gap-4 gap-x-40 z-10 -m-10">
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
                <FontAwesomeIcon icon={faUsers} className="text-[#69C6FA] text-5xl" />
                <p className="w-3/4">Diversidad e inclusion</p>
              </div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faBalanceScale} className="text-[#69C6FA] text-5xl"/>
              <p> Equidad </p>
              </div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faHandshake} className="text-[#69C6FA] text-5xl"/><p>
                Respeto
              </p></div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faPeopleArrows} className="text-[#69C6FA] text-5xl"/><p>
                Compromiso
              </p></div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="text-[#69C6FA] text-5xl"/><p>
                Enfoque al cliente
              </p></div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
                <FontAwesomeIcon icon={faHeart} className="text-[#69C6FA] text-5xl"/>
                <p className="w-3/4 text-center ">Pertenecia</p>
              </div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faUserPlus} className="text-[#69C6FA] text-5xl"/><p>
                Trabajo en equipo
              </p></div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faArrowsAltV} className="text-[#69C6FA] text-5xl"/><p>
                Flexibilidad
              </p></div>
            </div>
          </div>
          <div className="w-2/3 flex flex-col justify-center items-end space-y-10 pr-10">
          <h3 className="w-2/3 text-3xl font-comm text-[#69C6FA]">
            Nuestros valores
          </h3>
          <p className="w-2/3 text-justify">
            Para Addition, los valores son la base de toda organización contribuyendo con el crecimiento y desarrollo de sus colaboradores. <br /> <br />
          </p>
          </div>
      </section>
    <div>
      <div
          className="bg-no-repeat bg-cover relative h-[400px] flex items-center"
          style={{
            backgroundImage: `url(/img/nosotros/footer-nosotros.png)`,
          }}
      />
    </div>
    </Layout>
  )
}

export default nosotros
