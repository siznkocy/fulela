import { VariantProps, cva } from 'class-variance-authority';
import React from 'react'
import {ComponentProps} from 'react'

type TextProps = ComponentProps<"label"> &
ComponentProps<"h1"> &
ComponentProps<"h2"> &
ComponentProps<"h3"> &
ComponentProps<"h4"> &
ComponentProps<"h5"> &
ComponentProps<"h6"> &
ComponentProps<"p">;

const textStyles = cva([""], 
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
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
}}
}
)

type TextStylesProps = VariantProps<typeof textStyles>;

export interface Props extends TextProps, Omit<TextStylesProps, 'size' | 'weight'>{
  variant: `${NonNullable<TextStylesProps['size']>}/${NonNullable<TextStylesProps['weight']>}`,
  appendClass?: string 
}

export default function Text({variant, appendClass,...props}: Props) {

const [size, weight] = variant.split("/") as [NonNullable<TextStylesProps["size"]>, NonNullable<TextStylesProps["weight"]>];

  let Text = size

  return <Text className={[appendClass, textStyles({size, weight})].join(" ")} {...props}/>
}
