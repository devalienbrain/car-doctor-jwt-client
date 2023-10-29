import img from "../../../../public/Resources/cardoctor.png";
import arrow from "../../../../public/Resources/arrow-forward.svg";
function HeaderBanner() {
  return (
    <header className="bg-red-50">
      {/* Header Banner starts */}
      <section className="banner-container default-section-top-gap p-5">
        <div className="banner-contents text-left">
          <h1 className="common-header-large">Start Your Journey With Us</h1>
          <p className="common-header-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem <br />{" "}
            vestibulum sed scelerisque eros. Lectus faucibus.
          </p>
          <button className="common-btn">
            Prebook now
            <img src={arrow} />
          </button>
        </div>
        <div className="banner-img">
          <img src={img} className="w-full h-full object-contain" />
        </div>
      </section>
    </header>
  );
}

export default HeaderBanner;
