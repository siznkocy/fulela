import { cva } from 'class-variance-authority';
import React from 'react'
import {ComponentProps} from 'react'

type Props = ComponentProps<'p'>;

const TextStyles = cva([""], 
{variants: {
  size:{
    h1: "text-[4.209rem]",  // 67.34px
    h2: "text-[3.157rem]",  // 50.52px 
    h3: "text-[2.369rem]",  // 37.90px
    h4: "text-[2.369rem]",  // 28.43px 
    h5:"text-[1.333rem]",   // 21.33px
    label: "text-[1.125rem]", // 18px
    p: "text-[1rem]", // 16px
    h6: "text-[0.75rem]" // 12px
  }, 
weight: {
  thin: "font-thin",
  extralight: "font-extralight",
  300: "font-light",
  400: "font-normal",
  500: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
}}
} 


)

export default function Text({...props}: Props) {
  return <p {...props}/>
}
