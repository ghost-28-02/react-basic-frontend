import React from "react";

function ShowMore(props) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm transition-all duration-300">
  <div className="bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 rounded-3xl shadow-2xl p-8 max-w-2xl w-[95%] max-h-[95vh] overflow-y-auto transform scale-105 animate-zoomIn">
    
    <img
      src={props.moreInfo.image}
      alt={props.moreInfo.name}
      className="w-full h-72 md:h-96 object-cover rounded-xl mb-6 shadow-lg"
    />

    <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-4">{props.moreInfo.name}</h2>
    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">{props.moreInfo.info}</p>

    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="text-2xl md:text-3xl font-bold text-pink-500">₹{props.moreInfo.price}</span>
      <button
        onClick={props.onClose}
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition transform hover:scale-105"
      >
        Close
      </button>
    </div>
  </div>
</div>
  );
}

export default ShowMore;