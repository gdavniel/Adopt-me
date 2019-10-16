const Pet = ({name, animal}) => {
    return React.createElement(
        'div',
        {id: 'id'},
        [
            React.createElement(
                'h1',
                {},
                name
            ),
            React.createElement(
                'h2',
                {},
                animal
            )
        ]
    )
}

const App = () => {
    return React.createElement(
        'div',
        {id: 'id'},
        [
            React.createElement(
            'h1',
            {},
            'Adopt me'
            ),
            React.createElement(Pet, {name: 'carlos ', animal: 'dog'}),
            React.createElement(Pet, {name: 'luna', animal: 'dog'}),
            React.createElement(Pet, {name: 'mia', animal: 'cat'})
        ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
