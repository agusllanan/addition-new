import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Navbar = ({ toggle }) => {
  return (
    <Menu
      className="flex fixed space-x-3 items-center justify-between bg-white shadow-md h-20 font-comm w-full z-50"
      as="div"
    >
      {({ open }) => (
        <Fragment>
          <Link href="/">
            <a className="ml-8">
              <img className="w-48" src="/img/logo.png"></img>
            </a>
          </Link>
          <div className="px-4 cursor-pointer lg:hidden" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-brink-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="pr-8 lg:flex hidden lg:items-center">
            <Link href="/">
              <a className="mr-5 text-sm hover:text-brink-pink-600 font-mont">
                INICIO
              </a>
            </Link>
            <Link href="/nosotros">
              <a className="mr-3 text-sm hover:text-brink-pink-600 font-mont">
                NOSOTROS
              </a>
            </Link>
            <Menu.Button className="relative inline-flex justify-center items-center w-full rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-keppel-500 focus-visible:ring-opacity-75 lg:px-2 lg:py-2 mr-2 ">
              <Link href="#">
                <a className="text-sm hover:text-brink-pink-600 divide-y-2 divide-keppel-600 font-mont">
                  SERVICIOS
                </a>
              </Link>
              <ChevronDownIcon
                className="w-5 h-5 ml-1 text-brink-pink-600 hover:text-violet-500"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              show={open}
              enter="transform transition duratin-100 ease-in"
              enterfrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-[450px] top-[70px] mt-2 flex flex-col z-20 w-auto h-auto rounded-md shadow-xl bg-white ring-1 ring-brink-pink-600 ring-opacity-5 focus:outline-none justify-center p-2"> 
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-brink-pink-200 text-brink-pink-600"
                              : "text-brink-pink-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/servicios/diversidad-inclusion">
                            Diversidad e Inclusión
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-brink-pink-200 text-brink-pink-600"
                              : "text-brink-pink-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/servicios/gestion-recursos-humanos">
                             Gestión de Recursos Humanos
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                                        <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-brink-pink-200 text-brink-pink-600"
                              : "text-brink-pink-600"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/servicios/coaching-laboral">
                            Coaching Laboral
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
              </Menu.Items>
            </Transition>
            <Link href="/alianzas">
              <a className="mr-5 text-sm hover:text-brink-pink-600 font-mont">
                ALIANZAS
              </a>
            </Link>
            <Link href="/bolsa-de-trabajo">
              <a className="mr-5 text-sm hover:text-brink-pink-600 font-mont whitespace-nowrap">
                BOLSA DE TRABAJO
              </a>
            </Link>
            <Link href="/blog">
              <a className="mr-5 text-sm hover:text-brink-pink-600 font-mont">
                BLOG
              </a>
            </Link>
            <Link href="/contacto">
              <button className="btn">
                CONTÁCTANOS
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          </div>
        </Fragment>
      )}
    </Menu>
  );
};
export default Navbar;
