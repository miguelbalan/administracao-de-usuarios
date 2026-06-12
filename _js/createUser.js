import { getUser } from "./_api/getUser.js";

function addUser(name, position, permission) {
    const userList = document.querySelector('.user-list');

    userList.insertAdjacentHTML('afterbegin', `
    <li class="user-entry">
        <div class="text-entry">
            <div class="labels">
                <p class="label-name">Nome:</p>
                <p class="name">${name}</p>
            </div>

            <div class="labels">
                <p class="label-position">Cargo:</p>
                <p class="position">${position}</p>
            </div>

            <div class="labels">
                <p class="label-permission">Permissões:</p>
                <p class="permission">${permission}</p>
            </div>
        </div>

        <div class="buttons">
            <div class="update-button">
                <img class="icon" src="_assets/lapis.png">
            </div>

            <div class="delete-button">
                <img class="icon" src="_assets/remover-usuario.png">
            </div>
        </div>
    </li>
    `);
}

getUser().then(userArray => {
    userArray.forEach(element => {
        addUser(
            element["name"],
            element["position"],
            element["permission"]
        );
    });
});