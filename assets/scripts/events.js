// const listItems = document.querySelectorAll('li');

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     })
// });

const list = document.querySelector('ul');

list.addEventListener('click', event => {
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
})