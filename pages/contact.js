import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section - Contact Page */}
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>If you have any questions or just want to say hello, feel free to contact me!</p>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Contact Me</h2>
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
