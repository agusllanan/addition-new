import Image from "next/image";
import Swal from 'sweetalert';
import Link from "next/link";


const Servicios = () => {

const callServices = () => {
  Swal({
    title: "Servicios",
    text: "preuba preuab",
    icon: "success",
    button: "Salir"
  });
}


  return (
    <>
      {/* // ------------ Primer Servicio ------------ */}
      <section className="flex flex-row space-x-12 mt-5">
        <div className="h-[570px] w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/servicios/diversidad-inclusion.jpg"
                width={1200}
                height={1200}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Diversidad e Inclusión
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                  Implementamos programas de <span className="font-bold">diversidad e inclusión</span>  para mejorar la productividad de las organizaciones y cumplimiento de la normatividad vigente.
              </p>
              <div className="flex items-center flex-wrap">
                <Link href="/servicios/diversidad-inclusion">
                  <button className="inline-flex text-brink-pink-500 font-bold border-2 border-brink-pink-500  py-2 px-6 focus:outline-none hover:bg-brink-pink-500 hover:text-white rounded text-lg transition ease-in duration-250">
                    Conoce más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*--------- Segundo servicios -------*/}
        <div className="h-[570px] w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/servicios/servicios-especializados.jpg"
                width={1200}
                height={1200}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Servicios Especializados
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Estamos autorizados y cumplimos con todos los requisitos para ofrecer servicios especializados enfocados en enriquecer el personal de su empresa.
              </p>
              <div className="flex items-center flex-wrap">
                <Link href="/servicios/servicios-especializados">
                  <button className="inline-flex text-brink-pink-500 font-bold border-2 border-brink-pink-500  py-2 px-6 focus:outline-none hover:bg-brink-pink-500 hover:text-white rounded text-lg transition ease-in duration-250">
                    Conoce más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*--------- Tercer servicios -------*/}
        <div className="h-[570px] w-[350px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="shadow-lg h-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <Image
                src="/img/servicios/gestion-recursos.jpg"
                width={1200}
                height={1200}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Gestión de Recursos Humanos
              </h3>
              <p className="leading-relaxed mb-3 pb-6 text-justify">
                Brindamos <span className="font-bold">Servicios Especializados</span> con administración total y/o parcial de sus procesos de <span className="font-bold">Recursos Humanos.</span>
              </p>
              <div className="flex items-center flex-wrap">
                <Link href="/servicios/gestion-recursos-humanos">
                  <button className="inline-flex text-brink-pink-500 font-bold border-2 border-brink-pink-500  py-2 px-6 focus:outline-none hover:bg-brink-pink-500 hover:text-white rounded text-lg transition ease-in duration-250">
                    Conoce más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicios;
