import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";

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
    </Layout>
  )
}

export default nosotros
