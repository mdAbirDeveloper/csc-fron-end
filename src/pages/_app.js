import "@/styles/globals.css";
import '../styles/project.css'
import Authentication from "./authentication/Authentication";
import Layout from "./Layout/Layout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Authentication><Layout><Component {...pageProps} /> </Layout></Authentication> );
}
