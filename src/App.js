import React from 'react'
import {render} from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement("div", { id: "id" }, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, { name: "carlos ", animal: "dog" }),
    React.createElement(Pet, { name: "luna", animal: "dog" }),
    React.createElement(Pet, { name: "mia", animal: "cat" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
