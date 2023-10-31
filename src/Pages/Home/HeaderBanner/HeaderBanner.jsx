import img from "../../../../public/Resources/bannerBg.avif";
import arrow from "../../../../public/Resources/arrow-forward.svg";

function HeaderBanner() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${img})`,
        objectFit: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="hero-overlay bg-opacity-25"></div>
      <div className="hero-content text-left">
        <div className="flex-1">
          <h1 className="mb-5 text-2xl md:text-5xl text-white font-black">
            Enrich your life with an unforgettable yoga retreat
          </h1>
          <h3
            className="mb-5 text-red-600 text-5xl uppercase font-black bg-gradient-to-r from-purple-500 to-pink-800 bg-clip-text text-transparent
"
          >
            Yoga And Fitness Retreats By Dr. Fatiha
          </h3>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

export default HeaderBanner;
