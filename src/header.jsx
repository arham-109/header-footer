const Header = () => {
    const HeaderData = [
        {
            link: "https://24657.netlify.app/",
            label: "Home"
        },

        {
            link: "arham-109.github.io/surf/",
            label: "About"
        },


        {
            link: "https://arham-109.github.io/smit-forms/",
            label: "Contact Us"
        },


        {
            link: "https://arham-109.github.io/allied/",
            label: "Vision"
        },


        {
            link: "https://arham-109.github.io/api/",
            label: "Help"
        }
    ]

    return (
        <div className="flex justify-around items-center bg-gray-600 p-6 text-white font-[cursive,san-serif] sticky top-0">
            <div className="text-2xl font-bold ">
                Logo
            </div>
            <ul className="flex justify-center items-center gap-10 text-[16px]">
                {HeaderData.map((item) => {
                    return (
                        <li className="bg-linear-to-r from-white to-white bg-size-[0%_2px] bg-bottom-left bg-no-repeat transition-[background-size] duration-500 hover:bg-size-[100%_2px]">
                            <a href={item.link} target="_blank">{item.label}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}












export default Header;
