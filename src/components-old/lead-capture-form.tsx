import React from "react";

const LeadCaptureForm = () => {
  return (
    <div className="lead-capture-form">
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" disabled />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="your@email.com"
            disabled
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Your message" disabled />
        </div>
        <button type="button" disabled>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
