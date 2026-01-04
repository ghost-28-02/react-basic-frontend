import data from './data';
import { useState } from 'react';
import Card from './Card';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Courses() {
    const [Data] = useState(data);
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = ['All', 'Development', 'Business', 'Design', 'Lifestyle'];
    const filterData = activeCategory === 'All' ? Data : Data.filter((courses) => courses.category === activeCategory);
    const [liked, setLiked] = useState({});


    function handleHeart(id) {
        setLiked(prevLiked => ({
            ...prevLiked,
            [id]: !prevLiked[id],
        }));

        if (!liked[id]) {
            toast.success('Liked Successfully');
        }
        else {
            toast.info('Liked Removed');
        }
    }


    return (
        <div>
            <header className="text-center py-12 px-4 transition-colors duration-300">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Explore Our Courses
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover a wide range of courses across Development, Business, Design, and
                    Lifestyle. Enhance your skills, boost your career, and unleash your
                    creativity with our expertly curated content.
                </p>
            </header>

            <div className="flex justify-center flex-wrap gap-4 mb-8 px-4">
                {categories.map((category) => {
                    return (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full font-medium transition-colors duration-200
                        ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 shadow hover:bg-blue-100 hover:text-blue-600'}`}>
                            {category}
                        </button>
                    )
                })}
            </div>

            <section className="px-4 pb-12">
                <div className="flex flex-wrap justify-center gap-8">
                    {filterData.map((info) => (
                        <Card key={info.id} data={info} liked={!!liked[info.id]} handleHeart={() => handleHeart(info.id)} />
                    ))}
                </div>
            </section>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

export default Courses;