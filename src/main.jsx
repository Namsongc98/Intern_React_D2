import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StoreProvide from "./store/StoreProvide.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StoreProvide>
      <App />
    </StoreProvide>
  </Provider>
);
