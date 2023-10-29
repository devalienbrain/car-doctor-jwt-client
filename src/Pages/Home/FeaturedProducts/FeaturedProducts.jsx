import arrow from "../../../../public/Resources/arrow-forward.svg";
import feat from "../../../../public/Resources/featured.png";
function FeaturedProducts() {
  return (
    <section className="featured-container default-section-top-gap bg-red-300 p-5">
      <div className="featured-contents">
        <h2 className="common-header-avg">Featured products at one place</h2>
        <p className="common-header-small">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor <br /> do
          amet sint. Velit officia consequat duis enim velit mollit. <br />{" "}
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <button className="common-btn">
          Join Now
          <img src={arrow} />
        </button>
      </div>
      <div className="featured-img">
        <img src={feat} />
      </div>
    </section>
  );
}

export default FeaturedProducts;
