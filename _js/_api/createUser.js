
let api = location.protocol + "//localhost/administracao-de-usuarios/_php/";
export async function createUser(name, position, permission) {
    let resp = await fetch(api + `createUser.php?name=${name}&position=${position}&permission=${permission}`);

    if (!resp.ok) {
        return false;
    }
}
