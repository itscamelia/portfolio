import React from "react";
import ReactDOM from "react-dom";

import { Header } from './components/header';
import { Menu } from './components/menu';

const App = () => {
  return <div>
    <Menu />
    <Header />
  </div>;
};

ReactDOM.render(<App />, document.getElementById("index"));
