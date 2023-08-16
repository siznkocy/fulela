"use client"
import {useState} from 'react'
import ButtonLink from "./ButtonLink";
import Logo from '@/components/assets/Logo.svg'
import WidthTemplate from './templates/WidthTemplate';
import { usePathname, useRouter } from 'next/navigation';
import Text from './Text';

const navLink:{name:string, href?: string, intent?: "primary" | "secondary" | "tertiary"}[] = [{
    name: "Home",
    href: "/",
},{
    name: "Services",
    href: "/service"
},{
    name: "About",
    href: "/about"
    
},{
    name: "Portfolio",
    href: "/portfolio"
},

{
    name: "Get a Quote",
    intent: "primary"
},
]

function Nav(){

    const pathname = usePathname();

    return <nav className="flex gap-10 items-center ">
            {navLink.map((link, i) => <ButtonLink intent={link?.intent} key={i} href={link?.href}> <Text appendClass='flex gap-2' variant='label/regular'><span className={ link?.href === pathname ? "text-accent": "text-transparent"}>{" • "}</span>{link.name}</Text></ButtonLink>)}
     </nav>
}

export default function Navbar(){
    return <header className="py-6 absolute w-full bg-blue-3b00">
        <WidthTemplate appendClass='flex justify-between items-center'>
        <Logo arial-label="Website Logo" className=""/>
        <Nav />
        {/* <Menubar  /> */}
        </WidthTemplate>
    </header>
} 