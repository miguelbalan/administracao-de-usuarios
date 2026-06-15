import { searchPermission } from "./_api/searchPermission.js";

let dropDown = document.getElementById("input-permission");

searchPermission().then(objPermission => {
    objPermission.forEach(element => {
        dropDown.innerHTML += `<option value="${element["id"]}">${element["name"]}</option>`;
    });
})