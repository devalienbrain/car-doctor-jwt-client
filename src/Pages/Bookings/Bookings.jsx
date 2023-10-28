import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

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
    <div>
      {bookings.map((booking) => (
        <div>{booking._id}</div>
      ))}
    </div>
  );
};

export default Bookings;
