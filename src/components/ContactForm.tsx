import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9o9bnxl",
        "template_bpxcvj1",
        form.current,
        "tWsZuQIUky0qwG50N",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  return (
    <div>
      <h2 className="text-4xl font-extrabold">Send me a email</h2>

      <form ref={form} className="mt-5 text-blue-dark" onSubmit={sendEmail}>
        <input
          className="bg-gray-50 border border-gray rounded-lg p-2"
          type="text"
          placeholder="Full Name"
          name="user_name"
          required
        />
        <br />
        <input
          className="mt-2  border-gray rounded-lg p-2"
          type="email"
          placeholder="Email"
          name="user_email"
          required
        />
        <br />
        <textarea
          name="message"
          className="mt-2  border-gray rounded-lg p-2"
          placeholder="Topic"
        />
        <br />
        <button
          className="bg-blue-primary text-white w-48 h-11 rounded-full mt-2 font-bold"
          type="submit"
        >
          Send Email
        </button>
      </form>
    </div>
  );
}

export default ContactForm;