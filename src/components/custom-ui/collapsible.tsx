'use client'

import { PropsWithChildren, useState } from "react"
import { Button } from "../ui/button"

interface Props extends PropsWithChildren {
    moreText: string
    lessText: string
}

export default function Collapsible({ children, moreText, lessText }: Props) {
  const [show, setShow] = useState(false)

  return (
    <>
      {show && children}
      <div className="max-w-5xl mx-auto w-11/12 flex justify-center">
        <Button variant={'outline-primary'} onClick={() => setShow(prev => !prev)}>
          {
            show ? lessText : moreText
          }
        </Button>
      </div>
    </>
  )
}
