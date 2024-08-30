import axios from "axios";
import Memepage from "./Memepage";

export default async function detail({ params }) {
  const { id } = params;

  console.log("id is " + id);

  const res = await axios("https://api.imgflip.com/get_memes");

  const meme = await res.data.data.memes;

const selectedImage = meme.filter((meme)=> meme.id === id)[0] || null;

  return (
    <Memepage selectedImage={selectedImage}/>
  );
}