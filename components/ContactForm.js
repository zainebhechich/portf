import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

// Form validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name should be at least 3 characters long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .min(10, 'Message should be at least 10 characters long')
    .required('Message is required')
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    setIsLoading(true);  // Show loading animation
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // EmailJS service ID
        'YOUR_TEMPLATE_ID', // EmailJS template ID
        values, // Form data
        'YOUR_USER_ID' // EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          resetForm();
          setIsLoading(false);  // Hide loading animation
        },
        (error) => {
          console.error(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="success-message">Your message has been sent successfully!</div>
      ) : (
        <Formik
          initialValues={{ name: '', email: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label htmlFor="name">Your Name</label>
              <Field type="text" id="name" name="name" placeholder="Enter your name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <Field type="email" id="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <Field
                as="textarea"
                id="message"
                name="message"
                placeholder="Enter your message"
              />
              <ErrorMessage name="message" component="div" className="error" />
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default ContactForm;
