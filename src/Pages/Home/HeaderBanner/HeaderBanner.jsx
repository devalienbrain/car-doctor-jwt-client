import img from "../../../../public/Resources/bannerBg.jpg";
// import bg from "../../../../public/Resources/bannerImg.png";
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
        height: `100vh`,
      }}
    >
      <div className="hero-overlay bg-opacity-10">
        <NavBar></NavBar>
        {/* <img className="w-full object-cover" src={img} alt="" /> */}
      </div>
      <div className="container mx-auto p-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="mb-5 text-xl md:text-3xl text-white font-black">
            EAT HEALTHY
          </h1>
          <h3
            className="mb-5 text-red-600 text-3xl md:text-4xl uppercase font-black bg-gradient-to-r from-purple-500 to-pink-800 bg-clip-text text-transparent
"
          >
            You are what you eat! so dont be fast cheap easy or fake
          </h3>
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;
