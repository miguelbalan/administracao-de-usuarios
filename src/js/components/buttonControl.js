import { createUser } from "../modules/users/createUser.js";
import { deleteUser } from "../modules/users/deleteUser.js";
import { updateUser } from "../modules/users/updateUser.js";

import { updateView } from "./viewUser.js";

import { showDeleteConfirm } from "./confimScreen.js";

export function buttonFunctionality() {
    let id = 0;

    let deleteButton = document.getElementsByClassName("delete-button");
    let updateButton = document.getElementsByClassName("update-button");

    let createButton = document.getElementById("button-add-user");
    let submitCreateButton = document.getElementById("submit-create-button");
    let submitUpdateButton = document.getElementById("submit-update-button")

    let closeCreateButton = document.getElementById("close-create-button");
    let closeUpdateButton = document.getElementById("close-update-button");

    
    createButton.addEventListener("click", async function () {
        const modal = document.getElementById('create-modal');
        modal.style.display = 'flex';
    });

    submitCreateButton.addEventListener("click", function () {
        const modal = document.getElementById('create-modal');

        let inputName = document.getElementById("create-input-name")["value"];
        let inputPwd = document.getElementById("create-input-pwd")["value"];
        let inputPosition = document.getElementById("create-input-position")["value"];
        let inputPermission = document.getElementById("create-input-permission")["value"];

        if (inputName == "" || inputPwd == "" || inputPosition == "" || inputPermission == "") {
            alert("Preencha todos os campos");
            return
        }

        createUser(inputName, inputPwd, inputPosition, inputPermission).then(resp => {
            if (resp["code"] == 200) {
                modal.style.display = 'none'
                location.reload()
            } else {
                alert(resp["message"])
            }
        });
    });

    submitUpdateButton.addEventListener("click", function () {
        const modal = document.getElementById('update-modal');

        let inputName = document.getElementById("update-input-name")["value"];
        let inputPwd = document.getElementById("update-input-pwd")["value"];
        let inputPosition = document.getElementById("update-input-position")["value"];
        let inputPermission = document.getElementById("update-input-permission")["value"];

        if (inputName == "" || inputPwd == "" || inputPosition == "" || inputPermission == "") {
            alert("Preencha todos os campos");
            return
        }

        updateUser(id, inputName, inputPwd, inputPosition, inputPermission).then(resp => {
            if (resp["code"] == 200) {
                modal.style.display = 'none'
                location.reload()
            } else {
                alert(resp["message"])
            }
        });
    });

    closeCreateButton.addEventListener("click", function () {
        const modal = document.getElementById('create-modal');
        modal.style.display = 'none';
    });

    closeUpdateButton.addEventListener("click", function () {
        const modal = document.getElementById('update-modal');
        modal.style.display = 'none';
    });

    let i = 0;
    while (true) {
        let currDelButton = deleteButton.item(i);
        let currUpdButton = updateButton.item(i);

        if (currDelButton == null || currUpdButton == null) {
            break;
        }

        currDelButton.addEventListener("click", async function () {
            const userConfirmed = await showDeleteConfirm();

            if (userConfirmed) {
                deleteUser(currDelButton["id"]).then(resp => {
                    if (resp == false) {
                        alert("Failed Request");
                    }

                    if (resp["code"] != 200) {
                        alert(resp["message"]);
                    }
                    location.reload();
                });
            }
        });

        currUpdButton.addEventListener("click", async function () {
            const modal = document.getElementById('update-modal');
            id = currUpdButton.id;

            modal.style.display = 'flex';
        });
        i++;
    }
}

