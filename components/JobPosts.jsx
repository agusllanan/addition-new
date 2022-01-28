import Link from "next/link";

const JobPosts = ({title}) => {
  return (
    <div className="flex flex-col py-4 px-4 space-y-4 bg-white rounded-xl shadow-lg font-mont w-4/5 my-4">
      <div className="flex flex-row py-4 justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>01/01/2000</p>
      </div>
      <div className="py-2 font-light">
        <p>$15,000 - $20,000</p>
      </div>
      <div>
        <p>Descro Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis odit sed, facilis odio vel exercitationem optio reprehenderit quaerat, alias minus perferendis ipsum corrupti? Pariatur error et in. Eum, ullam?</p>
      </div>
      <div>
        <h3>
          Empresa, categoria, CDMX
        </h3>
      </div>
        <div className="flex flex-row py-4 justify-between items-center">
        <button className="bg-white text-brink-pink-500 w-1/3 border-2 border-brink-pink-500 aling-center py-2 rounded-lg hover:bg-gray-100 transition ease-in duration-250">
          Ver vacante
        </button>
        <button className="bg-white text-brink-pink-500 w-1/3 border-2 border-brink-pink-500 aling-center py-2 rounded-lg hover:bg-gray-100 transition ease-in duration-250">
          Aplicar a vacante
        </button>
      </div>
    </div>
  );
};

export default JobPosts;
