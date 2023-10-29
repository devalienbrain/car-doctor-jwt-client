import FactsSection from "./FactsSection/FactsSection";
import FaqSection from "./FaqSection/FaqSection";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import HappyClientsSection from "./HappyClients/HappyClientsSection";
import HeaderBanner from "./HeaderBanner/HeaderBanner";
import LogosSection from "./LogoSection/LogoSection";
import Services from "./Services/Services";
import "../Home/Styles/StyleHome.css";

const Home = () => {
  return (
    <div className="container mx-auto">
      <HeaderBanner></HeaderBanner>
      <FactsSection></FactsSection>
      <Services></Services>
      <FeaturedProducts></FeaturedProducts>
      <LogosSection></LogosSection>
      <HappyClientsSection></HappyClientsSection>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
