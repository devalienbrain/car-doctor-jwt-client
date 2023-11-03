import foodVid from "../../../../public/Resources/food.mp4";
const VideoCompo = () => {
  return (
    <div className="relative">
      <video src={foodVid} autoPlay muted loop className="mx-auto"></video>
      <div className="flex flex-col justify-center items-center align-middle text-3xl font-black bg-transparent bg-black absolute bottom-10 left-1/4 right-auto z-50">
        <p>JOIN WITH US</p>
        <p>24/7 Call: +22 0 817 34 (UK GMT 11)</p>
      </div>
    </div>
  );
};

export default VideoCompo;
