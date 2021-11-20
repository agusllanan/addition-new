import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Navbar = ({ toggle }) => {
  return (
    <Menu
      className="flex space-x-3 items-center justify-between bg-white relative shadow-sm h-20 font-comm"
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
              <Menu.Items className="origin-top-right absolute right-12 top-20 mt-2 flex flex-col z-20 w-auto h-auto rounded-md shadow-xl bg-white ring-1 ring-brink-pink-600 ring-opacity-5 focus:outline-none justify-center">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "text-keppel-600" : "text-brink-pink-600"
                      } group font-bold flex rounded-md items-center w-full px-2 py-2 text-sm justify-center`}
                    >
                      <Link href="/servicios">SERVICIOS</Link>
                    </button>
                  )}
                </Menu.Item>
                <div className="py-1 px-1 flex flex-row">
                  <div className="">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-brink-pink-200 text-brink-pink-600"
                              : "text-text-brink-pink-600"
                          } group font-bold flex rounded-md items-center w-full px-2 py-2 text-sm justify-center`}
                        >
                          <Link href="/climaLaboral">CLIMA LABORAL</Link>
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
                          <Link href="/climaLaboral/estudios-clima-laboral">
                            ESTUDIOS CLIMA LABORAL
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
                          <Link href="/climaLaboral/auditorias-nom-035">
                            ASESORÍA EN NOM-035-STPS-2018 y NMX-R-025-SCFI-2015
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
                          <Link href="/climaLaboral/consultorias-capacitaciones">
                            CONSULTORÍAS Y CAPACITACIÓN
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-2">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-brink-pink-200 text-brink-pink-600"
                              : "text-brink-pink-600"
                          } group font-bold flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/diseno-automatizacion-procesos">
                            DISEÑO Y AUTOMATIZACIÓN DE PROCESOS
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
                          <Link href="/diseno-automatizacion-procesos/nivel1-desing-deploy">
                            NIVEL 1 - DESING & DEPLOY
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
                          <Link href="/diseno-automatizacion-procesos/nivel2-create-do">
                            NIVEL 2 - CREATE & DO
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
                          <Link href="/diseno-automatizacion-procesos/nivel3-project-management">
                            NIVEL 3 - PROJECT MANAGEMENT
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-brink-pink-200 text-brink-pink-600"
                              : "text-brink-pink-600"
                          } group font-bold justify-center flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          <Link href="/six-sigma">SIX SIGMA</Link>
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
                          <Link href="/six-sigma/basic-quick-smart-trainings">
                            BASIC QUICK SMART TRAININGS
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
                          <Link href="/six-sigma/nivel1-lean-6sigma-white-belt">
                            NIVEL 1 - WHITE BELT
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
                          <Link href="/six-sigma/nivel2-lean-6sigma-yellow-belt">
                            NIVEL 2 - YELLOW BELT
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
                          <Link href="/six-sigma/nivel3-lean-6sigma-green-belt">
                            NIVEL 3 - GREEN BELT
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
                          <Link href="/six-sigma/nivel4-lean-6sigma-black-belt">
                            NIVEL 4 - BLACK BELT
                          </Link>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
            <Link href="/aprendizaje">
              <a className="mr-5 text-sm hover:text-brink-pink-600 font-mont">
                ALIANZAS
              </a>
            </Link>
            <Link href="/aprendizaje">
              <a className="mr-5 text-sm hover:text-brink-pink-600 font-mont">
                BOLSA DE TRABAJO
              </a>
            </Link>
            <Link href="/blog">
              <a className="mr-5 text-sm hover:text-brink-pink-600 font-mont">
                BLOG
              </a>
            </Link>
            <Link href="/contactanos">
              <button className="btn">
                CONTÁCTANOS
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
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
