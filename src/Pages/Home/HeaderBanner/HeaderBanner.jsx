import img from "../../../../public/Resources/bannerBg.jpg";
import arrow from "../../../../public/Resources/arrow-forward.svg";
import NavBar from "../../../components/Header/NavBar";

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
      <div className="hero-overlay bg-opacity-25">
        <NavBar></NavBar>
      </div>
      <div>
        <div className="text-left">
          <div className="">
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
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;
