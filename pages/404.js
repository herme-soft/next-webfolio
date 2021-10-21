import React from 'react'
import Link from 'next/link'
import Img from '../public/assets/img/404.png'
import Image from 'next/image'
import { BsChevronDoubleRight } from 'react-icons/bs'

export default function Error404() {
    return (
        <>
        <section className="404">
            <div className="flex flex-col items-center justify-center max-h-screen mt-48">
                <span className="lg:w-1/2">
                    <Image src={Img} alt="error 404 page not found" />
                </span>
                <span className="mt-3">
                    <Link href="/">
                        <a className="flex p-2 px-4 text-white transition-all rounded-full bg-crimson hover:text-white hover:bg-crimsonDark align-center">
                            Back Home<span className="block mt-1 ml-1"><BsChevronDoubleRight /></span> 
                        </a>
                    </Link> 
                </span>
             </div> 
        </section>
        </>
    )
}