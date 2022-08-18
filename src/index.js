// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";

// import App from "./Redux4/App";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <App />
// );
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);