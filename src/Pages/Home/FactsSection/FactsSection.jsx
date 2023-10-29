import ribbon from "../../../../public/Resources/ribon.png";
import projects from "../../../../public/Resources/projects.png";
import customers from "../../../../public/Resources/customers.png";
import email from "../../../../public/Resources/email.png";
function FactsSection() {
  return (
    <section className="facts-sec">
      <h3 className="common-h3">Some Facts</h3>
      <p className="common-p">
        There are many variations of passages of Lorem Ipsum available, but{" "}
        <br /> the majority have suffered alteration.
      </p>
      <div className="facts-card-container">
        <FactCard imageSrc={ribbon} number="54" title="Awards Winnings" />
        <FactCard imageSrc={projects} number="1458" title="Project Finished" />
        <FactCard imageSrc={customers} number="590" title="Clients Worked" />
        <FactCard imageSrc={email} number="22758" title="Emails Sent" />
      </div>
    </section>
  );
}

function FactCard({ imageSrc, number, title }) {
  return (
    <div className="facts-card">
      <img className="mx-auto" src={imageSrc} alt={title} />
      <h1 className="number">{number}</h1>
      <p>{title}</p>
    </div>
  );
}

export default FactsSection;
