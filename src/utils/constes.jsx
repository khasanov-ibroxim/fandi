import Home from "@/pages/Home/home.jsx";
import Contact from "@/pages/contact/contact.jsx";
import About from "@/pages/about/about.jsx";

export const HOME = "/"
export const CONTACT = "/contact"
export const ABOUT = "/about"



export const Index_Router = [
    {
        Path:HOME,
        Component: Home
    },
    {
        Path:CONTACT,
        Component: Contact
    },
    {
        Path:ABOUT,
        Component: About
    },
]