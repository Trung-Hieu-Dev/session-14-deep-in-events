const button = document.querySelector('button');

// Anonymous function
// button.onclick = function () {  
//     alert("click");
// }

const buttonClickHandler = () => {
    alert('Click');
}

const anotherButtonClickHandler = () => {
    console.log('Click');
}

// button.onclick = buttonClickHandler;

const boundFn = buttonClickHandler.bind(this); //bind() is optional in this case

button.addEventListener('click', boundFn);

setTimeout(() => {
    button.removeEventListener('click', boundFn);
},2000);