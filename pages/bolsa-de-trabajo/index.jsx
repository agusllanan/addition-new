import Layout from "../../components/Layout";
import Head from "next/head";
import { useState } from "react";
import JobPosts from "../../components/JobPosts";


const bolsaDeTrabajo = () => {

  const [searchItem, setSearchItem] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchWorkSpace, setSearchWorkSpace] = useState("");
  const [searchSalary, setSearchSalary] = useState("");
  const [searchDate, setSearchDate] = useState("Fecha");
  const [searchCategory, setSearchCategory] = useState("Categoría");
  const [searchTemp, setSearchTemp] = useState("Contratación");


  return <Layout>
      <Head>
        <title>Addition - Bolsa de Trabajo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <header>
      <div
          className="bg-no-repeat bg-cover relative h-[300px] flex items-center"
          style={{
            backgroundImage: `url(/img/nosotros/portada-nosotros.png)`,
          }}
      />
    </header>
    <main className="flex flex-row w-full">
    <div className="flex flex-col py-10 w-4/6 items-center">
      <h2 className="text-3xl py-4 text-brink-pink-500 font-mont w-4/5">Bolsa de trabajo</h2>
      <div className="flex flex-row justify-between font-mont w-4/5">
        <h3> 500 resultados encontrados</h3>
        <h3>Ordenar por: Relevancia</h3>
      </div>
      <JobPosts title="Administrador oficina"/>
      <JobPosts title="Desarrollador de software"/>
      <JobPosts title="Mecanico"/>
      <JobPosts title="Chef"/>
    </div>
    <aside className="flex flex-col w-1/3">
      <div className="bg-brink-pink-500 py-6 flex flex-col w-full px-10 border-b-2 border-white">
        <form className="flex flex-col space-y-4 font-mont" role="form">
          <input 
            type="text"
            placeholder="Puesto, área laboral o empresa"
            name="Puesto" 
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="rounded-lg px-4 py-1"
            />
          <input 
            type="text" 
            placeholder="Colonia, Ciudad o Estado"
            name="Ciudad" 
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="rounded-lg px-4 py-1 peer-focus:border-brink-pink-500"
            />
          <button className="bg-white text-brink-pink-500 w-2/3 aling-center py-2 rounded-lg hover:bg-gray-100 transition ease-in duration-250">
            Buscar empleo
          </button>
        </form>
      </div>
      <div className="bg-brink-pink-500 py-6 flex flex-col space-y-4 w-full px-10 font-mont">
        <select 
          value={searchWorkSpace}
          onChange={(e) => setSearchWorkSpace(e.target.value)}
          placeholder="Espacio de trabajo"
          className="rounded-lg px-4 py-2"
          >
        <option value="Remoto temporal">Remoto temporal</option>
        <option value="Remoto permanente">Remoto permanente</option>
        <option value="Mixto">Mixto</option>
        <option value="Oficina">Oficina</option>
        </select>
        <select 
          value={searchSalary}
          onChange={(e) => setSearchSalary(e.target.value)}
          placeholder="Salario"
          className="rounded-lg px-4 py-2"
          >
        <option value="$5,000 - $10,000 MXN">$5,000 - $10,000 MXN</option>
        <option value="$10,000 - $20,000 MXN">$10,000 - $20,000 MXN</option>
        <option value="$20,000 - $30,000 MXN">$20,000 - $30,000 MXN</option>
        <option value="$30,000 - $40,000 MXN">$30,000 - $40,000 MXN</option>
        <option value="$40,000 - $50,000 MXN">$40,000 - $50,000 MXN</option>
        <option value="$50,000 - $60,000 MXN">$50,000 - $60,000 MXN</option>
        <option value="$60,000 - $70,000 MXN">$60,000 - $70,000 MXN</option>
        <option value="$70,000 MXN o más">$70,000 MXN o más</option>
        </select>
        <select 
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="rounded-lg px-4 py-2"
          placeholder="Fecha"
          >
        <option value="Hoy">Hoy</option>
        <option value="Ayer">Ayer</option>
        <option value="Hace 1 semana">Hace 1 semana</option>
        <option value="Hace 2 semanas">Hace 2 semanas</option>
        <option value="Hace 1 mes">Hace 1 mes</option>
        <option value="Hace 2 meses">Hace 2 meses</option>
        </select>
        <select 
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
          className="rounded-lg px-4 py-2"
          >
        <option value="Recursos Humanos">Recursos Humanos</option>
        <option value="Administrativo">Administrativo</option>
        <option value="Ingeniería">Ingeniería</option>
        <option value="Ventas">Ventas</option>
        <option value="Tecnología de la informacíon">Tecnología de la informacíon</option>
        <option value="Marketing">Marketing</option>
        </select>
        <select 
          value={searchTemp}
          onChange={(e) => setSearchTemp(e.target.value)}
          className="rounded-lg px-4 py-2"
          >
        <option value="Tiempo completo">Tiempo Completo</option>
        <option value="Medio tiempo">Medio tiempo</option>
        <option value="Indeterminado">Indeterminado</option>
        <option value="Temporal">Temporal</option>
        <option value="Becario / Prácticas">Becario / Prácticas</option>
        </select>
      </div>
      <div className="bg-gray-100 flex flex-col justify-center items-center">
        <h3 className="py-6 text-3xl text-brink-pink-500 w-4/5">Carga tu CV a nuetra base de profesionales</h3>
        <div className="w-4/5 py-6">
         <form className="flex flex-col space-y-4 font-mont" role="form">
          <input 
            type="text"
            placeholder="Nombre Completo"
            name="Nombre Completo" 
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="rounded-lg px-4 py-1"
            />
          <input 
            type="text" 
            placeholder="Edad"
            name="Edad" 
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="rounded-lg px-4 py-1 peer-focus:border-brink-pink-500"
            />
          <input 
            type="text" 
            placeholder="Teléfono"
            name="Teléfono" 
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="rounded-lg px-4 py-1 peer-focus:border-brink-pink-500"
            />
          <input
            type="email" 
            placeholder="Correo Electrónico"
            name="email" 
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="rounded-lg px-4 py-1 peer-focus:border-brink-pink-500"
            />
          <select 
          value={searchTemp}
          onChange={(e) => setSearchTemp(e.target.value)}
          placeholder="Ultimo grado de estudios"
          className="rounded-lg px-4 py-2"
          >
            <option value="Secundario">Tiempo Completo</option>
            <option value="Terciario">Medio tiempo</option>
            <option value="Universidad">Indeterminado</option>
            <option value="Maestria">Temporal</option>
          </select>
          <textarea placeholder="Puestos ocupados en los últimos tres años" className="rounded-lg px-4 py-1 h-24 resize-none">
          </textarea>
          <select 
          value={searchSalary}
          onChange={(e) => setSearchSalary(e.target.value)}
          placeholder="Salario"
          className="rounded-lg px-4 py-2"
          >
        <option value="$5,000 - $10,000 MXN">$5,000 - $10,000 MXN</option>
        <option value="$10,000 - $20,000 MXN">$10,000 - $20,000 MXN</option>
        <option value="$20,000 - $30,000 MXN">$20,000 - $30,000 MXN</option>
        <option value="$30,000 - $40,000 MXN">$30,000 - $40,000 MXN</option>
        <option value="$40,000 - $50,000 MXN">$40,000 - $50,000 MXN</option>
        <option value="$50,000 - $60,000 MXN">$50,000 - $60,000 MXN</option>
        <option value="$60,000 - $70,000 MXN">$60,000 - $70,000 MXN</option>
        <option value="$70,000 MXN o más">$70,000 MXN o más</option>
        </select>
        <input 
            type="text" 
            placeholder="Lugar de residencia"
            name="Residencia" 
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="rounded-lg px-4 py-1 peer-focus:border-brink-pink-500"
        />
          <button className="bg-white text-brink-pink-500 w-1/3 border-2 border-brink-pink-500 aling-center py-2 rounded-lg hover:bg-gray-100 transition ease-in duration-250">
            Cargar mi CV
          </button>
        </form>
        </div>
      </div>
    </aside>
    </main>
  </Layout>
};

export default bolsaDeTrabajo;
