import Layout from "../components/Layout";
import Head from 'next/head'

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
        <div className="bg-clip-padding bg-white/70 backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-300 h-[450px] w-[600px] rounded-3xl shadow-xl m-auto md:ml-[50px]">
          <h2 className="text-gray-700 pt-24 pb-6 text-center text-3xl">
            Frase principal resaltando la diversidad
          </h2>
          <p className="text-gray-700 text-[16px] mx-10 text-justify">
          Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
          </p>
          <button className="btn px-8 py-4 animate-none mt-8 ml-10">
            Conoce más
          </button>
        </div>
      </div>
      </main>
    </Layout>
  )
}
