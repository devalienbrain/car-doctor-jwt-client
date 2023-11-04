import NavBar from "../../components/Header/NavBar";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const countProducts = useLoaderData();
  // console.log(countProducts);
  const { count } = countProducts;
  const totalItems = count;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-center items-center p-10">
        <div>
          <div>
            Total Products: {totalItems} Items Per Page: {itemsPerPage} Total
            Pages: {totalPages}
          </div>
          <div className="border p-2 my-5">
            <label htmlFor="itemsPerPage">Select Items Per Page = </label>
            <select name="itemsPerPage" id="itemsPerPage">
              <option value="10">10</option>
              <option value="10">20</option>
              <option value="10">50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
