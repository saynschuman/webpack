import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Root from "./features/root/Root";
import store from "./store";
import rootSaga from "./store/sagas";
import { BrowserRouter } from "react-router-dom";

store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
