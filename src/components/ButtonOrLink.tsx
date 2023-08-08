import React from 'react'
import Link from "next/link"
import {ComponentProps} from 'react'
import Text from './Text'

export type Props = ComponentProps<typeof Link> & ComponentProps<"button">

export default function ButtonOrLink({href, ...props}: Partial<Props>) {
    const isLink =  typeof href !== "undefined"

    let content = <button {...props} />

    if(isLink){
        return <Link className="text-lg" href={href} {...props} />
    }
    return content;
}
