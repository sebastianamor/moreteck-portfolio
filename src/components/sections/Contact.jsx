import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-header">

        <span className="contact-tag">
          &gt; CONTACT.exe
        </span>

        <h2>
          Let's Build Something
        </h2>

        <p>
          Have an idea, a project or just want
          to talk about technology?
        </p>

      </div>


      <div className="contact-terminal">

        <div className="contact-terminal-header">
          <span>MORETECK CONNECTION</span>
          <span>● ● ●</span>
        </div>


        <div className="contact-terminal-body">

          <p className="terminal-status">
            <span>&gt;</span>
            CONNECTION_STATUS:
            <strong> ONLINE</strong>
          </p>


          <div className="contact-links">

            <a
              href="mailto:TU_EMAIL_AQUI"
              className="contact-link"
            >
              <span className="contact-label">
                EMAIL
              </span>

              <span className="contact-value">
                Send Message ↗
              </span>
            </a>


            <a
              href="https://github.com/sebastianamor"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-label">
                GITHUB
              </span>

              <span className="contact-value">
                sebastianamor ↗
              </span>
            </a>

          </div>


          <p className="terminal-waiting">
            &gt; awaiting_connection...
            <span className="terminal-cursor">█</span>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Contact;