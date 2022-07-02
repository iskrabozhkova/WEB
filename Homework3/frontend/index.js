const form = document.getElementById('form-container');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const teacher = document.getElementById('teacher').value;
    const description = document.getElementById('description').value;
    const group = document.getElementById('group').value;
    const credits = document.getElementById('credits').value;

    const data = {
        name: name,
        teacher: teacher,
        description: description,
        group: group,
        credits: credits
    }


  
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // });

    // fetch('../backend/data.php')
    // .then(response => response.json())
    // .then(data => console.log(data));



    fetch('../backend/data.php', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    ;
})