import React from 'react'
import {VariantProps, cva} from "class-variance-authority"
import ButtonOrLink, {Props as ButtonOrLinkProps} from './ButtonOrLink'

const buttonStyles = cva([], {
    variants:{
        intent:{
            primary:["relative border-2 rounded-md px-2 py-1 border-accent text-accent hover:bg-accent hover:text-black hover:border-black"],
            secondary:["relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-accent before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"],
            tertiary: []
        }
    },
   defaultVariants:{
    intent: "secondary",
   }
})

type buttonProps = VariantProps<typeof buttonStyles>;

interface Props extends ButtonOrLinkProps, buttonProps {
    appendClass: string,
}

export default function ButtonLink({intent,appendClass, ...props}: Partial<Props>){
    return <ButtonOrLink href={props.href} className={[appendClass, buttonStyles({intent})].join(" ")} {...props} />
}