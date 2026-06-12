export async function createUser(name, position, permission){
    let resp = await fetch(`../test.json?name=${name}&position=${position}&permission=${permission}`);

    if (!resp.ok){
        return JSON({"message": "Failed Request"})
    }

    return resp.json()
}
