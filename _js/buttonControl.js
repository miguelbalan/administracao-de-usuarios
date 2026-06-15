import { createUser } from "./_api/createUser.js";
import { deleteUser } from "./_api/deleteUser.js";
import { updateView } from "./viewUser.js";
import { showCustomConfirm } from "./confimScreen.js"; 

export function buttonFunctionality() {
    let deleteButton = document.getElementsByClassName("delete-button");

    let i = 0;
    while (true) {
        let currButton = deleteButton.item(i);

        if (currButton == null) {
            break;
        }

        currButton.addEventListener("click", async function () {
            const userConfirmed = await showCustomConfirm();
            
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

        let createButton = document.getElementById("button-add-user");

        createButton.addEventListener("click", async function () {
            const userConfirmed = await showCustomConfirm();
            
            if (userConfirmed) {
                deleteUser(currButton["id"]).then(resp => {
                    if (resp == false) {
                        alert("Failed Request");
                    }
                    location.reload();
                });
            }
        });
    }
}
