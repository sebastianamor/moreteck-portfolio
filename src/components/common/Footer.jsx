import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">

          <span className="footer-logo">
            &lt; M T /&gt; ;)
          </span>

          <h3>
            MORETECK
          </h3>

          <p>
            Moreira Technologies
          </p>

        </div>


        <div className="footer-links">

          <a
  href="https://www.linkedin.com/in/sebastian-jacob-moreira-vergara-7b76717a/"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn ↗
</a>

          <a
            href="https://github.com/sebastianamor"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

        </div>


        <div className="footer-bottom">

          <span>
            &gt; SYSTEM_STATUS: ONLINE
          </span>

          <span>
            © 2026 Sebastián Moreira
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
