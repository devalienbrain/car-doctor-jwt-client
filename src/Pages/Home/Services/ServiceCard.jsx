import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="border border-black rounded-lg">
      <img className="w-full h-72 cover" src={img} />
      <div className="p-5 flex flex-col space-y-5">
        <h3 className="font-black">{title}</h3>
        <p className="text-red-600 font-bold">Price: {price} Tk</p>
        <Link to={`/checkout/${_id}`}>
          <button className="w-1/2 mx-auto px-3 py-2 bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 hover:font-black rounded-3xl border-blue-600 border drop-shadow-2xl">
            BOOK Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
