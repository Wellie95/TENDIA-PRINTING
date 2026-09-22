import SectionHeading from "../components/SectionHeading";
import QuoteForm from "../components/QuoteForm";

export default function Contact(){
  return <>
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow pill">LET'S TALK</span>
        <h1>Tell us what you<br/><span>want to print.</span></h1>
        <p>Send a quick request on WhatsApp and we'll take it from there.</p>
      </div>
    </section>
    <section className="section" id="quote">
      <div className="container contact-grid">
        <div>
          <SectionHeading eyebrow="GET A QUOTE" title="Let's make your idea print-ready." text="Include your size, quantity, artwork details and deadline if you know them."/>
          <div className="contact-info">
            <a href="https://wa.me/27754439922" target="_blank" rel="noreferrer">
              <b>WhatsApp</b><span>075 443 9922</span>
            </a>
            <div><b>Location</b><span>Randfontein, Gauteng</span></div>
          </div>
        </div>
        <QuoteForm/>
      </div>
    </section>
  </>;
}