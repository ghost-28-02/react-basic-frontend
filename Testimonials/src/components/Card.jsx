import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

function Card({ Data, prevPerson, nextPerson, surpriseMe }) {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-8 w-[40%] text-center relative pt-20">

            <div className="bg-violet-200 w-32 h-32 rounded-full overflow-hidden flex items-center justify-center border-4 border-violet-400 shadow-md absolute top-[-60px]">
                <img
                    src={Data.image}
                    alt={Data.name}
                    className="object-cover w-full h-full"
                />
            </div>
            

            <div className="mt-6">
                <h1 className="text-3xl font-semibold text-gray-800">{Data.name}</h1>
                <h2 className="text-violet-400 text-md font-medium tracking-wide uppercase">
                    {Data.title}
                </h2>
            </div>

            <div className="mt-4 text-gray-600 text-sm leading-relaxed relative">
                <Quote className="w-7 h-7 text-violet-400 inline mr-1 mb-3" />
                <p className="text-[20px]">{Data.quote}</p>
                <Quote className="w-7 h-7 text-violet-400 inline ml-1 rotate-180 mt-3" />
            </div>

            <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex items-center gap-6">
                    <button
                        onClick={prevPerson}
                        className="text-violet-500 hover:text-violet-700 transition cursor-pointer"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={nextPerson}
                        className="text-violet-500 hover:text-violet-700 transition cursor-pointer"
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                <button
                    onClick={surpriseMe}
                    className="bg-violet-500 text-white px-5 py-2 rounded-lg hover:bg-violet-600 active:scale-95 transition font-medium shadow-md cursor-pointer"
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );
}

export default Card;