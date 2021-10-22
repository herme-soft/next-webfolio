import Head from 'next/head'
import React, { useState } from 'react'
import { projectsData } from '../components/data/projectsData'
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";

export default function Projects() {

    const [items, setItems] = useState(projectsData)

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
                <title>Projects</title>
                <meta name="description" content="Portfolio, Projects" />
                <link rel="icon" type="image/png" sizes="32x32" href="../../assets/img/favicon.png" />
            </Head>

            <motion.div 
                initial="out"
                animate="in"
                exit="out"
                variants={ pageTransition }>
                    
                <section className="projects">
                    <div className="grid grid-cols-1 gap-5 px-5 py-20 bg-crimsonDark sm:grid-cols-2 lg:grid-cols-3 lg:h-screen lg:pt-32 md:pt-30">
                        {items.map((item) => {
                            const {path, desc} = item
                            
                            return (
                                <div key={uuidv4()}>
                                    <img src={path} alt={desc} className="p-5 rounded bg-crimson hover:translate-y-11" />
                                    <small className="block text-lg font-semibold text-center text-white">{desc}</small>
                                </div>
                            )
                        })}
                    </div>
                </section>
           </motion.div>
        </>
    )
}
