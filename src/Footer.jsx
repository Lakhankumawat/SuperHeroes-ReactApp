import React from "react";
import "./styles.css";
const FooterPage = () => {
  return (
    <footer>
      <div className="love">
        Made with{" "}
        <span role="img" aria-label="">
          ❤️
        </span>{" "}
        by Lakhan
      </div>
      <div className="copyright">Hover It © {new Date().getFullYear()}</div>
    </footer>
  );
};

export default FooterPage;
