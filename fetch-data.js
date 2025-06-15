async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = ''; // To Clear previous data

        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name}, ${user.username}`;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList);
        
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Error fetching data: ' + error.message;
    }
    
}
document.addEventListener("DOMContentLoaded", fetchUserData);