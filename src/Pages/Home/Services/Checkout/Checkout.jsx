import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Checkout = () => {
  const serviceData = useLoaderData();
  // console.log(serviceData);
  const { _id, title } = serviceData;

  const user = useContext(AuthContext);
  // console.log(user.user);
  const handleCheckoutOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const buyer = {
      // service_id: _id,
      // service_title: title,
      firstName,
      lastName,
      phone,
      email,
      message,
    };
    console.log(buyer);

    fetch("http://localhost:3000/buyers/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div>
        <h1 className="py-10 font-bold text-red-700 text-xl">
          Checkout: {title}
        </h1>

        <form onSubmit={handleCheckoutOrder}>
          <div className="w-2/3 mx-auto bg-base-200 p-10 flex flex-col my-3 rounded-md">
            <div className="flex flex-col md:flex-row gap-3 py-3 w-full">
              <div className="w-full md:w-1/2">
                <input
                  className="w-full p-5 rounded-md"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full md:w-1/2">
                <input
                  className="w-full p-5 rounded-md"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 py-3 w-full">
              <div className="w-full md:w-1/2">
                <input
                  className="w-full p-5 rounded-md"
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                />
              </div>
              <div className="w-full md:w-1/2">
                <input
                  className="w-full p-5 rounded-md"
                  type="text"
                  name="email"
                  defaultValue={user?.user?.email}
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="py-3 w-full">
              <input
                className="w-full p-5 rounded-md h-24"
                type="text"
                name="message"
                placeholder="Write Your Message Here"
              />
            </div>
            <div className="pt-5 w-full">
              <button className="w-full px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-2xl drop-shadow-xl hover:bg-red-900">
                Confirm Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
