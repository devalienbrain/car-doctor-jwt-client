import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const serviceData = useLoaderData();
  const { _id, title } = serviceData;

  console.log(serviceData);
  return (
    <>
      <div>
        <h1>Checkout: {title}</h1>
      </div>
    </>
  );
};

export default Checkout;
