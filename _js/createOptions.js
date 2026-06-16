import { searchPermission } from "./_api/searchPermission.js";

let createDropDown = document.getElementById("create-input-permission");
let updateDropDown = document.getElementById("update-input-permission");

searchPermission().then(objPermission => {
    objPermission.forEach(element => {
        createDropDown.innerHTML += `<option value="${element["id"]}">${element["name"]}</option>`;
        updateDropDown.innerHTML += `<option value="${element["id"]}">${element["name"]}</option>`;
    });
})
