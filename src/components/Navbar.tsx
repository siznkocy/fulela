"use client"
import {useState} from 'react'
import ButtonLink from "./ButtonLink";
import Logo from '@/components/assets/Logo.svg'
import WidthTemplate from './templates/WidthTemplate';

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
    return <header className="py-6 absolute w-full bg-blue-300">
        <WidthTemplate appendClass='flex justify-between items-center'>
        <Logo arial-label="Website Logo" className="text-red-400"/>
        <Nav />
        {/* <Menubar  /> */}
        </WidthTemplate>--
    </header>
} 