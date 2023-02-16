const button = document.querySelector('button');
const div = document.querySelector('div');

const buttonClickHandler = event => {
    event.stopPropagation();
    
    console.log('Button clicked..')
    console.log(event);
}

const divClickHandler = event => {
    console.log('Div clicked..')
    console.log(event);
}

button.addEventListener('click', buttonClickHandler);
div.addEventListener('click', divClickHandler);