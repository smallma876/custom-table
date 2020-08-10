import React from "react";
import "./App.css";
import TableSmarth from "./components/TableSmarth";
import { Provider } from "react-redux";
import store from "./redux/store";
import Button from "./components/Button";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TableSmarth />
        <Button />
      </div>
    </Provider>
  );
}

export default App;
