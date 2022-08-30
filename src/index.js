import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import PhoneDirectory from "./RevisionPhoneDirectory/PhoneDirectory";
import ShowSubscribers from "./RevisionPhoneDirectory/ShowSubscribers";
import AddSubscriber from "./RevisionPhoneDirectory/AddSubscriber";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<PhoneDirectory />
);
// import { StrictMode } from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";

// import store from "./store";
// import App from "./components/App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>,
//   rootElement
// );