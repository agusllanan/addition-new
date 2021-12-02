import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"

export default function SliderGestion() {
  var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      swipeToSlide: true,
  };
  return (
    <Slider className="" {...settings}>
        <div className="p-6 mt-10">
              <Image
                src="/img/home/bolsa-de-trabajo.jpg"
                width={700}
                height={350}
                className="object-cover object-bottom w-3/4"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Una correcta gestión de <span className="font-bold">recursos humanos</span> ayuda a las empresas a lograr objetivos financieros y de crecimiento profesional.
              </h3>
      </div>
      
          <div className="p-6 mt-10">
              <Image
                src="/img/home/alianzas-casos-de-exito.jpg"
                width={700}
                height={350}
                className="object-cover object-bottom w-3/4"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                El desarrollo del <span className="font-bold">talento humano</span> de una empresa ahorra costos de rotación de personal y salud organizacional.
              </h3>
      </div>
            <div className="p-6 mt-10">
              <Image
                src="/img/home/diversidad-inclusion.jpg"
                width={700}
                height={350}
                className="object-cover object-bottom w-3/4"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Mejora la productividad, el <span className="font-bold">clima laboral</span> y la comunicación interna de la empresa.
              </h3>

      </div>
    </Slider>
  );
}