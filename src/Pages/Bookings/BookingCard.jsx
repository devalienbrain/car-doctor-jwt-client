const BookingCard = ({ booking }) => {
  const { img, service_title, price } = booking; // Add curly braces for destructuring
  return (
    <>
      <div className="flex gap-12 items-center bg-yellow-200 p-5 border border-red-600">
        <div>
          <button>X</button>
        </div>
        <div>
          <img className="w-32" src={img} />
        </div>
        <div>
          <p>{service_title}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
