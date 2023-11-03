import FactsSection from "./FactsSection/FactsSection";
import FaqSection from "./FaqSection/FaqSection";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import HappyClientsSection from "./HappyClients/HappyClientsSection";
import HeaderBanner from "./HeaderBanner/HeaderBanner";
import LogosSection from "./LogoSection/LogoSection";
import Services from "./Services/Services";
import VideoCompo from "./VideoCompo/VideoCompo";

const Home = () => {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <div className="container mx-auto">
        <FactsSection></FactsSection>
        <Services></Services>
      </div>

      <FeaturedProducts></FeaturedProducts>

      <div className="container mx-auto">
        <HappyClientsSection></HappyClientsSection>
        <FaqSection></FaqSection>
        <VideoCompo></VideoCompo>
        <LogosSection></LogosSection>
      </div>
    </div>
  );
};

export default Home;
