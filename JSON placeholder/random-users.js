const loadRandomUsers = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => randomUsersContainer(data.results))
}


const randomUsersContainer = (users) => {
    const randomUsers = document.getElementById('random-users');
    for (const user of users) {
        const usersDiv = document.createElement('div');
        usersDiv.classList.add('users')
        usersDiv.innerHTML = `
        <img src="${user.picture.large}" alt="">
        <h3>User Name: ${user.name.first}</h3>
        <h5>Email: ${user.email}</h5>
        <h5>Phone: ${user.phone}</h5>

        <h5>Location: ${user.location.city} ${user.location.country}</h5>
        
    
        `;
        randomUsers.appendChild(usersDiv)
    }

}
loadRandomUsers()