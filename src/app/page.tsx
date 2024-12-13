import Navbar1 from "./components/Navbar1";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Shopcard from "./components/Shopcard";
import Bestproducts from "./components/Bestproducts";
import Greenproduct from "./components/Greenproduct";
import Neural from "./components/Neural";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-[414px] h-[1285px] laptop:w-[1440px] laptop:h-[6197px] mx-auto">
      <Navbar1 />
      <Navbar />
      <Header />
      <Shopcard />
      <Bestproducts />
      <Greenproduct />
      <Neural />
      <Blog />
      <Footer />
      
    </div>
    
  );
}
