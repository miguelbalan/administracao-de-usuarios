let api = location.protocol + "//localhost/administracao-de-usuarios/backend/php/permissions/";

export async function searchPermission(id){
    let resp = await fetch(api + "searchPermission.php");

    if (!resp.ok){
        return false;
    }

    return resp.json();
}
