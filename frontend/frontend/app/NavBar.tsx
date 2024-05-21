import Link from 'next/link'
import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import {ModeToggle} from "@/components/Theme"
import { Card } from '@/components/ui/card'

const NavBar = () => {
  return (
    <Card>
      <nav className="flex justify-between py-6 px-10 ">
          <span className='translate-y-2 text-xl font-semibold'>BLOG APP</span>
          <div className='flex gap-4'>
              <Link className={buttonVariants()} href="/login" target="_blank">Log In</Link>
              <Link className={buttonVariants({ variant: "secondary" })} href="/signup" target='_blank'>Sign Up</Link>
              <ModeToggle />
          </div>
      </nav>
    </Card>
  )
}

export default NavBar
