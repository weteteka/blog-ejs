import { Post } from "../Models/PostModel";

export const getAllPost = async(req,res)=>{
    const post = await Post.find()
    res.status(200).json(post)
}