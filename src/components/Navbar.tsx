"use client"
import {useState} from 'react'
import ButtonLink from "./ButtonLink";
import Logo from '@/components/assets/Logo.svg'
import WidthTemplate from './templates/WidthTemplate';

const navLink:{name:string, href?: string, intent?: "primary" | "secondary" | "tertiary"}[] = [{
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
    intent: "primary"
},
]

function Nav(){

    const [isActive, setIsActive] = useState<string>("/")
    const handleLinkClick = ({link}:{link: string}) => {
        setIsActive(link)
    }

    return <nav className="flex gap-10 items-center ">
            {navLink.map((link, i) => <ButtonLink intent={link?.intent} key={i} href={link?.href}>{link.name}</ButtonLink>)}
     </nav>
}

export default function Navbar(){
    return <header className="py-6 absolute w-full bg-blue-3b00">
        <WidthTemplate appendClass='flex justify-between items-center'>
        <Logo arial-label="Website Logo" className=""/>
        <Nav />
        {/* <Menubar  /> */}
        </WidthTemplate>--
    </header>
} 