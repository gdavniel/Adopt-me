import React from 'react'
import {render} from 'react-dom'
import Pet from './Pet';

const App = () => {
//   return React.createElement("div", { id: "id" }, [
//     React.createElement("h1", {}, "Adopt me"),
//     React.createElement(Pet, { name: "carlos ", animal: "dog" }),
//     React.createElement(Pet, { name: "luna", animal: "dog" }),
//     React.createElement(Pet, { name: "mia", animal: "cat" })
//   ]);

// parentesis en return => decirle al return que leta todo como una linea 

    return (
        <div>
            <h1>Adopt me</h1>
            <Pet name={'carlos'} animal={'cat'}/>
            <Pet name={'juan'} animal={'dog'}/>
            <Pet name={'luna'} animal={'cat'}/>
        </div>
    )
};

render(<App/>, document.getElementById("root"));
