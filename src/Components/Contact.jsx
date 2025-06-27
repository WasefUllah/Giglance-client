import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-center min-h-[500px]">
      <h2 className="text-3xl font-bold mb-4 text-primary">Contact Us</h2>
      <p className="mb-6">
        Have questions or feedback? We'd love to hear from you.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
