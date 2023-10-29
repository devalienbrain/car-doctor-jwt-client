import alibaba from "../../../../public/Resources/Alibaba.svg";
import amazon from "../../../../public/Resources/Amazon.svg";
import daraz from "../../../../public/Resources/Daraz.svg";
import ebay from "../../../../public/Resources/Ebay.svg";
import rakuten from "../../../../public/Resources/Rakuten.svg";
import target from "../../../../public/Resources/Target.svg";
import walmart from "../../../../public/Resources/Walmart.svg";

function LogosSection() {
  return (
    <main className="default-margin">
      {/* Logos section starts */}
      <section className="logos-sec default-section-top-gap">
        <div className="logo-container">
          <Logo logoSrc={alibaba} />
          <Logo logoSrc={amazon} />
          <Logo logoSrc={daraz} />
          <Logo logoSrc={ebay} />
          <Logo logoSrc={rakuten} />
          <Logo logoSrc={target} />
          <Logo logoSrc={walmart} />
        </div>
      </section>
    </main>
  );
}

function Logo({ logoSrc, alt }) {
  return (
    <div className="logo">
      <img className="h-6" src={logoSrc} alt={alt} />
    </div>
  );
}

export default LogosSection;
