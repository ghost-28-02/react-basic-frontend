import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import toast from "react-hot-toast";

const NavBar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <nav className="shadow-md mb-11 sticky top-0 z-10 bg-background/95">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center flex-row">
                <Link to="/" className="text-primary text-2xl font-bold">
                    StudyMotion
                </Link>

                <div className="flex space-x-6">
                    <NavLink to="/" className="hover:text-secondary font-medium">Home</NavLink>
                    <NavLink to="/about" className="hover:text-secondary font-medium">About</NavLink>
                    <NavLink to="/contact" className="hover:text-secondary font-medium">Contact</NavLink>
                </div>

                {!isLoggedIn && <div className="space-x-3">
                    <Link to="/login">
                        <button className="px-4 py-1 border-2 border-secondary rounded-md bg-secondary text-white hover:bg-primary transition"
                        >
                            Login
                        </button>
                    </Link>

                    <Link to="/signup">
                        <button
                        className="px-4 py-1 rounded-md border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition">
                            SignUp
                        </button>
                    </Link>
                </div>}
                {isLoggedIn && <div className="space-x-3">
                    <Link to="/dashboard">
                        <button className="px-4 py-1 rounded-md border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition">
                            Dashboard
                        </button>
                    </Link>

                    <Link to="/">
                        <button
                            onClick={()=>{
                                setIsLoggedIn(!isLoggedIn);
                                toast.success("Logged Out");
                            }}
                            className="px-4 py-1 border-2 border-secondary rounded-md bg-secondary text-white hover:bg-primary transition"
                        >
                            Logout
                        </button>
                    </Link>
                </div>}
            </div>
        </nav>
    )
}

export default NavBar;