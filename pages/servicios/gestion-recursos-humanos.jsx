import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import SliderGestion from "../../components/SliderGestion";


const gestionRecursosHumanos = () => {
  const MySwal = withReactContent(Swal)

  const callServices = () => {
  Swal.fire({
    title: 'Servicios en diversidad e inclusión',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsa necessitatibus, ea ad commodi neque quis optio iusto totam, possimus sapiente maxime accusantium natus minima repellat rem! Maiores, quas rem? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsa necessitatibus, ea ad commodi neque quis optio iusto totam, possimus sapiente maxime accusantium natus minima repellat rem! Maiores, quas rem?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsa necessitatibus, ea ad commodi neque quis optio iusto totam, possimus sapiente maxime accusantium natus minima repellat rem! Maiores, quas rem?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsa necessitatibus, ea ad commodi neque quis optio iusto totam, possimus sapiente maxime accusantium natus minima repellat rem! Maiores, quas rem?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsa necessitatibus, ea ad commodi neque quis optio iusto totam, possimus sapiente maxime accusantium natus minima repellat rem! Maiores, quas rem?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsa necessitatibu'  ,
    imageUrl: '/img/servicios/diversidad-inclusion.jpg',
    imageAlt: 'Custom image',
    confirmButtonText: 'Salir',
})
}

  return (
    <Layout>
        <Head>
        <title>Addition - Gestión de recursos humanos</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
          <section 
          className="bg-no-repeat bg-cover relative flex items-center px-10"
          style={{
            backgroundImage: `url(/img/gestion/junta.png)`,
          }}
        >
          <div className="glass font-comm h-auto my-32  m-auto md:ml-[50px]">
            <h2 className="text-gray-700 pt-12 pb-6 text-center text-3xl font-medium">
            Gestión de Recursos Humanos
            </h2>
            <p className="text-gray-700 text-lg mx-10 text-justify">
              Conocemos la importancia de la gestión del personal para tu empresa, por lo que brindamos servicios especializados con administración total y/o parcial de sus procesos de Recursos Humanos. <br />
              Te ayudamos a mejorar y gestionar tu plantilla laboral con la atracción y <span className="font-bold">selección, evaluación, entrenamiento, capacitación y desarrollo de talento humano</span> dentro de tu organización para que puedas concentrarte en las tareas más importantes para el crecimiento de tu empresa.
            </p>
            <button className="btn bg-[#12B0F4] hover:bg-opacity-90 border-[#12B0F4] text-white px-8 py-4 animate-none mt-8 mb-4 ml-10">
              Conoce más
            </button>
          </div>
        </section>
        <section className="bg-gradient-to-l from-[#5A00C8] to-[#00DBFF] items-center py-12 flex flex-col justify-center font-comm px-10">
          <h2 className="text-white text-3xl mb-4">Gestión de Recursos Humanos</h2>
          <section className="flex flex-row space-x-4 mt-5">
        <div className="h-auto w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/gestion/juntas.png"
                width={600}
                height={400}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Atracción y Selección de Talento Humano
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
              Contrata al personal adecuado para el crecimiento de tu organización. 
              Contamos con servicios de <span className="font-bold">reclutamiento y selección</span> de personal, <span className="font-bold">Head Hunter,  Estudios Socioeconómicos y Laborales</span> y más.
              </p>
              <div className="flex items-center justify-end flex-wrap">                
                  <button className="btn-servicios bg-[#12B0F4] hover:text-[#12B0F4] border-[#12B0F4] transition ease-in duration-250 mt-18"
                  onClick={() => callServices()}
                  >
                    Conoce más
                  </button>
              </div>
            </div>
          </div>
        </div>
        {/*--------- Segundo servicios -------*/}
        <div className="h-auto w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/gestion/proyecto.png"
                width={600}
                height={400}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Evaluación de Talento Humano y Organizacional
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Fortalece los procesos internos de tu organización con nuestras evaluaciones y diagnóstico. <br />
                Assessment Center <br />
                Evaluación Psicometría y Proyectiva <br />
                Evaluación del Desempeño <br />
                Diagnóstico de Clima Laboral y Organizacional
              </p>
              <div className="flex items-center justify-end flex-wrap">
                <Link href="#">
                  <button className="btn-servicios mt-6 bg-[#12B0F4] hover:text-[#12B0F4] border-[#12B0F4] transition ease-in duration-250">
                    Conoce más
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
                src="/img/gestion/entrenamiento.png"
                width={600}
                height={400}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Entrenamiento, Capacitación y Desarrollo <span className=" text-sm">(virtual y presencial) </span> 
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                La capacitación y desarrollo del personal de tu empresa es básico para el crecimiento de esta. 
                En Addition, contamos con diferentes metodologías de capacitación y desarrollo para el crecimiento de tu organización. <br />
                Team Building <br />
                Capacitación tradicional. <br />
                Diseño de Programas de Coaching
              </p>
              <div className="flex items-center justify-end flex-wrap">
                <Link href="#">
                  <button className="btn-servicios bg-[#12B0F4] hover:text-[#12B0F4] border-[#12B0F4] transition ease-in duration-250">
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
            backgroundImage: `url(/img/especializados/especializado-equipo.png)`,
          }}
      />
      </div>
      <div className="bg-white flex flex-col justify-center space-y-7 items-center w-1/2 font-comm py-10">
        <h2 className="text-[#12B0F4] text-2xl w-4/5">
          El recurso más valioso de tu empresa
        </h2>
        <p className="text-black w-4/5">
          En <span className="font-bold">Addition Human Resources</span> sabemos que el recurso más valioso de tu empresa es su gente. <br /> <br />

          En Addition estamos comprometidos a ayudarte con la <span className="font-bold">motivación, retención y desarrollo de talento de tu equipo de trabajo,</span> por lo que proporcionamos soluciones funcionales y prácticas con una comunicación estrecha y personalizada a nivel organizacional, individual y/o grupal para cumplir con los objetivos de tu organización. 
        </p>
        <div className="w-4/5">
        <button className="btn-servicios border-[#12B0F4] hover:text-[#12B0F4] bg-[#12B0F4] transition ease-in duration-250">
          ¡Contáctanos!
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
        <section className="flex h-[500]">
          <div className="flex w-1/2 justify-center items-center bg-[#12B0F4] h-[540px]">
            <h3 className="text-white text-4xl">
              ¿Por qué pensar en <br /><span className="font-bold">
                Gestión de RH?
              </span>
            </h3>
          </div>
          <div className="w-1/2">
          <div className="w-full border-2 bg-white border-gray-200 border-opacity-60 h-500">
            <SliderGestion/>
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

export default gestionRecursosHumanos
