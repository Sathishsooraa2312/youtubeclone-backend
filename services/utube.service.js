import { client } from "../index.js";

export async function getvideoById(id) {
    return await client
        .db("you-tube")
        .collection("videos")
        .findOne({ id: id });
}
export async function getAllvideos(request) {
    return await client
        .db("you-tube")
        .collection("videos")
        .find(request.query)
        .toArray();
}
export async function insertVideos(data) {
    return await client.db("you-tube").collection("videos").insertMany(data);
}
