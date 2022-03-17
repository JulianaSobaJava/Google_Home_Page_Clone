import React from "react";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content upper-footer">
        <p>Angola</p>
      </div>
      <div className="footer-content lower-footer">
        <ul className="lower-left-footer">
          <li>
            <a href="https://">About</a>
          </li>
          <li>
            <a href="https://">Advertising</a>
          </li>
          <li>
            <a href="https://">Business</a>
          </li>
          <li>
            <a href="https://">How Search Works</a>
          </li>
        </ul>

        <ul class="lower-right-footer">
          <li>
            <a href="https://">Privacy</a>
          </li>
          <li>
            <a href="https://">Terms</a>
          </li>
          <li>
            <a href="https://">Settings</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
