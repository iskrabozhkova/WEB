
const formElement = document.getElementById('form-container');
const btnUsers = document.getElementById('btn-users');

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = document.getElementById('name-input').value;
    const ageValue = document.getElementById('age-input').value;
    console.log(nameValue);

    const data = {
        name: nameValue,
        age: ageValue
    }

    fetch('../backend/post-data.php', {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => console.log(res))
})

btnUsers.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {
        const olLi = document.getElementById('list');
        data.forEach(user => {
            const liEl = document.createElement('li');
            liEl.innerText = user.name;
            olLi.appendChild(liEl);
        })
    });
})