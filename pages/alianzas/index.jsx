import Layout from "../../components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Nav from "../../components/Breadcrumbs";

const alianzas = () => {
  return (
    <Layout>
      <Head>
        <title>Addition - Alianzas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <div
          className="bg-no-repeat bg-cover relative h-[300px] flex items-center"
          style={{
            backgroundImage: `url(/img/alianzas/portada-alianzas.png)`,
          }}
      />
    </div>
    <section className="flex w-full h-[200px] justify-center items-center">
        <h3 className="text-[#EA5076] text-5xl font-comm font-bold">Proximamente</h3>
    </section>
    </Layout>
  )
}

export default alianzas