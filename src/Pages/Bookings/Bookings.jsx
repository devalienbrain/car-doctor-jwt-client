import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingCard from "./BookingCard";

// import bg from "../../../public/Resources/cool-background.png";
import NavBar from "../../components/Header/NavBar";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:3000/buyers?email=${user?.email}`;
  // const url = `http://localhost:3000/buyers?email=man@manush.com`;

  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));

    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
  }, [url]);

  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col gap-12 my-10 p-10">
        {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking}></BookingCard>
        ))}
      </div>
    </>
  );
};

export default Bookings;
