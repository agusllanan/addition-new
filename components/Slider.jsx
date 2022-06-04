import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"

export default function SimpleSlider() {
  const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      swipeToSlide: true,
  }
  return (
    <Slider className="flex " {...settings}>
      <div className="p-6">
              <Image
                src="/img/home/bolsa-de-trabajo.jpg"
                width={700}
                height={350}
                className="object-cover object-bottom w-3/4"
                alt="Aqui va el alt de la imagen"
              />
              <h3 className="title-font text-lg font-medium text-gray-900 my-3">
                Hasta un 35% más de retorno sobre el capital
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Las empresas con mayor representación de mujeres en puestos directivos, tienen hasta un 35% más de retorno sobre el capital y hasta un 34% más de retorno total para los accionistas. (The Balance).
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
                Lealtad y compromiso
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Fortalece la pertenencia, lealtad y compromiso con su empresa por parte del personal.
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
                87% mejores decisiones
              </h3>
              <p className="leading-relaxed mb-3 text-justify">
                Los equipos inclusivos toman mejores decisiones hasta en un 87 % del tiempo (Trello).
              </p>
      </div>
    </Slider>
  );
}