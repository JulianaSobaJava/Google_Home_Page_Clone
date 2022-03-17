import * as Icons from "react-icons/fa";
import Footer from "./components/footer/footer";
import logo from "./logo.png";

import "./styles/app.scss";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <img src={logo} className="logo" alt="logo" />
          <div className="search-bar">
            <Icons.FaSearch className="fas" />
            <input id="search-input" className="search-input" type="text" />
            <Icons.FaKeyboard className="fas" />
            <Icons.FaMicrophone className="fas" />
          </div>
          <div className="search-btns">
            <button className="google-search-btn">Google Search</button>
            <button className="lucky-search-btn">I'm feeling Lucky</button>
          </div>
          <div className="language">
            <p>
              Google Offered in: <a href="http://"> Maiori</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
