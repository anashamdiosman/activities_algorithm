import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import rootReducer from "./redux/store";
import thunk from "redux-thunk";
import "./style/index.scss";

const store = createStore(rootReducer, applyMiddleware(thunk));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
