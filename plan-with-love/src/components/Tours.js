import React, { useState } from 'react';
import Card from './Card';
import data from './data';

function Tours(props) {
    const [tours, setTours] = useState(data);

    function removeTours(id) {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    }


    if (tours.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 py-16 px-6 flex justify-center items-center flex-col">
                <h2 className="text-3xl font-bold text-pink-600 mb-4">No Tours Left</h2>
                <button
                    onClick={() => setTours(data)}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                >
                    Refresh
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 py-16 px-6">

            <h1 className="text-center px-8 py-6 mx-auto max-w-3xl font-extrabold text-5xl text-pink-400 border-4 border-dashed border-pink-700 rounded-2xl shadow-lg bg-[rgba(255,255,255,0.4)]">
                Plan With Love
            </h1>


            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
                {tours.map((tour) => (
                    <Card key={tour.id} {...tour} removeTours={removeTours}/>
                ))}
            </div>
        </div>
    );
}

export default Tours;