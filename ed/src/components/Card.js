import { Heart } from 'lucide-react';
import { useState } from 'react';

function Card({data,liked,handleHeart}) {
  const [readMore, setReadMore] = useState(false);
  const info = readMore ? data.description : `${data.description.substring(0, 200)}...`;

  function handleReadMore() {
    setReadMore(!readMore);
  }

  return (
    <div className={`w-96 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col`}>
      <div className="relative">
        <img src={data.image} alt={data.title} className="w-full h-80 object-cover" />
        <div className="absolute top-2 right-2 bg-white/80 rounded-[50%] p-2">
          <Heart
            onClick={handleHeart}
            className={`text-red-500 w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200 click:bg-red-500 ${liked ? 'text-red-500 fill-red-500' : 'text-red-200 fill-red-200'}`}
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <span className={`text-sm`}>{data.category}</span>
        <h2 className="text-lg font-semibold">{data.title}</h2>
        <p className={`text-sm`}>{info}</p>

        <button className={`mt-2 py-1 px-3 rounded text-sm w-max transition-colors duration-300 bg-blue-500 hover:bg-blue-600 text-white`} onClick={handleReadMore}>
          {readMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>

  );
}

export default Card;