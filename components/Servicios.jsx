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
        <div className="h-[700px] w-[400px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
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
              <p className="leading-relaxed mb-3 text-justify pb-1">
                <ul className=" pl-1 list-disc space-y-1">
                  <li className="font-bold">Norma Mexicana NMX-R-025-SCFI-2015 en Igualdad Laboral y No Discriminación.</li>
                  <li className="font-bold">Norma Oficial Mexicana NOM-035-STPS-2018 de factores de riesgo psicosocial</li>
                  <li className="font-bold">Distintivo Empresa Socialmente Responsable</li>
                </ul>
              </p>
              <div className="flex items-center flex-wrap">
                <Link href="/servicios/diversidad-inclusion">
                  <button className="inline-flex text-brink-pink-500 font-bold border-2 border-brink-pink-500  py-2 px-6 focus:outline-none hover:bg-brink-pink-500 hover:text-white rounded text-lg transition ease-in duration-250 mt-10">
                    Conoce más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*--------- Segundo servicios -------*/}
        <div className="h-[700px] w-[400px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
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
              <p className="leading-relaxed mb-3 pb-1 text-justify">
               Brindamos soluciones de gestión total o parcial en los procesos de Recursos Humanos <br />
              <span className="font-bold"> Atracción y Selección de Talento Humano </span> <br />
              <span className="font-bold"> Evaluación de Talento Humano y Organizacional </span> <br />
              <span className="font-bold"> Servicios Especializados </span> <br />
              <span className="font-bold"> Entrenamiento, Capacitación y Desarrollo </span> <br />
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
        {/*--------- Tercer servicios -------*/}
        <div className="h-[700px] w-[400px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
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
                Coaching laboral
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Acompañamos a las personas en la búsqueda de empleo para crecimiento personal, familiar y profesional. <br />
              <span className="font-bold"> Findy Job </span> <br />
              <span className="font-bold"> Job first (Orientación vocacional) </span> <br />
              <span className="font-bold"> Outplacement </span> <br />
              </p>
              <div className="flex items-center flex-wrap">
                <Link href="/servicios/coaching-laboral">
                  <button className="inline-flex text-brink-pink-500 font-bold border-2 border-brink-pink-500 py-2 px-6 focus:outline-none hover:bg-brink-pink-500 hover:text-white rounded text-lg transition ease-in duration-250 mt-8">
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
