'use client'

import Layout from '../components/layout'
import { Icon } from '@iconify/react'
import { Card, Button } from '@heroui/react'
import Typing from '../components/typing'
import { motion } from 'framer-motion'
import ParticlesComponent from '../components/paticlecomponent'
import { useState } from 'react'

const projects = [
  {
    title: 'Atropol',
    description: 'Web application',
    image: '/images/projects/Atropol.png',
    link: 'https://atropol.eu',
    tag: 'HomePage'
  },
  {
    title: 'Atropol Dashboard',
    description: 'Admin dashboard',
    image: '/images/projects/Atropol-Dash.png',
    link: 'https://panel.atropol.eu',
    tag: 'Administration'
  },
  {
    title: 'Dragonex',
    description: 'Game project',
    image: '/images/projects/Dragonex.jpg',
    link: '#',
    tag: 'Web of minecraft server'
  },
  {
    title: 'OkurkaCraft Site',
    description: 'Community site',
    image: '/images/projects/OkurkaCraftSite.png',
    link: '#',
    tag: 'Web for my server'
  }
]

const socialLinks = [
  { icon: 'mdi:github', url: 'https://github.com/PanOkurka', label: 'GitHub', color: '#6f42c1' },
  { icon: 'mdi:twitter', url: 'https://twitter.com/Pan_Okurka', label: 'Twitter', color: '#1da1f2' },
  { icon: 'mdi:instagram', url: 'https://www.instagram.com/panokurka_official/', label: 'Instagram', color: '#e4405f' },
  { icon: 'mdi:discord', url: 'https://discord.gg/wn5aF2w', label: 'Discord', color: '#7289da' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
}

export default function NewHome() {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <Layout>
      <motion.div 
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        className="w-full min-h-screen bg-linear-to-b from-[#27272a] via-[#27272a] to-[#1a1a1e] relative overflow-hidden"
      >
        <ParticlesComponent />
        
        {/* Main Content */}
        <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="mb-16 md:mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Profile Image */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="flex justify-center order-2 md:order-1"
                >
                  <div className="relative">
                    {/* Glowing background */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#10b981] to-[#059669] rounded-full opacity-20 blur-2xl animate-pulse" />
                    
                    {/* Image container */}
                    <div className="relative w-64 h-64 md:w-72 md:h-72">
                      <img
                        alt="Pan_Okurka"
                        src="/images/panokurka.jpeg"
                        className="w-full h-full rounded-full object-cover ring-4 ring-[#10b981]/50 shadow-2xl"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div variants={itemVariants} className="order-1 md:order-2 text-center md:text-left">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 bg-linear-to-r from-[#10b981] via-[#34d399] to-[#6ee7b7] bg-clip-text text-transparent">
                    Tomáš K.
                  </h1>
                  <div className="h-16 mb-6">
                    <p className="text-xl md:text-2xl text-gray-300 font-medium">
                      I code in <span className="text-[#10b981] font-bold"><Typing /></span>
                    </p>
                  </div>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                    Full-stack developer crafting beautiful web experiences and scalable applications. Passionate about clean code, innovative design, and solving complex problems.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      as="a"
                      href="#projects"
                      variant="primary"
                      size="lg"
                      className="bg-linear-to-r from-[#10b981] to-[#059669] font-semibold shadow-lg shadow-[#10b981]/30 hover:shadow-xl hover:shadow-[#10b981]/50"
                    >
                      View My Work
                    </Button>
                    <Button
                      as="a"
                      href="https://www.buymeacoffee.com/panokurka"
                      target="_blank"
                      rel="noreferrer"
                      variant="bordered"
                      size="lg"
                      className="border-2 border-[#10b981]/50 hover:border-[#10b981] hover:bg-[#10b981]/10 font-semibold"
                    >
                      Buy Me Coffee
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-6 mb-20">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.label}
                  className="p-3 rounded-full bg-[#18181B] border border-[#10b981]/30 hover:border-[#10b981] hover:bg-[#10b981]/10 transition-all duration-300 group"
                >
                  <Icon
                    icon={social.icon}
                    width={24}
                    height={24}
                    className="transition-colors"
                    style={{ color: social.color }}
                  />
                </a>
              ))}
            </motion.div>

            {/* Projects Section */}
            <motion.div variants={itemVariants} id="projects" className="mt-32">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black mb-2 text-white">Featured Projects</h2>
                <div className="h-1 w-32 bg-linear-to-r from-[#10b981] to-[#059669]" />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group h-80"
                    onMouseEnter={() => setHoveredProject(idx)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <a
                      href={project.link}
                      target={project.link.startsWith('http') ? '_blank' : undefined}
                      rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                      className="h-full block"
                    >
                      <div className="h-full bg-[#18181B]/80 backdrop-blur border border-[#10b981]/20 hover:border-[#10b981]/50 transition-all duration-300 overflow-hidden rounded-lg cursor-pointer">
                        {/* Image */}
                        <div className="relative h-full overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex gap-2 flex-wrap">
                              <span className="px-3 py-1 bg-[#10b981]/30 text-[#10b981] rounded-full text-sm font-medium">
                                {project.tag}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#059669]/5 rounded-full blur-3xl pointer-events-none" />
      </motion.div>
    </Layout>
  )
}