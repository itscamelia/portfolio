import React from "react";
import ReactDOM from "react-dom";

import { Header } from './components/header';
import { Menu } from './components/menu';
import { Sections } from './components/sections';

const App = () => {
  return <div>
    <Menu />
    <Header />
    <Sections />
  </div>;
};

ReactDOM.render(<App />, document.getElementById("index"));
