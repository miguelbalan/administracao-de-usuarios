let api = location.protocol + "//localhost/administracao-de-usuarios/_php/";

export async function updateUser(id, name, pwd, position, permission) {
    console.log(api + `updateUser.php?id=${id}&name=${name}&pwd=${pwd}&position=${position}&permission=${permission}`);
    let resp = await fetch(api + `updateUser.php?id=${id}&name=${name}&pwd=${pwd}&position=${position}&permission=${permission}`);


    if (!resp.ok) {
        return false;
    }

    return resp.json();
}
