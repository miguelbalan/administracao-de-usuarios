let api = location.protocol + "//localhost/administracao-de-usuarios/backend/users/";

export async function getUser() {
    let resp = await fetch(api + "getUsers.php");

    if (!resp.ok) {
        return false;
    }

    return resp.json();
}
