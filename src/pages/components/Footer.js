import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Head Office</h6>
          <a className="link link-hover">Airport Road، Building 7, Level 1</a>
          <a className="link link-hover">Zone A, The Business Gate, Riyadh</a>
        </nav>
        <nav>
          <h6 className="footer-title">Inquiries</h6>
          <a className="link link-hover">For any inquiries, questions or commendations, please call:</a>
          <a className="link link-hover">+966533360688 or fill out the following form</a>
          <a className="link link-hover">info@cities-systems.sa</a>
          <a className="link link-hover">Tel: +966505580899</a>
          <a className="link link-hover">Fax: +966533360688</a>
        </nav>
        <nav>
          <h6 className="footer-title">Employment</h6>
          <a className="link link-hover">To apply for a job with Cities Systems Corporation,</a>
          <a className="link link-hover"> please send a cover letter together with your C.V. to: info@cities-systems.sa</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
