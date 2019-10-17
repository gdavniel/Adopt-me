import React from 'react';

const Pet = ({ name, animal }) => {
    // return React.createElement("div", { id: "id" }, [
    //     React.createElement("h1", {}, name),
    //     React.createElement("h2", {}, animal)
    // ]);

    // se pone un div como envoltorio, porque el return solo puede devolver 1 cosa, no 2 resltados
    // se puede usar fragments
    
    return (
        <div>
            <h1>{name}</h1>
            <h2>{animal}</h2>
        </div>
    )
};

export default Pet;
