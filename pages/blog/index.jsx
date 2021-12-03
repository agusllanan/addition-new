import Layout from "../../components/Layout";
import Head from "next/head";
import Nav from "../../components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";

const blog = () => {
  return (
    <Layout>
      <Nav />
      <Head>
        <title>Addition - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div
          className="bg-no-repeat bg-cover relative h-[300px] flex items-center"
          style={{
            backgroundImage: `url(/img/especializados/especializado-equipo.png)`,
          }}
      />
        <div className="flex w-full h-[200px] justify-center items-center">
        <h3 className="text-[#EA5076] text-5xl font-comm font-bold">
          Nuestro Blog
        </h3>
        </div>
        <section className="bg-[#EDEDED] flex flex-col cursor-pointer">
          <div className="px-10 py-10 font-comm text-2xl text-[#EA5076]">
            <h3>
              Ultimas entradas
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
  );
};

export default blog;
