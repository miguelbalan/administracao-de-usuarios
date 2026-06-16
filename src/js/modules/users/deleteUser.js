let api = location.protocol + "//localhost/administracao-de-usuarios/backend/users/";

export async function deleteUser(id) {
    let resp = await fetch(api + "deleteUser.php?id=" + id);

    if (!resp.ok) {
        return false;
    }

    return resp.json();
}