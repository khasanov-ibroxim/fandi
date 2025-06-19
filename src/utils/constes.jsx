import Home from "@/pages/Home/home.jsx";
import Contact from "@/pages/contact/contact.jsx";

export const HOME = "/"
export const CONTACT = "/contact"



export const Index_Router = [
    {
        Path:HOME,
        Component: Home
    },
    {
        Path:CONTACT,
        Component: Contact
    },
]