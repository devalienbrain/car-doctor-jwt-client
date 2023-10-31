import { Link } from "react-router-dom";
import arrow from "../../../../public/Resources/arrow-forward.svg";
const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="hover:border hover:border-blue-500 hover:shadow-2xl rounded-xl">
      <img className="w-full h-72 cover rounded-t-xl" src={img} />
      <div className="p-5 flex flex-col space-y-5">
        <h3 className="font-black">{title}</h3>
        <p className="text-red-600 font-bold">Price: {price} Tk</p>
        <Link to={`/checkout/${_id}`}>
          <button className="w-1/2 mx-auto bg-blue-600  hover:bg-blue-700 hover:font-black border-blue-600 border drop-shadow-2xl flex items-center px-6 py-3 gap-2 rounded-full text-white text-lg font-bold">
            BOOK Now
            <img src={arrow} alt="Arrow" className="w-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
