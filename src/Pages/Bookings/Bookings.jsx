import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingCard from "./BookingCard";

import bg from "../../../public/Resources/cool-background.png";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:3000/buyers?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  return (
    <div style={{ backgroundImage: `url( ${bg})` }}>
      <div className="flex flex-col gap-12 my-10 p-10">
        {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking}></BookingCard>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
