import styles from "../styles/contact.module.scss";
import { Fade } from "react-reveal";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (ev) => {
    ev.preventDefault();
    emailjs
      .sendForm(
        "service_v8eywx6",
        "template_vrbisro",
        ev.target,
        "user_3IGxYKsaWpDLDtc6FaRt6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    ev.target.reset();
  };
  return (
    <section className={styles.big_section} id="contact">
      <Fade clear distance={"50px"} delay={300} duration={1000} count={1}>
        <h3>Get in Touch!</h3>
      </Fade>
      <Fade clear distance={"50px"} delay={900} duration={1000} count={1}>
        <p>
          Got a question, proposal or project or want to work together on
          something? Feel free to reach out.
        </p>
      </Fade>
      <Fade right delay={1200} distance={"20px"} count={1} duration={1000}>
        <div>
          <div></div>
          <form onSubmit={sendEmail}>
            <div>
              <label>
                Name
                <input type="text" name="from_name" />
              </label>
            </div>
            <div>
              <label>
                Email Address
                <input type="email" name="from_email" />
              </label>
            </div>
            <div>
              <label>
                Message
                <textarea style={{ height: "100px" }} name="message"></textarea>
              </label>
            </div>
            <span className={styles.btn}>
              <div style={{ margin: 0 }}>Send Message</div>
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enableBackground="new 0 0 1000 1000"
                xmlSpace="preserve"
              >
                <g>
                  <g transform="matrix(1 0 0 -1 0 1008)">
                    <path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z" />
                  </g>
                </g>
              </svg>
              <input type="submit" name="submit" value="Send Message" />
            </span>
          </form>
        </div>
      </Fade>
    </section>
  );
};

export default Contact;
