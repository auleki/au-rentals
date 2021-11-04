import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./App.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
import { AuthModalContextProvider } from "./context/AuthModalContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthModalContextProvider>
      <Router>
        <App />
      </Router>
    </AuthModalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
