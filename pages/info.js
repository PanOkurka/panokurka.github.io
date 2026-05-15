import Layout from '../components/layout'
import { motion } from 'framer-motion'
import { ProgressBar, Card } from '@heroui/react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const skills = [
  {
    category: 'Front-End',
    icon: '🎨',
    proficiency: 100,
    description: 'HTML, CSS, SCSS, TailwindCSS, JS, TS, ReactJS, NextJS, Webpack, HeroUI'
  },
  {
    category: 'Back-End',
    icon: '⚙️',
    proficiency: 35,
    description: 'PHP, NodeJS, GoLang and some Java'
  },
  {
    category: 'Database',
    icon: '💾',
    proficiency: 45,
    description: 'MySQL, MongoDB, SQLite, Redis, Prisma'
  },
  {
    category: 'Dev Ops',
    icon: '🚀',
    proficiency: 65,
    description: 'NGINX, AWS, Docker, WHMCS, ProxMox, Hetzner, OCI, Qemu'
  }
]

export default function Info() {
  return (
    <Layout>
      <motion.div 
        exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.5 } }} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        className="w-full min-h-screen bg-linear-to-b from-[#27272a] via-[#27272a] to-[#1a1a1e] relative overflow-hidden"
      >
        {/* Main Content */}
        <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h1 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-[#10b981] via-[#34d399] to-[#6ee7b7] bg-clip-text text-transparent">
                My Skills
              </h1>
              <div className="h-1 w-32 bg-linear-to-r from-[#10b981] to-[#059669] mb-6" />
              <p className="text-xl text-gray-300">Here's an overview of my technical expertise and proficiency levels across different domains.</p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {skills.map((skill, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="h-full bg-[#18181B]/80 backdrop-blur border border-[#10b981]/20 hover:border-[#10b981]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#10b981]/10">
                    <Card.Content className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl">{skill.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
                          <div className="inline-block mt-2 px-3 py-1 bg-[#10b981]/20 rounded-full border border-[#10b981]/30">
                            <span className="text-[#10b981] font-semibold text-sm">{skill.proficiency}% Proficiency</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm mb-5 leading-relaxed">{skill.description}</p>

                      {/* Custom Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-400">Proficiency Level</span>
                          <span className="text-xs font-semibold text-[#10b981]">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#10b981]/20 rounded-full overflow-hidden border border-[#10b981]/30">
                          <motion.div
                            className="h-full bg-linear-to-r from-[#10b981] to-[#34d399]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: 'easeOut', delay: idx * 0.1 }}
                          />
                        </div>
                      </div>
                    </Card.Content>
                  </Card>
                </motion.div>
              ))}
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