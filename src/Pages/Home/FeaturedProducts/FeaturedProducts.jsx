import arrow from "../../../../public/Resources/arrow-forward.svg";
import feat from "../../../../public/Resources/featured.png";

function FeaturedProducts() {
  return (
    <section className="bg-yellow-500 my-10">
      <div className="container mx-auto py-16 flex justify-between items-center">
        <div className="flex-1 text-center md:text-left pr-32">
          <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
            Featured products at one place
          </h2>
          <p className="text-lg font-semibold mb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="flex items-center px-6 py-3 gap-2 rounded-full bg-pink-600 text-white text-lg font-bold">
            Join Now
            <img src={arrow} alt="Arrow" className="w-6" />
          </button>
        </div>
        <div className="featured-img max-w-lg">
          <img src={feat} alt="Featured Product" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
