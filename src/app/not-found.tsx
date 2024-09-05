// "use client"

import Button from '@/components/ui/buttons'
import { Metadata } from 'next';
// import {useRouter} from 'next/navigation'
import Link from "next/link"

export const metadata: Metadata = {
  title: "Not Found - SK",
};


export default function NotFound() {
  // const router = useRouter()

  return (
    <div className='w-[550px] mx-auto pt-[6rem] text-center px-[4rem]'>
      <p className='uppercase font-thin'>Not found</p>
      <h1 className='text-[8rem] mb-[4rem] text-second'>404</h1>

      <p className='text-[4rem] mb-[4rem]'>We could not find the page you were looking for.</p>

      <Link className='underline text-[2rem] text-second hover:text-second-light' href='/'> Back Home</Link>



      {/* <Button label='Back Home'  variant='second' transparent onClick={() => router.push('/')}   /> */}
    </div>
  )
}