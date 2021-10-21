import React from 'react'
import Head from 'next/head'
import { motion } from "framer-motion";

export default function Hire() {

    const pageTransition = {
        in: {
            opacity: 1,
            x: 0,
            transition: 'linear 0.3 ease-in-out'
        },
        out: {
            opacity: 0,
            x: "-50vw",
            transition: 'linear 0.3 ease-in-out'
        }
    }

    return (
        <>
            <Head>
                <title>Hire</title>
                <meta name="description" content="Hire, Contact" />
                <link rel="icon" type="image/png" sizes="32x32" href="../../assets/img/favicon.png" />
            </Head>

            <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={ pageTransition }>
                    
                <section className="showcase">
                    <div className="flex flex-col items-center justify-center content">
                        <div className="flex flex-col w-9/12 lg:flex-row sm:flex-row lg:w-auto">
                            <div className="hidden pt-4 bg-opacity-50 rounded lg:py-10 lg:pt-32 bg-crimson lg:px-5 lg:block">
                                <h2 className="mb-5 text-5xl font-semibold text-center text-white lg:text-7xl">Hire a dev</h2>
                                <p className="mb-5 font-semibold text-center text-white text-md lg:text-4xl">Replies whithin 24 hours</p>
                            </div>

                            <form 
                                name="feedback form" 
                                method="post"
                                className="flex flex-col px-10 py-5 rounded bg-crimsonLight lg:w-7/12"
                                >
                                    
                                <input 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    placeholder="Enter your username" 
                                    required 
                                    className="px-4 py-2 mb-5 font-semibold border border-solid rounded placeholder-crimson border-crimson text-crimson" 
                                />

                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Enter your email" 
                                    required 
                                    className="px-4 py-2 mb-5 font-semibold border border-solid rounded text-crimson placeholder-crimson border-crimson" 
                                />

                                <textarea 
                                    name="textarea" 
                                    id="textarea" 
                                    cols="30" 
                                    rows="10" 
                                    placeholder="Enter message" 
                                    required className="px-4 py-2 mb-5 font-semibold border border-solid rounded text-crimson placeholder-crimson border-crimson"
                                ></textarea>
                                
                                <input 
                                    type="submit" 
                                    value="Submit" 
                                    className="py-2 font-bold tracking-wider text-white transition-all rounded cursor-pointer bg-crimson hover:bg-crimsonDark" 
                                />
                            </form>
                        </div>
                    </div> 
                </section>
            </motion.div>
        </>
    )
}
