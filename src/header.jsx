import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const HeaderData = [
        { link: "https://24657.netlify.app/", label: "Home" },
        { link: "https://arham-109.github.io/surf/", label: "About" },
        { link: "https://arham-109.github.io/smit-forms/", label: "Contact Us" },
        { link: "https://arham-109.github.io/allied/", label: "Vision" },
        { link: "https://arham-109.github.io/api/", label: "Help" }
    ];

    return (
        <div className="bg-gray-600 text-white font-[cursive,sans-serif] sticky top-0 z-50 p-6">
            <div className="flex justify-between md:justify-around items-center max-w-7xl mx-auto">
             
                <div className="text-2xl font-bold">
                    Logo
                </div>

                <ul className="hidden md:flex justify-center items-center gap-10 text-[16px]">
                    {HeaderData.map((item) => {
                        return (
                            <li key={item.label} className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_2px]">
                                <a href={item.link} target="_blank">{item.label}</a>
                            </li>
                        );
                    })}
                </ul>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block md:hidden focus:outline-none z-50 p-2"
                    aria-label="Toggle Menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between relative">
                        <span className={`h-0.5 w-full bg-white rounded-full transform transition-all duration-300 origin-left ${isOpen ? "rotate-45" : ""}`} />
                        <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                        <span className={`h-0.5 w-full bg-white rounded-full transform transition-all duration-300 origin-left ${isOpen ? "-rotate-45" : ""}`} />
                    </div>
                </button>
            </div>

            <div className={`fixed top-0 right-0 h-screen w-64 bg-gray-700/95 backdrop-blur-md shadow-2xl p-10 flex flex-col gap-8 text-lg transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="h-10"></div>
                {HeaderData.map((item) => {
                    return (
                        <a 
                            key={item.label} 
                            href={item.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-gray-300 border-b border-gray-500 pb-2 transition-colors"
                        >
                            {item.label}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;