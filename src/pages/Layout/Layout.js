import Footer from "../components/Footer";
import Navber from "../navber/Navber";


 
export default function Layout({ children }) {
  return (
    <>
      <Navber />
      <main className="lg:mt-0 md:mt-0">{children}</main>
      <Footer />
    </>
  )
}