import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function Home() {

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
        <title>FullStack.Dev</title>
        <meta name="description" content="Front End, Back End and Fullstack Developers" />
        <link rel="icon" type="image/png" sizes="32x32" href="../../assets/img/favicon.png" />
      </Head>

      <motion.div 
        initial="out"
        animate="in"
        exit="out"
        variants={ pageTransition }>

          <section className="showcase">
            <div className="flex flex-col items-center justify-center px-5 text-white content">
                <h1 className="mb-10 font-sans text-5xl font-semibold text-right lg:text-center md:text-center lg:text-7xl lg:px-56 Chonburi">We create <span className="text-crimson">brand awarness</span> tailored to your business</h1>

              <div className="ml-auto lg:ml-auto md:mx-auto">
                  <Link href="/hire">
                      <a className="p-2 px-4 mr-5 font-semibold transition-all rounded-full bg-crimson hover:bg-crimsonDark">Get Strated</a>
                  </Link>
                  <Link href="/projects">
                      <a className="p-2 px-4 font-semibold transition-all bg-white rounded-full text-crimson hover:bg-crimsonDark hover:text-white">Projects</a>
                  </Link>
              </div>
            </div>
          </section>
      </motion.div>
    </>
  )
}
