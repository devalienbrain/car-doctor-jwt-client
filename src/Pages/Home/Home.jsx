import FactsSection from "./FactsSection/FactsSection";
import FaqSection from "./FaqSection/FaqSection";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import HappyClientsSection from "./HappyClients/HappyClientsSection";
import HeaderBanner from "./HeaderBanner/HeaderBanner";
import LogosSection from "./LogoSection/LogoSection";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <div className="container mx-auto">
        <Services></Services>
        <FactsSection></FactsSection>
      </div>

      <FeaturedProducts></FeaturedProducts>

      <div className="container mx-auto">
        <HappyClientsSection></HappyClientsSection>
        <FaqSection></FaqSection>

        <LogosSection></LogosSection>
      </div>
    </div>
  );
};

export default Home;
