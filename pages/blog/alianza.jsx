import Layout from "../../components/Layout";
import Head from "next/head";
import Nav from "../../components/Breadcrumbs";
import Image from "next/image";

const AdditionProanalytics = () => {

  return (
    <Layout>
      <Head>
        <title>Addition - Alianza con Proanalytics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div>
      <div
          className="bg-no-repeat bg-cover object-top relative h-[350px] flex items-center"
          style={{
            backgroundImage: `url(/img/entrada/portada-entrada-1.png)`,
          }}
      />
    </div>
    <Nav/>
    <section className="h-600 flex">
      <div className="w-2/3 p-10 space-y-8">
        <h3 className="text-brink-pink-500 text-2xl space-y-4 text-justify">
          Implementación de programas de diversidad e inclusión.
        </h3>
        <p>
          <span className="font-bold">
            
          </span>
          </p>

          <p>
          Diferentes instrumentos nacionales e internacionales han enfocado su atención en la importancia de generar ambientes laborales libres de discriminación; considerando dentro de su cultura organizacional fomentar el respeto, la diversidad, la inclusión y la accesibilidad de todas las personas que interactúan con la empresa; como lo son: personal directo e indirecto, clientes y proveedores.
          </p>
          <p>
          La igualdad dentro de una organización se garantiza brindando a todas las personas las mismas oportunidades y el mismo trato, esto se puede lograr teniendo documentados todos los procesos de gestión de Recursos Humanos, basados en competencias, habilidades y experiencia.
        </p>
      <div className="w-full h-[200px]">
        <Image 
        src="/img/entrada/amigo.png"
        width={900}
        height={150}
        className="object-cover py-5 object-bottom"
        alt="Aqui va el alt de la imagen"
        />
      </div>
        <p>
          Para lograr tener un ambiente laboral diverso, debe existir la aceptación de todas las personas sin importar su sexo, preferencia sexual, etnia, nacionalidad, identidad, edad, opiniones o creencias, o cualquier otro tipo de discriminación (considerar LFPED).
        </p>
        <p>
          La Inclusión son las medidas o políticas para asegurar de manera progresiva que todas las personas cuenten con igualdad de oportunidades para acceder a programas, bienes o servicios. Entre estos se encuentran programas de sensibilización para erradicar roles y estereotipos de género; así como el establecimiento de acciones que consideren la condición de las personas de la organización para darles un trato más justo; personas con discapacidad, comunidad LGBTTTIQ, padres y madres con dependientes menores de edad o con alguna condición especial.
        </p>
        <p>
          Contar con una empresa con infraestructura, mobiliario y comunicación adecuada, genera la posibilidad de que cualquier persona independienemente de su condición pueda tener acceso a información, servicios, instalaciones o productos de la compañía; contribuyendo al respeto de los Derechos Humanos.
        </p>
        <p>
          Un ambiente saludable y armonioso, se logra, a través de la implementación de programas donde se fomentan los valores empresariales, códigos de conducta y ética; que consideran tolerancia cero a cualquier acto de Violencia Laboral, Acoso y Hostigamiento Sexual y/o Mobbing Laboral.
        </p>
        <p>
          Establecer estrategias de corresponsabilidad considerando la diversidad y condiciones personales y familiares que tienes cada integrante de la compañía, genera un sentido de pertenencia inigualable; siendo así una de las principales acciones que contribuyen a tener un ambiente libre de violencia y discriminación:
        </p>
        <ul className="pl-5 list-disc space-y-2">
          <li>Contar con salas de lactancia.</li>
          <li>Ofrecer alguna oferta complementaria para el cuidado de menores.</li>
          <li>Flexibilización de horarios.</li>
          <li>Medidas para atender necesidades personales, de dependientes y/o terceros.</li>
          <li>Promover la parentalidad.</li>
          <li>Promover la paternidad responsable.</li>
          <li>Licencias de cuidados de personas enfermas.</li>
          <li>Licencias con goce y sin goce de sueldo </li>
          <li>Llevar a cabo actividades para fomentar la igualdad y no discriminación dirigidas al personal de la organización y sus familias.</li>
        </ul>
          <p>
          Este último punto es de mucha relevancia para lograr el éxito en la implementación de estos programas, ya que en la construcción social de la persona intervienen distintos procesos que dicta nuestra conducta; Familia, Escuela, Medios de comunicación, Tradiciones culturales, entre otros.
        </p>
        <p>
          Los beneficios de implementación de estos programas son:
          <ul className="pl-5 list-disc space-y-2">
            <li>Ratificar el compromiso de la empresa con la sociedad al respetar los derechos laborales de su personal y promover buenas prácticas con proveedores, actores clave y personas beneficiarias.</li>
            <li>Obtener mayor impacto en la cadena de valor de su compañía.</li>
            <li>Fortalecer la pertenencia, lealtad y compromiso con su empresa por parte del personal.</li>
            <li>Consolidar la cultura directiva y laboral en la que se respeta la diversidad y se proporciona igualdad de trato, de oportunidades, de remuneración y de beneficios.</li>
            <li>Reafirmar su compromiso con el personal al contar con prácticas laborales que facilitan la corresponsabilidad entre la vida laboral, familiar y personal que fortalecen el desempeño y la lealtad.</li>
            <li>Aportar mayor confianza e interés en el centro de trabajo para atraer talentos.</li>
          </ul>
        </p>
        <p>
          Estos programas además nos permiten cumplir con el marco legal vigente; LFT, Reglamento Federal de Seguridad y Salud en el Trabajo, NOM 035 Factores de Riesgo Psicosocial, NMX 025 de Igualdad Laboral y no Discriminación, entre otros.
        </p>
        <p>
          Escrito por:
        </p>
        <div className="flex flex-col space-y-2 w-1/3">
          <p>Lic. Lihuba Vences Montes</p>
          <p>CEO de Addition Human Resources</p>
          <p>contacto@additionrh.com</p>
          <p>www.additonrh.com</p>
        </div>
      </div>
      <div className="w-1/3 p-10">
          <div className="h-auto w-full border-2  shadow-lg bg-white border-gray-200 border-opacity-60">
            <div className="p-6 space-x-4 flex justify-center items-center">
              <div className='w-1/3'>
                <Image  
                src="/img/home/alianzas-casos-de-exito.jpg"
                width={1000}
                height={800}
                className="object-cover object-bottom rounded-md"
                alt="Aqui va el alt de la imagen"
              />
              </div>
              <div className="w-2/3">
              <h3 className="text-sm font-medium text-gray-900 my-3">
                Addition y Proanalytics unen esfuerzos por la Diversidad e Inclusión
              </h3>
              <p className="leading-relaxed mb-3 text-sm text-justify">
                Con la asesoría de nuestro Coach.
              </p>
              </div>
              </div>
          </div>
      </div>
    </section>
      </main>
    </Layout>
  )
}

export default AdditionProanalytics
