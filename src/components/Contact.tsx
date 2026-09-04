import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:tasjidhasansafayet@gmail.com" data-cursor="disable">
                tasjidhasansafayet@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/safayet200"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            {/* LinkedIn - hidden for now */}
            {/* <a
              href="https://www.linkedin.com/in/safayet"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a> */}
            {/* Twitter - hidden for now */}
            {/* <a
              href="https://x.com/safayet"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a> */}
            <a
              href="https://www.instagram.com/import_safayet"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Safayet</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
