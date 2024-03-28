import logo from "./logo.svg";
import "./App.css";
import "./styles/skills.css";
import "./styles/about.css";

import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="svg">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 800"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,700 L 0,337 C 105.25384615384615,362.16282051282053 210.5076923076923,387.325641025641 284,367 C 357.4923076923077,346.674358974359 399.223076923077,280.8602564102564 457,281 C 514.776923076923,281.1397435897436 588.6,347.23333333333335 686,302 C 783.4,256.76666666666665 904.376923076923,100.20641025641027 983,29 C 1061.623076923077,-42.20641025641026 1097.8923076923077,-28.05897435897436 1167,-25 C 1236.1076923076923,-21.94102564102564 1338.0538461538463,-29.97051282051282 1440,-38 L 1440,700 L 0,700 Z"
            stroke="none"
            stroke-width="0"
            fill="#000000"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 350)"
          ></path>
        </svg>
      </div>
      <About />
      {/* <Skills /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
