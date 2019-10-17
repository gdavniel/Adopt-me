import React from 'react';

const Pet = ({ name, animal }) => {
    return React.createElement("div", { id: "id" }, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal)
    ]);
};

export default Pet;
