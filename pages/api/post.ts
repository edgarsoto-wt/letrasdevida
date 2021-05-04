import { IPost } from "../../interfaces/post";
import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
    const {post} = req.body as {post:IPost};

    // console.log(post)

    const { db } = await connectToDatabase();

    const response   = await db.collection("posts").insertOne(post)
    
    res.json(response)
}