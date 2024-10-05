import React, { useState, useEffect } from "react";

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const navLinks = ["Home", "About", "Services", "Contact"];

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav
            className={`${
                isVisible ? "translate-y-0" : "-translate-y-full"
            } z-50 bg-transparent backdrop-blur-sm border-b border-gray-300 py-4 fixed w-full top-0 transition-transform duration-300`}
        >
            <ul className="flex justify-center">
                {navLinks.map((link, index) => (
                    <li key={index} className="mx-4">
                        <strong>
                            <a
                                href="#"
                                className="link text-neutral-300 hover:text-red-500 transition-colors duration-300 ease-in-out"
                            >
                                {link}
                            </a>
                        </strong>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
