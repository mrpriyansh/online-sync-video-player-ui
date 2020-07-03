import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div>
      <section className="section_1">
        <h1 className="text-header">How can we help?</h1>
        <h2 className="text-header">Send us a message!</h2>
        <div className="div_main fl_row">
          <div className="div_lines">
            <h2 className="tc">Lines</h2>
            <p>
              Do nisi adipisicing ut dolore cupidatat nulla nostrud tempor sunt est ad aliqua duis
              duis sint dolor et nulla nulla.
            </p>
          </div>
          <div className="fl_column div_form">
            <div className="fl_row mrg">
              <div>
                <span>First Name</span>
                <br />
                <input type="text" className="br"></input>
              </div>
              <div className="mrg-lf">
                <span>Last Name</span>
                <br />
                <input type="text" className="br"></input>
              </div>
            </div>
            <div className="mrg">
              <span>E-Mail</span>
              <br />
              <input type="email" className="br"></input>
            </div>
            <div className="fl_column mrg">
              <div className="mrg">
                <span>Message</span>
                <br />
                <textarea className="txtbx br">Type your message here</textarea>
              </div>
              <div>
                <button className="btn">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
