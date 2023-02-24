import React from "react";
import "./contact.css";
import resumeZimmer from "/public/resumeZimmer.pdf";
const Contact = () => {
    
    function downloadResume() {
        const link = document.createElement('a');
        link.href = resumeZimmer;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

  return (
    <div id="contact-container">
      <div className="contact-wrapper">
        <section className="top-section-contact">
          I'm excited to bring my skills and experience to your project and help
          bring your vision to life through clean, efficient, and effective
          code.
          <div>Let's work together to build something great!</div>
        </section>
        <section className="middle-section-contact">
            <a href="https://www.linkedin.com/in/zimmerkennedy/" target="_blank">
            <img className="contact-image" src="/miscImg/linkedInLogo.png" alt="linkedIn"/>
            </a>
            <a href="https://github.com/ZimmerKennedy" target="_blank">
            <img className="contact-image" src="/miscImg/githubLogo.png" alt="github"/>
            </a>
            <img className="contact-image" src="/miscImg/resumeLogo.png" alt="resume" onClick={downloadResume}/>

        </section>
        <section className="bottom-section-contact">There</section>
      </div>
    </div>
  );
};

export default Contact;
