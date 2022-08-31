function displayUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsersName(data))
}


function displayUsersName(data) {
    const ul = document.getElementById('user-name');
    for (user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}