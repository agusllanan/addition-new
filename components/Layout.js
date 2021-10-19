import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Dropdown from "./Dropdown";
import { useState, useEffect} from "react";


export default function Layout({ children, title, description }) {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }

    useEffect(() =>{
        const hideMenu = () => {
            if(window.innerWidth > 1024 && isOpen) {
                setIsOpen(false);
                console.log("The nav menu is resized")
            }
        }

        window.addEventListener("resize", hideMenu);

        return () => {
            window.removeEventListener("resize", hideMenu);
        }
    })
    
    return (
    <div>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav>
        <Navbar isOpen={isOpen} toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        </nav>
        <main>{children}</main>
        <footer>
        <Footer />
        </footer>
    </div>
    );
}

Layout.defaultProps = {
    title : "Addition" ,
    description : "Este es un sitio web de Addition ",
};