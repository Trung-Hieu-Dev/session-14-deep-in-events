const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
    event.target.disabled = true;
    console.log(event);
}

buttons.forEach((button) => {
    button.addEventListener('click', buttonClickHandler);
})