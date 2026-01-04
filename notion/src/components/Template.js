// src/components/Template.js
import Signup from '../components/Signup';
import Login from '../components/Login';

export default function Template({ title,description,image, formType, setIsLoggedIn}) {
    return (
        <div className="max-w-7xl mx-auto min-h-screen flex items-start justify-between px-8 bg-background text-primary">
            {/* Left Section - Text & Form */}
            <div className="w-1/2 space-y-6">
                <h1 className="text-4xl font-bold leading-snug">{title}</h1>

                <p className="text-secondary/80 leading-relaxed">{description}</p>

                {formType === "signup" ? (<Signup setIsLoggedIn={setIsLoggedIn} />) : (<Login setIsLoggedIn={setIsLoggedIn} />)}

                <div className="flex items-center justify-center gap-2 text-gray-500">
                    <div className="h-px w-20 bg-gray-300" />
                    <span>or</span>
                    <div className="h-px w-20 bg-gray-300" />
                </div>

                <button className="w-full py-2 border border-secondary rounded-md flex items-center justify-center gap-2 hover:bg-secondary hover:text-white transition">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="w-5 h-5"
                    />
                    Sign in with Google
                </button>
            </div>

            {/* Right Section - Image */}
            <div className="flex justify-center items-start pt-6">
                <img
                    src={image}
                    alt="Illustration"
                    className="rounded-lg shadow-md max-w-md border border-secondary/20"
                />
            </div>
        </div>
    );
}