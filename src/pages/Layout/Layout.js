import Footer from "../components/Footer";
import Navber from "../navber/Navber";


 
export default function Layout({ children }) {
  return (
    <>
      <Navber />
      <main>{children}</main>
      <Footer />
    </>
  )
}