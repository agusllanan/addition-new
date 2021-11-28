import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const alianzas = () => {
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
            backgroundImage: `url(/img/alianzas/portada-alianzas.png)`,
          }}
      />
    </div>
    <section className="flex flex-col w-full h-[800px]">
      <div className="bg-white space-x-6 flex px-10 h-1/2 relative">
        <div className="absolute top-12 left-40">
        <h3 className="text-[#EA5076] text-3xl font-comm w-full font-normal">Alianzas estratégicas</h3>
        </div>
      </div>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 relative h-1/2">
      <div className="positon absolute -top-72 left-40">
          <div className="h-auto w-2/3 border-2 shadow-lg bg-white border-gray-200 border-opacity-60">
            <div className="p-6">
              <Image
                src="/img/home/alianzas-casos-de-exito.jpg"
                width={800}
                height={400}
                className="object-cover object-bottom"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Addition y Proanalytics unen esfuerzos por la Diversidad e Inclusión
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Con la asesoría de nuestro Coach, podrás elegir entre uno o
                varios temas de nuestro catálogo de servicios ajustándose a un
                tiempo y presupuesto objetivo
              </p>
              <div className="flex items-center flex-wrap">
                  <Link href="#">
                    <button className="btn hover:bg-white border-2 border-transparent rounded-2xl hover:border-2 hover:border-[#EA5076] hover:text-[#EA5076] text-lg transition ease-in duration-200">
                    Conoce más 
                    </button>
                 </Link>
                </div>
                <div className="space-x-4 z-20 flex justify-end">
                  <ChevronLeftIcon 
                    className="w-8 h-8 text-brink-pink-600 hover:text-violet-500 cursor-pointer"
                  />
                  <ChevronRightIcon
                   className="w-8 h-8 text-brink-pink-600 hover:text-violet-500 cursor-pointer"
                   />
                </div>
              </div>
          </div>
      </div>
      <div className="absolute -top-72 -right-96">
            <div className="h-auto w-1/3 border-2 shadow-lg bg-white border-gray-200 border-opacity-60">
            <div className="p-6">
              <Image  
                src="/img/home/alianzas-casos-de-exito.jpg"
                width={800}
                height={400}
                className="object-cover object-bottom"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Addition y Proanalytics unen esfuerzos por la Diversidad e Inclusión
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Con la asesoría de nuestro Coach, podrás elegir entre uno o
                varios temas de nuestro catálogo de servicios ajustándose a un
                tiempo y presupuesto objetivo
              </p>  
              </div>
          </div>
      </div>
      <div>
      </div>
      </div>
    </section>
    <section className="bg-[#EDEDED] h-auto flex flex-col px-16">
      <div className="">
        <h3 className="text-brink-pink-500 text-3xl py-8"> Casos de Exito </h3>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 gap-x-4 ">
            <div className="bg-white h-auto w-full shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl p-3 rounded-sm">
              <div>
                <Image
                src="/img/alianzas/exito-1.png"
                width={400}
                height={200}
                className="object-cover object-bottom rounded-lg"
                alt="Aqui va el alt de la imagen"
                />
              </div>
              <h3 className="w-full">Titulo caso de exito</h3>
              <p className="w-full text-sm">
                Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
              </p>
            </div>
            <div className="bg-white h-auto w-full shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl p-3">
              <div>
                <Image
                src="/img/alianzas/exito-2.png"
                width={400}
                height={200}
                className="object-cover object-bottom rounded-lg"
                alt="Aqui va el alt de la imagen"
                />
              </div>
              <h3 className="w-full">Titulo caso de exito</h3>
              <p className="w-full text-sm">
                Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
              </p>
            </div>
            <div className="bg-white h-auto w-full shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl p-3">
              <div>
                <Image
                src="/img/alianzas/exito-3.png"
                width={400}
                height={200}
                className="object-cover object-bottom rounded-lg"
                alt="Aqui va el alt de la imagen"
                />
              </div>
              <h3 className="w-full">Titulo caso de exito</h3>
              <p className="w-full text-sm">
                Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
              </p>
            </div>
            <div className="bg-white h-auto w-full shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl p-3">
              <div>
                <Image
                src="/img/alianzas/exito-4.png"
                width={400}
                height={200}
                className="object-cover object-bottom rounded-lg"
                alt="Aqui va el alt de la imagen"
                />
              </div>
              <h3 className="w-full">Titulo caso de exito</h3>
              <p className="w-full text-sm">
                Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
              </p>
            </div>
            <div className="bg-white h-auto w-full shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl p-3">
              <div>
                <Image
                src="/img/alianzas/exito-5.png"
                width={400}
                height={200}
                className="object-cover object-bottom rounded-lg"
                alt="Aqui va el alt de la imagen"
                />
              </div>
              <h3 className="w-full">Titulo caso de exito</h3>
              <p className="w-full text-sm">
                Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
              </p>
            </div>
            <div className="bg-white h-auto w-full shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl p-3">
              <div>
                <Image
                src="/img/alianzas/exito-6.png"
                width={400}
                height={200}
                className="object-cover object-bottom rounded-lg"
                alt="Aqui va el alt de la imagen"
                />
              </div>
              <h3 className="w-full">Titulo caso de exito</h3>
              <p className="w-full text-sm">
                Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
              </p>
            </div>
            <div className="bg-white h-auto w-full shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl p-3">
              <div>
                <Image
                src="/img/alianzas/exito-7.png"
                width={400}
                height={200}
                className="object-cover object-bottom rounded-lg"
                alt="Aqui va el alt de la imagen"
                />
              </div>
              <h3 className="w-full">Titulo caso de exito</h3>
              <p className="w-full text-sm">
                Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
              </p>
            </div>
            <div className="bg-white h-auto w-full shadow-lg flex flex-col justify-center items-center space-y-4 hover:scale-105 hover:shadow-2xl p-3">
              <div>
                <Image
                src="/img/alianzas/exito-8.png"
                width={400}
                height={200}
                className="object-cover object-bottom rounded-lg"
                alt="Aqui va el alt de la imagen"
                />
              </div>
              <h3 className="w-full">Titulo caso de exito</h3>
              <p className="w-full text-sm">
                Start by taking the 4 raspberries, chop them into tiny segments and introduce the strawberry. Check to make sure that the raspberries and the strawberry sit well together, before slicing and dicing a lemon and adding it to this rather strange combination of fruits.
              </p>
            </div>
      </div>
    </section>
    </Layout>
  )
}

export default alianzas