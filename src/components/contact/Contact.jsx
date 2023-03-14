import React, { useState } from "react";
import "./contact.css";
import resumeZimmer from "/resumeZimmer.pdf";
const Contact = () => {
    const [showImage, setShowImage] = useState(false); 
    const handleClick = () => {
      setShowImage(true);
    };
  
    const handleClose = () => {
      setShowImage(false);
    };

    function downloadResume() {
        const link = document.createElement('a');
        link.href = resumeZimmer;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      function sendEmail() {
        window.location.href = "mailto:kennedyzimmer00@gmail.com"
      }

  return (
    <div id="contact-container">
      <div id="contact-wrapper">
        <section id="top-section-contact">
          I'm excited to bring my skills and experience to your project and help
          bring your vision to life through clean, efficient, and effective
          code.
          <div>Let's work together to build something great!</div>
        </section>
        <div id="get-in-touch">
          Get in Touch
        </div>
        <section id="middle-section-contact">
            <a href="https://www.linkedin.com/in/zimmerkennedy/" target="_blank">
            <img className="contact-image" src="/miscImg/linkedInLogo.png" alt="linkedIn"/>
            </a>
            <a href="https://github.com/ZimmerKennedy" target="_blank">
            <img className="contact-image" src="/miscImg/githubLogo.png" alt="github"/>
            </a>
            <img
        className="contact-image"
        src="/miscImg/resumeLogo.png"
        alt="resume"
        onClick={handleClick}
      />
      {showImage && (
  <div className="resume-preview">
    <div className="preview-content">
      <div className="close-icon" onClick={handleClose}>
        Exit
      </div>
      <div className="download-icon" onClick={downloadResume}>
        Download
      </div>
      <img
        src="/resumeFirstPage.png"
        alt="resume preview"
      />
    </div>
  </div>
)}
        </section>
        <section id="bottom-section-contact">
          <div id="contact-me" onClick={sendEmail}>
          Contact Me
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
