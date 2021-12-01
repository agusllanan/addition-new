import Layout from "../../components/Layout";
import Head from "next/head";
import Nav from "../../components/Breadcrumbs";


const blog = () => {
  return (
    <Layout>
      <Nav />
      <Head>
        <title>Addition - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-[400px]">
          <h2>
            Bienvenido a nuestro Blog
          </h2>
        </div>
        
      </main>
    </Layout>
  );
};

export default blog;
