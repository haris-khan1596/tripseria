import React, { useState } from "react";
import './CSS/contact.css';

function Contact() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log("Question:", question);
    // Reset form field
    setQuestion("");
  };

  return (
    <section id="contact">
      <div className="side">
        <h4>Contact Us</h4>
        <h2>Ask Any Question?</h2>
      </div>
      <div className="contacts">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Tell me about your company?"
            ></textarea>
          </div>
          <div id="email-sub"><i class="bi bi-question-circle"></i><input type='text' placeholder="Enter your Email"/><button>Contact Us</button></div>
        </form>
      </div>
      <hr />
    </section>
  );
}

export default Contact;
