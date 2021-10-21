import React, { useState } from 'react'
import { itemNav } from './navData'
import ActiveLink from './ActiveLink'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FaBars, FaTimes } from 'react-icons/fa'


export default function Navbar() {

    const router = useRouter()

    {/* Sidebar open and close */}
    const [sidebar, setSidebar] = useState(false)

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 text-white shadow-lg bg-crimson h-14">
                <div>
                    <NextLink href="/">
                        <a className="text-xl lg:text-2xl font-open-sans"><span className="font-semibold tracking-wider text-white font-Train-One">FullStack.Dev</span></a>
                    </NextLink>
                </div>
                <button onClick={handleSidebar} className="p-2 text-3xl transition rounded-full hover:bg-red-300">
                    <FaBars />
                </button>
            </header>

            <div>
                <div onClick={handleSidebar} className={sidebar ? `fixed inset-0 z-20 visible bg-black cursor-pointer opacity-70` : 'hidden opacity-0'}></div>
                <div className={sidebar ? `fixed inset-y-0 right-0 z-20 w-64 py-4 bg-white duration-300 transition-right` : 'duration-500 tansition-right fixed inset-y-0 -right-full z-20 w-64 py-4 bg-white'}>
                    <button onClick={handleSidebar} className="absolute p-1 text-3xl text-gray-500 transition rounded-full hover:text-crimson -left-14 top-4">
                        <FaTimes />
                    </button>

                    {/* Sidebar Menu */}
                    <ul className="font-normal text-gray-500">

                        {itemNav.map((el) => {
                            return (
                                <li key={el.id} onClick={handleSidebar} className={el.active}>
                                    <ActiveLink activeClassName="active" href={el.path}>
                                        <a className="inline-flex items-center w-full px-4 py-2 text-lg font-medium transition hover:bg-gray-100">
                                            {el.icon}
                                            <span className="ml-2">{el.title}</span>
                                        </a>
                                    </ActiveLink>
                                </li>
                            )
                        })}
                  
                    </ul>
                </div>
            </div>
        </>
    )
}
