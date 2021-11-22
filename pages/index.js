import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Servicios from "../components/Servicios";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Addition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className="bg-no-repeat bg-cover relative h-screen flex items-center"
          style={{
            backgroundImage: `url(/img/portada/imagen-portada.png)`,
          }}
        >
          <section className="glass font-comm">
            <h2 className="text-gray-700 pt-8 pb-6 text-center text-3xl font-medium">
              ¿Tu organización asume las normas sobre diversidad e inclusión?{" "}
            </h2>
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
              certificación en la{" "}
              <span className="font-bold">
                Norma Mexicana en Igualdad Laboral y No Discriminación.
              </span>
            </p>
            <button className="btn px-8 py-4 animate-none mt-8 ml-10">
              Conoce más
            </button>
          </section>
        </div>
        <section className="bg-white h-auto p-8 flex flex-col md:flex-row font-comm">
          <div className="w-full md:w-1/2 overflow-hidden ">
            <Image
              src="/img/elipse.png"
              width={400}
              height={400}
              className="relative origin-bottom-left left-[300px] top-[400px]"
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
        <section className="bg-[#EA5076] items-center py-12 flex flex-col justify-center font-comm">
          <h2 className="text-white text-3xl mb-4">Nuestros Servicios</h2>
          <Servicios />
        </section>
      </main>
    </Layout>
  );
}
