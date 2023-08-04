import React from 'react'
import {ComponentProps} from 'react'

type Props = ComponentProps<"section"> & {
  appendClass?: string
}

export default function WidthTemplate({appendClass, ...props}: Props) {
  return (
    <section className={[appendClass,"max-w-5xl mx-auto"].join(" ")} {...props}/>
  )
}
