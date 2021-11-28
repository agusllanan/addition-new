import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          Amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
        </p>
    </div>
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
    <section className="flex flex-row space-x-10 h-auto items-center justify-center m-10">
      <div className="flex flex-col bg-white shadow-xl w-1/2 h-2/3 rounded-xl">
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
            Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-white shadow-xl w-1/2 h-2/3 rounded-xl">
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
          <p className="w-2/3">
            Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
          </p>
        </div>
      </div>
    </section>
    <section className="flex flex-row bg-[#A036AD] w-full h-[500px] px-10">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-white font-regular mb-4 self-start">
              {" "}
              Esta es la formula <br /><span className="font-bold">Addition</span>
            </h2>
            <p className="text-base text-white">
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
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uruUfi7OEAk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowfullscreen
              className="mt-10 rounded-xl"
            ></iframe>
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
                <FontAwesomeIcon icon={faCoffee} className="text-[#69C6FA] text-5xl"/>
                <p className="w-3/4">Diversidad e inclusion</p>
              </div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faCoffee} className="text-[#69C6FA] text-5xl"/>
              <p> Equidad </p>
              </div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faCoffee} className="text-[#69C6FA] text-5xl"/><p>
                Respeto
              </p></div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faCoffee} className="text-[#69C6FA] text-5xl"/><p>
                Compromiso
              </p></div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faCoffee} className="text-[#69C6FA] text-5xl"/><p>
                Enfoque al cliente
              </p></div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
                <FontAwesomeIcon icon={faCoffee} className="text-[#69C6FA] text-5xl"/>
                <p className="w-3/4 text-center ">Pertenecia</p>
              </div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faCoffee} className="text-[#69C6FA] text-5xl"/><p>
                Trabajo en equipo
              </p></div>
              <div className="bg-white h-[150px] w-[150px] rounded-xl shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl hover:text-[#4ab5f3]">
              <FontAwesomeIcon icon={faCoffee} className="text-[#69C6FA] text-5xl"/><p>
                Flexibilidad
              </p></div>
            </div>
          </div>
          <div className="w-2/3 flex flex-col justify-center items-end space-y-10 pr-">
          <h3 className="w-2/3 text-3xl font-comm text-[#69C6FA]">
            Nuestros valores
          </h3>
          <p className="w-2/3 text-justify">
            Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
            Peel the 2 cherries, if it’s even possible to peel a cherry, discard the stalks and place them neatly next to the other fruits
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
