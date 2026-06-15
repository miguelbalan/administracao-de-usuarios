let api = location.protocol + "//localhost/administracao-de-usuarios/_php/";

export async function deleteUser(id) {
    let resp = await fetch(api + "deleteUser.php?id=" + id);

    console.log(api + "deleteUser.php?id=" + id);

    if (!resp.ok){
        return false;
    }

    return resp.json();
}