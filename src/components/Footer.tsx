"use client"

import React from 'react'
import WidthTemplate from './templates/WidthTemplate'
import ButtonLink from './ButtonLink'
// import Logo from '@/components/assets/Logo.svg'
import Text from './Text'

const FooterLinks: {
    title: string, 
    links?: {
        name?: string, 
        href?: string}[], 
    contacts?: {
        title?: string,
        cell?: string,
        email?: string,
    }[]
}[] = 
[
    {
    title: "Services", 
    links: [
        {
        name: "Roofing", 
        href: "/roof"
        },
       {
        name: "Ceiling fitting", 
        href:"/ceiling"
        },
       {
        name: "Doors installations", 
        href: "/doors"
       },
     ]
}, 
{
    title: "Contact", 
    contacts: [
        {
            title:"Sales", 
            cell:"072 498 1762", 
            email:"nkosi.docrob@gmail.com"
        },
        {
        title: "Information",
        cell: "079 223 0803",
        email: "nkosi.sizweaubrey@gmail.com"
        }, 
       
     ]
},
{
    title: "Company", 
    links: [
        {
        name: "Portfolio",
        href: "/portfolio"
        }, 
       {
        name: "About", 
        href:"/about"
       }, 
     ]
}
]

function FooterLink(){
    return <section className="text-white flex justify-between">
     { FooterLinks.map((main, i) => 
        <div key={i}>
            <Text>{main.title}</Text>
            <ul>
                {main.links?.map((link, i)=> <li key={i}><ButtonLink href={link.href}>{link.name}</ButtonLink></li>)}
            </ul>
            <ul className="flex justify-between w-full gap-2">
                {main.contacts?.map((contact, i) => 
                <li className="flex flex-col text-left" key={i}>
                    <Text>{contact.title}</Text>
                    <ButtonLink>{contact.cell}</ButtonLink>
                    <ButtonLink>{contact.email}</ButtonLink>
                </li>)}
            </ul>
        </div>)}
     </section>
} 

export default function Footer() {
  return (
    <footer className="bg-black py-6">
        <WidthTemplate appendClass="border-b border-white">
            <FooterLink />
        </WidthTemplate>
    </footer>
  )
}
