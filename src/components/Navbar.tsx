"use client"
import {useState} from 'react'
import ButtonLink from "./ButtonLink";
import Logo from "./Logo";

const navLink:{name:string, href: string}[] = [{
    name: "Home",
    href: "/",
},{
    name: "Services",
    href: "/Service",
},{
    name: "About",
    href: "/About",
},{
    name: "Get a Quote",
    href: "/Quote",
},
]

function Nav(){

    const [isActive, setIsActive] = useState<string>("/")
    const handleLinkClick = ({link}:{link: string}) => {
        setIsActive(link)
    }

    return <nav className="flex gap-10 item-center ">
            {navLink.map((link, i) => <ButtonLink key={i} href={link?.href}><span className={isActive === link?.href ? "bg-inherit":"bg-transparent"}>•</span>{" "}{link.name}</ButtonLink>)}
     </nav>
}

export default function Navbar(){
    return <header className="max-w-5xl py-6 mx-auto flex justify-between items-center border-bottom">
        <Logo />        
        <Nav />
    </header>
} 