import q from "../../../../public/Resources/faq.png";
function FaqSection() {
  return (
    <section className="mt-16 mb-16 font-inter">
      <h2 className="font-black text-4xl text-center pb-16">
        Frequently Asked <span className="text-[#E76F51]">Questions</span>
      </h2>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={q} className="max-w-sm" alt="FAQ" />
          <div className="flex flex-col gap-2 text-xs">
            <FAQItem
              question="What are the most important things I should know about riding a bike?"
              answer="Safety First! Always obey the rules of the road. Obey all traffic signals, signs, and laws. Get in the mindset of “driving” your bike—not just “riding” your bike. This will help you be a more focused and legally compliant bike rider."
            />
            <FAQItem
              question="How can I tell if my helmet is old and I need a new one?"
              answer="Answer to the second question goes here."
            />
            <FAQItem
              question="My bike has been in storage, is it safe to ride?"
              answer="Answer to the third question goes here."
            />
            <FAQItem
              question="What rules should I follow when riding my bike?"
              answer="Answer to the fourth question goes here."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="collapse collapse-arrow card shadow-xl p-5">
      <input type="radio" name="my-accordion-2" checked="checked" />
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FaqSection;
