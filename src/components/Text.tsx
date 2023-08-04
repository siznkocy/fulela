import React from 'react'
import {ComponentProps} from 'react'

type Props = ComponentProps<'p'>;

export default function Text({...props}: Props) {
  return <p {...props}/>
}
