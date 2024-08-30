import axios from "axios";
import Link from "next/link";

export default async function Home() {
    const res = await axios("https://api.imgflip.com/get_memes");
    const fetchingImages = res.data.data.memes;

    return (
      <div>
        <h1 className="text-3xl text-center">"select any meme you want to generate"</h1>
        <div className="flex flex-wrap justify-center gap-5 bg-slate-400 p-4">
        {fetchingImages.map((item) => (
          <div key={item.id} className="cursor-pointer">
            <Link href={`/detail/${item.id}`}>
                <div className="card bg-base-100 shadow-xl">
                  <figure>
                    <img className="w-40 h-40 object-cover" src={item.url} alt={item.name} />
                  </figure>
                </div>
            </Link>
          </div>
        ))}
        </div>
      </div>
    );
}