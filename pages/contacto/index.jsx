import Layout from "../../components/Layout";


export default function contactanos () {
    return (
        <Layout 
        title="Contactanos | Proanalytics"
        description="Agregue una descripcion"
        >
        <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-brink-pink-500">Contáctanos</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Estamos a su disposición para resolver cualquier tipo de duda</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
            <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brink-pink-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
        </div>
        <div className="p-2 w-1/2">
            <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brink-pink-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
        </div>
        <div className="p-2 w-full">
            <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-brink-pink-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
        </div>
        <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-brink-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-brink-pink-400 rounded text-lg">Enviar</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-brink-pink-500">contacto@addition.com</a> <br /> <br />
            
            <span className="inline-flex">
            <a className="text-brink-pink-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </a>
            <a className="ml-4 text-brink-pink-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
            </a>
            </span>
        </div>
        </div>
    </div>
</div>
</section>
        </Layout>
    )
}
