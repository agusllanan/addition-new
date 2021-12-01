import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"

export default function SimpleSlider() {
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
      <div className="p-6">
              <Image
                src="/img/home/bolsa-de-trabajo.jpg"
                width={700}
                height={350}
                className="object-cover object-bottom w-3/4"
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
          <div className="p-6">
              <Image
                src="/img/home/alianzas-casos-de-exito.jpg"
                width={700}
                height={350}
                className="object-cover object-bottom w-3/4"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Porque Somos los mejores
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Con la asesoría de nuestro Coach, podrás elegir entre uno o
                varios temas de nuestro catálogo de servicios ajustándose a un
                tiempo y presupuesto objetivo
              </p>
      </div>
            <div className="p-6">
              <Image
                src="/img/home/diversidad-inclusion.jpg"
                width={700}
                height={350}
                className="object-cover object-bottom w-3/4"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Porque no hay nadie como nosotros
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Con la asesoría de nuestro Coach, podrás elegir entre uno o
                varios temas de nuestro catálogo de servicios ajustándose a un
                tiempo y presupuesto objetivo
              </p>
      </div>
    </Slider>
  );
}