import { getUser } from "./_api/getUser.js";
import { searchPermission } from "./_api/searchPermission.js";

const userList = document.querySelector('.user-list');

function addUser(id, name, position, permission) {
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
            <div id="${id}" class="update-button">
                <img class="icon" src="_assets/lapis.png">
            </div>

            <div id="${id}" class="delete-button">
                <img class="icon" src="_assets/remover-usuario.png">
            </div>
        </div>
    </li>
    `);
}

export async function updateView() {
    userList.innerHTML = `<li id="button-add-user" class="add-user" >
                    <a  id="button-add-user" class="add-user" style="width: 100%; height: 100%; color: gray;">+</a>
                </li>`;
    
    let userArray = await getUser();
    let permissionArray = await searchPermission();

    let permission_table = {}
    permissionArray.forEach(element => {
        permission_table[element["id"]] = element["name"]
    })

    userArray.forEach(element => {
        addUser(
            element["id"],
            element["name"],
            element["position"],
            permission_table[element["permission"]]
        );
    });

    return true;
}

