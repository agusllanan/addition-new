import "../styles/global.css";
import 'nextjs-breadcrumbs/dist/index.css';
// import firebaseConfig from '../firebase.js'
// import { FirebaseAppProvider } from "reactfire";

function MyApp({ Component, pageProps }) {
  return (
    // <FirebaseAppProvider firebaseConfig = { firebaseConfig }>
     <Component {...pageProps} />
    // </FirebaseAppProvider>
  )
}

export default MyApp
