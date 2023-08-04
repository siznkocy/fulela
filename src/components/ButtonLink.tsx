import React from 'react'
import {VariantProps, cva} from "class-variance-authority"
import ButtonOrLink, {Props as ButtonOrLinkProps} from './ButtonOrLink'

const buttonStyles = cva([], {
    variants:{
        intent:{
            primary:[],
            secondary:[]
        }
    },
   defaultVariants:{
    intent: "primary",
   }
})

type buttonProps = VariantProps<typeof buttonStyles>;

interface Props extends ButtonOrLinkProps, buttonProps {
    appendClass: string,
}

export default function ButtonLink({intent,appendClass, ...props}: Partial<Props>){
    return <ButtonOrLink href={props.href} className={[appendClass, buttonStyles({intent})].join(" ")} {...props} />
}