// import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    id: "1",
    title: "Diversidad e inclusion",
    description:
      "Con la asesoría de nuestro Coach, podrás elegir entre uno o varios temas de nuestro catálogo de servicios ajustándose a un tiempo y presupuesto objetivo",
    imgUrl: "url(/img/servicios/diversidad-inclusion.jpg)",
    link: "",
  },
  {
    id: "2",
    title: "Servicios Especializados",
    description:
      "Primera etapa de entrenamiento y certificación donde se aprenden y practican conceptos y herramientas básicas de Lean Six Sigma. El curso será la base para el entendimiento de la metodología DMAIC.",
    imgUrl: "url(/img/servicios/servicios-especializados.jpg)",
    link: "",
  },
  {
    id: "3",
    title: "Gestión de recursos humanos",
    description:
      "Primera etapa de entrenamiento y certificación donde se aprenden y practican conceptos y herramientas básicas de Lean Six Sigma. El curso será la base para el entendimiento de la metodología DMAIC.",
    imgUrl: "url(/img/servicios/gestion-recursos.jpg)",
    link: "",
  },
];

const Servicios = () => {
  console.log(data);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((info) => (
        <SwiperSlide
          key={info.id}
          className="h-[500px] w-[300px] border-2 shadow-lg bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
        >
          <div className="border-2 shadow-lg border-gray-200 border-opacity-60 rounded-lg overflow-hidden font-comm">
            <div className="p-6">
              <img
                src={info.imgUrl}
                width={1200}
                height={1200}
                className="object-cover rounded-xl object-center"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                {info.title}
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                {info.description}
              </p>
              <div className="flex items-center flex-wrap">
                <Link href={info.link}>
                  <button className="inline-flex text-indigo-500 font-bold border-2 border-indigo-500  py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-lg transition ease-in duration-250">
                    Conoce más
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Servicios;
