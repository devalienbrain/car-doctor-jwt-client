import alibaba from "../../../../public/Resources/Alibaba.svg";
import amazon from "../../../../public/Resources/Amazon.svg";
import daraz from "../../../../public/Resources/Daraz.svg";
import ebay from "../../../../public/Resources/Ebay.svg";
import rakuten from "../../../../public/Resources/Rakuten.svg";
import target from "../../../../public/Resources/Target.svg";
import walmart from "../../../../public/Resources/Walmart.svg";

function LogosSection() {
  return (
    <section className="container mx-auto">
      <h2 className="text-center text-4xl font-bold mb-6">
        Our Sponsor Partners
      </h2>
      <div className="p-7 flex justify-around align-middle items-center gap-3 border-b-1 border-t-1">
        <Logo logoSrc={alibaba} />
        <Logo logoSrc={amazon} />
        <Logo logoSrc={daraz} />
        <Logo logoSrc={ebay} />
        <Logo logoSrc={rakuten} />
        <Logo logoSrc={target} />
        <Logo logoSrc={walmart} />
      </div>
    </section>
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
