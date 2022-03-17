import React from "react";
import * as Icons from "react-icons/fa";
import "../../styles/navbar.scss";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <a className="link" href="http">
              Gmail
            </a>
          </li>
          <li>
            <a className="link" href="https">
              Images
            </a>
          </li>

          <li>
            <div className="circle-shadow">
              <a className="icon" href="https://">
                <Icons.FaBars />
              </a>
            </div>
          </li>
          <li>
            <div className="circle-shadow">
              <a className="user" href="http">
                <span>J</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
