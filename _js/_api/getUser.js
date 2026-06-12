export async function getUser(){
    let resp = await fetch("../test.json");

    if (!resp.ok){
        return JSON({"message": "Failed Request"})
    }

    return resp.json()
}
