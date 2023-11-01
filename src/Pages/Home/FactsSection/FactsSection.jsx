import ribbon from "../../../../public/Resources/ribon.png";
import projects from "../../../../public/Resources/projects.png";
import customers from "../../../../public/Resources/customers.png";
import email from "../../../../public/Resources/email.png";
function FactsSection() {
  return (
    <section className="font-bold my-7">
      <h3 className="text-3xl py-7">Some Facts</h3>

      <div className="flex flex-col md:flex-row justify-around">
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
    <div className="p-20 border rounded-xl hover:shadow-xl hover:border-2">
      <img className="mx-auto" src={imageSrc} alt={title} />
      <h1 className="number">{number}</h1>
      <p>{title}</p>
    </div>
  );
}

export default FactsSection;
