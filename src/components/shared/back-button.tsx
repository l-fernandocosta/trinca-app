"use client"

import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Button } from '../ui/button'

export const BackButton = ( ) => {
  const searchparam = useSearchParams();
  const origin = searchparam.get("origin") || "home";
  return (
    <Button variant={"ghost"} size={"icon"} asChild   className='rounded-full'>
      <Link href={`/${origin}`}>
        <ArrowLeftIcon />
      </Link>
    </Button>
  )
}
