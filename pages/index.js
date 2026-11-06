'use client'

import Layout from '../components/layout'
import { Icon } from '@iconify/react'
import Typing from '../components/typing'
import { motion } from 'framer-motion'
import ParticlesComponent from '../components/paticlecomponent'

const projects = [
  {
    title: 'Atropol',
    description: 'Web application',
    image: '/images/projects/Atropol.png',
    link: 'https://atropol.eu',
    tag: 'Website'
  },
  {
    title: 'Atropol Dashboard',
    description: 'Admin dashboard',
    image: '/images/projects/Atropol-Dash.png',
    link: 'https://panel.atropol.eu',
    tag: 'Dashboard'
  },
  {
    title: 'Dragonex',
    description: 'Game project',
    image: '/images/projects/Dragonex.jpg',
    link: null,
    tag: 'Web of minecraft server'
  },
  {
    title: 'OkurkaCraft Site',
    description: 'Community site',
    image: '/images/projects/OkurkaCraftSite.png',
    link: null,
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
  return (
    <Layout
      title="Tomáš K. | Pan_Okurka"
      description="I build web apps, dashboards, and infrastructure. Currently working with Atropol Hosting and InPacket Network."
    >
      <motion.div 
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        initial={false}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        className="w-full min-h-screen bg-linear-to-b from-[#27272a] via-[#27272a] to-[#1a1a1e] relative overflow-hidden"
      >
        <ParticlesComponent />
        
        {/* Main Content */}
        <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial={false}
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
                    I build web apps, dashboards, and infrastructure. I’m currently working with Atropol Hosting and InPacket Network.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#projects"
                      className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#10b981] to-[#059669] px-6 py-3 font-semibold text-white shadow-lg shadow-[#10b981]/30 transition-shadow hover:no-underline hover:shadow-xl hover:shadow-[#10b981]/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#34d399]"
                    >
                      View My Work
                    </a>
                    <a
                      href="https://www.buymeacoffee.com/panokurka"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border-2 border-[#10b981]/50 px-6 py-3 font-semibold text-white transition-colors hover:border-[#10b981] hover:bg-[#10b981]/10 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#34d399]"
                    >
                      Buy Me Coffee
                    </a>
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
            <motion.div variants={itemVariants} id="projects" className="mt-32 scroll-mt-12">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-black mb-2 text-white">Featured Projects</h2>
                <div className="h-1 w-32 bg-linear-to-r from-[#10b981] to-[#059669]" />
              </div>

              <motion.div
                variants={containerVariants}
                initial={false}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projects.map((project) => {
                  const ProjectCard = project.link ? 'a' : 'article'
                  const externalLink = project.link?.startsWith('http')

                  return (
                    <motion.div
                      key={project.title}
                      variants={itemVariants}
                      className="h-full"
                    >
                      <ProjectCard
                        {...(project.link ? {
                          href: project.link,
                          target: externalLink ? '_blank' : undefined,
                          rel: externalLink ? 'noopener noreferrer' : undefined,
                        } : {})}
                        className={`group block h-full overflow-hidden rounded-lg border border-[#10b981]/20 bg-[#18181B]/80 text-gray-300 backdrop-blur transition-colors ${
                          project.link ? 'hover:border-[#10b981]/50 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10b981]' : ''
                        }`}
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`h-full w-full object-cover transition-transform duration-500 ${project.link ? 'group-hover:scale-105' : ''}`}
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                          <p className="mb-4 text-sm leading-relaxed text-gray-300">{project.description}</p>
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-3 py-1 text-xs font-medium text-[#34d399]">
                              {project.tag}
                            </span>
                            {project.link ? (
                              <span className="text-sm font-medium text-[#34d399]">
                                Visit project <span aria-hidden="true">↗</span>
                              </span>
                            ) : (
                              <span className="text-xs text-gray-400">No live link</span>
                            )}
                          </div>
                        </div>
                      </ProjectCard>
                    </motion.div>
                  )
                })}
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