import Layout from '../components/layout'
import ParticlesComponent from '../components/paticlecomponent'
import { motion } from 'framer-motion'

export default function Custom404() {
  return (
    <Layout>
       <motion.div exit={{opacity: 0, transition: {duration: 0.6}}} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 0.6}}}>   
              <ParticlesComponent />
              <div className='text-white pb-[2%] w-full h-full m-0 p-0'>
                <div className='absolute z-1 grid justify-items-center justify-center text-center items-center ml-[50vh] top-[30%]'>
                    <h1 className='glitch number text-sm font-montserrat' data-text="404">404</h1>
                    <h1 className='glitch text-sm font-montserrat' data-text="Page or Content Not Found!">Page or Content Not Found!</h1>
                </div>
            </div>
        </motion.div>
    </Layout>
  )
}