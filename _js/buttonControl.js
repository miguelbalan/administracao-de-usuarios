import { createUser } from "./_api/createUser.js";
import { deleteUser } from "./_api/deleteUser.js";
import { updateView } from "./viewUser.js";
import { showDeleteConfirm } from "./confimScreen.js";

export function buttonFunctionality() {
    let deleteButton = document.getElementsByClassName("delete-button");
    let createButton = document.getElementById("button-add-user");
    let submitButton = document.getElementById("create-button");

    submitButton.addEventListener("click", function () {
        const modal = document.getElementById('create-modal');

        let inputName = document.getElementById("input-name")["value"];
        let inputPwd = document.getElementById("input-pwd")["value"];
        let inputPosition = document.getElementById("input-position")["value"];
        let inputPermission = document.getElementById("input-permission")["value"];

        if (inputName == "" || inputPwd == "" || inputPosition == "" || inputPermission == "") {
            alert("Preencha todos os campos");
            return
        }

        createUser(inputName, inputPwd, inputPosition, inputPermission).then(resp => {
            modal.style.display = 'none'
            location.reload()
        });
    });

    createButton.addEventListener("click", async function () {
        const modal = document.getElementById('create-modal');
        modal.style.display = 'flex';
    });

    let i = 0;
    while (true) {
        let currButton = deleteButton.item(i);

        if (currButton == null) {
            break;
        }

        currButton.addEventListener("click", async function () {
            const userConfirmed = await showDeleteConfirm();

            if (userConfirmed) {
                deleteUser(currButton["id"]).then(resp => {
                    if (resp == false) {
                        alert("Failed Request");
                    }
                    location.reload();
                });
            }
        });
        i++;

    }
}
