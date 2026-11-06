import Layout from '../components/layout'
import { motion } from 'framer-motion'
import { Card } from '@heroui/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const bioSections = [
  {
    icon: '👋',
    title: 'About Me',
    content: 'I\'m Tomáš K. from Czechia, known online as Pan_Okurka. I\'m a student, athlete, and developer who enjoys building useful web projects.',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/panokurka_official/', external: true }
    ]
  },
  {
    icon: '💻',
    title: 'My Journey',
    content: 'I build websites, dashboards, and infrastructure. My current work includes Atropol Hosting and InPacket Network, alongside earlier community and game-server projects.',
    links: [
      { label: 'Explore my projects', href: '/projects' }
    ]
  },
  {
    icon: '🚀',
    title: 'Let\'s Connect',
    content: 'Have a project in mind or want to get in touch? Reach me by email or Discord.',
    links: [
      { label: 'Email me', href: 'mailto:okurka@baby-cucumber.com' },
      { label: 'Discord', href: 'https://discord.gg/wn5aF2w', external: true }
    ]
  }
]

export default function Bio() {
  return (
    <Layout
      title="About Tomáš K. | Pan_Okurka"
      description="Meet Tomáš K. (Pan_Okurka), a developer from Czechia building web projects and infrastructure."
    >
      <motion.div 
        exit={{ opacity: 0, transition: { duration: 0.6 } }} 
        initial={false}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        className="w-full min-h-screen bg-linear-to-b from-[#27272a] via-[#27272a] to-[#1a1a1e] relative overflow-hidden"
      >
        {/* Main Content */}
        <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial={false}
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h1 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-[#10b981] via-[#34d399] to-[#6ee7b7] bg-clip-text text-transparent">
                My Story
              </h1>
              <div className="h-1 w-32 bg-linear-to-r from-[#10b981] to-[#059669] mb-6" />
              <p className="text-xl text-gray-300">Get to know more about me, my journey, and what I love doing.</p>
            </motion.div>

            {/* Bio Sections Grid */}
            <motion.div
              variants={containerVariants}
              initial={false}
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            >
              {bioSections.map((section, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="h-full bg-[#18181B]/80 backdrop-blur border border-[#10b981]/20 hover:border-[#10b981]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#10b981]/10">
                    <Card.Content className="p-6">
                      <div className="text-4xl mb-4">{section.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{section.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {section.content}
                      </p>
                      {section.links && (
                        <div className="mt-5 flex flex-wrap gap-3">
                          {section.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target={link.external ? '_blank' : undefined}
                              rel={link.external ? 'noopener noreferrer' : undefined}
                              className="text-sm font-semibold text-[#34d399] hover:text-[#6ee7b7] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34d399]"
                            >
                              {link.label}{link.external ? ' ↗' : ''}
                            </a>
                          ))}
                        </div>
                      )}
                    </Card.Content>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlights Section */}
            <motion.div variants={itemVariants} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Coding Since', value: '2017' },
                  { label: 'Projects', value: 'Multiple' },
                  { label: 'Specialization', value: 'Front-End' }
                ].map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-linear-to-br from-[#10b981]/20 to-[#059669]/10 border border-[#10b981]/30 rounded-lg p-6 text-center hover:border-[#10b981]/50 transition-all"
                  >
                    <div className="text-4xl md:text-5xl font-black bg-linear-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent mb-2">
                      {highlight.value}
                    </div>
                    <p className="text-gray-400 font-medium">{highlight.label}</p>
                  </motion.div>
                ))}
              </div>
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