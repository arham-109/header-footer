import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    const footersocial = [
        {
            link: "",
            label: <FaFacebookSquare />
        },
        {
            link: "",
            label: <FaLinkedin />
        },
        {
            link: "",
            label: <FaYoutube />
        },
        {
            link: "",
            label: <FaInstagram />
        }
    ]

    const footerdetail = [

        {
            title: "Home",
            links: [
                {
                    link: "facebook.com",
                    label: "About Us"
                },

                {
                    link: "instagram.com",
                    label: "Vision"
                },

                {
                    link: "youtube.com",
                    label: "Support"
                },

                {
                    link: "linkedin.com",
                    label: "Our Mission"
                }
            ]
        }
    ]



    const second_column = [

        {
            title: "Products",
            links: [
                {
                    link: "",
                    label: "Privacy Policy"
                },

                {
                    link: "",
                    Label: "Terms & Conditions"
                },

                {
                    link: "",
                    label: "Refund Policy"
                },

                {
                    link: "",
                    label: "FAQ"
                }
            ]
        }
    ]

    const third_column = [
        {
            title: "Contact Us",
            links: [
                {
                    link: "",
                    label: "Email"
                },

                {
                    link: "",
                    label: "Phone"
                },

                {
                    link: "",
                    label: "Whatsapp"
                }
            ]
        }
    ]


    return (
        <div className="lg:grid lg:grid-cols-[3fr_1fr_1fr_1fr] bg-gray-800 text-white font-[cursive,san-serif] mt-6 leading-loose p-6 flex justify-start items-start
           flex-col gap-12">
            <div>
                <h1 className="text-2xl">Footer Logo</h1>
                <p className="lg:text-[17px] mt-2 mb-5">
                    Ready to explore the possibilities? Dive deeper into our products, learn about our visionary team, or check out our latest blogs for insights into the world of AI and mobile technology. We invite you to be part of the future - explore, innovate, and transform with EAIsoft.
                </p>
                <a href="https://technetcloud.co">EAIsoft Ltd, 7 Bell Yard, London, WC2A 2JR</a>
                <div>
                    <ul className="flex justify-start items-center mt-5 text-2xl gap-4">
                        {footersocial.map((items) => {
                            return (
                                <li>
                                    <a href={items.link} target="_blank">{items.label}</a>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>

            {footerdetail.map((first) => {
                return (
                    <div className="lg:ml-20">
                        <h1>
                            {first.title}
                        </h1>

                        <ul>
                            {first.links.map((firstLink) => {
                                return (
                                    <li>
                                        <a href={firstLink.link}>{firstLink.label}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}

            {second_column.map((second) => {
                return (
                    <div>
                        <h1>
                            {second.title}
                        </h1>

                        <ul>
                            {second.links.map((secondLink) => {
                                return (
                                    <li>
                                        <a href={secondLink.link} target="_blank">{secondLink.label}</a>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                )
            })}

            {third_column.map((third) => {
                return (
                    <div>
                        <h1>
                            {third.title}
                        </h1>
                        <ul>
                            {third.links.map((thirdLink) => {
                                return (
                                    <li>
                                        <a href={thirdLink.link}>{thirdLink.label}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
export default Footer