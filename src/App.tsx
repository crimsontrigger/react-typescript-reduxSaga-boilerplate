import React, { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux";
import Loading from "./components/Loading";
import Main from "./navigation";

const App = () => {
  useEffect(() => {
    console.log(store);
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
