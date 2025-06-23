import Home from "@/pages/Home/home.jsx";
import Contact from "@/pages/contact/contact.jsx";
import About from "@/pages/about/about.jsx";
import Production from "@/pages/production/production.jsx";

export const HOME = "/"
export const CONTACT = "/contact"
export const ABOUT = "/about"
export const PRODUCTION = "/production/:id"



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
    {
        Path:PRODUCTION,
        Component: Production
    },
]