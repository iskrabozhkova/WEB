const form = document.getElementById('form-container');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const olEl = document.getElementById('list');
    const inputsId = ['name-input', 'age-input'];
    inputsId.forEach((inputId) => {
        const inputValue = document.getElementById(inputId).value;
        const liEl = document.createElement('li');
        liEl.innerText = inputValue;
        olEl.appendChild(liEl);
    })
})
