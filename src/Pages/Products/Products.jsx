import { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import { useLoaderData } from "react-router-dom";
import { data } from "autoprefixer";

const Products = () => {
  const countProducts = useLoaderData();
  // console.log(countProducts);
  const { count } = countProducts;
  const totalItems = count;
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = [...Array(totalPages).keys()];
  // console.log(pages);

  const handleItemsPerPage = (e) => {
    console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
  };
  const [currentPage, setCurrenPage] = useState(0);
  // console.log(currentPage);

  const handleGoPrevPage = () => {
    if (currentPage > 0) {
      setCurrenPage(currentPage - 1);
    }
  };
  const handleGoNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrenPage(currentPage + 1);
    }
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:3000/products?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }, [currentPage, itemsPerPage]);

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
            <select
              name="itemsPerPage"
              id="itemsPerPage"
              onChange={handleItemsPerPage}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          {/* LOAD AND SHOW PRODUCTS SECTION STARTS */}
          <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map(({ id, image, name, category, price }) => {
                return (
                  <div key={id} className="card bg-base-100 image-full">
                    <figure>
                      <img src={image} alt="Product" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{name}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* LOAD AND SHOW PRODUCTS SECTION ENDS  */}
          <div className="flex justify-center gap-3 py-10">
            <button onClick={handleGoPrevPage}>Prev</button>
            {pages.map((page) => {
              // console.log(page);
              return (
                <button
                  className={currentPage === page ? "text-red-600" : ""}
                  onClick={() => setCurrenPage(page)}
                  key={page}
                >
                  {page}
                </button>
              );
            })}
            <button onClick={handleGoNextPage}>Next</button>
            {/* <p>Current: {currentPage}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
