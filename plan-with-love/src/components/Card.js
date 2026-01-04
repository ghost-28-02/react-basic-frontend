import { useState, useEffect } from "react";
import ShowMore from "./ShowMore";

function Card(props) {

    const description = `${props.info.substring(0, 200)}....`;

    const [readMore, setReadMore] = useState(false);

    function handleKnowMore() {
        setReadMore(!readMore);
    }

    useEffect(() => {
        
        // Prevent body scroll when modal is open
        if (readMore) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [readMore]);


    return (
        <div className= "w-80 border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 bg-white flex flex-col p-1 hover:border-gray-400 ">
            
            <img src={props.image} alt={props.name} className="w-full h-48 object-cover rounded-md select-none" />

            
            <div className="p-4 flex-1 flex flex-col justify-between">
                
                <div className="mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{props.name}</h4>
                    <h4 className="text-md font-bold text-pink-600">₹{props.price}</h4>
                </div>

                <div className="text-gray-600 text-sm mb-4">
                    {description}
                    <button
                        onClick={handleKnowMore}
                        className="ml-2 text-pink-500 cursor-pointer hover:underline"
                    >
                        Know More
                    </button>
                </div>

                <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                onClick={() => props.removeTours(props.id)}>
                    Not Interested
                </button>
            </div>
            {readMore && <ShowMore moreInfo = {props} onClose={handleKnowMore}/>}
        </div>
    );
}

export default Card;