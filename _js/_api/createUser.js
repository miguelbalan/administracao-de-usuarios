let api = location.protocol + "//localhost/administracao-de-usuarios/_php/";

export async function createUser(name, pwd, position, permission) {
    let resp = await fetch(api + `createUser.php?name=${name}&pwd=${pwd}&position=${position}&permission=${permission}`);

    if (!resp.ok) {
        return false;
    }

    return resp.json();
}
