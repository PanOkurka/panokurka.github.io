import Layout from '../components/layout'
import { motion } from 'framer-motion'
import { Card } from '@heroui/react'

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
    description: 'Building interfaces and web applications.',
    technologies: ['HTML', 'CSS', 'SCSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Webpack', 'HeroUI']
  },
  {
    category: 'Back-End',
    icon: '⚙️',
    description: 'Server-side development for applications and services.',
    technologies: ['PHP', 'Node.js', 'Go', 'Java']
  },
  {
    category: 'Database',
    icon: '💾',
    description: 'Databases and data-access tools.',
    technologies: ['MySQL', 'MongoDB', 'SQLite', 'Redis', 'Prisma']
  },
  {
    category: 'Dev Ops',
    icon: '🚀',
    description: 'Infrastructure, hosting, and deployment tools.',
    technologies: ['NGINX', 'AWS', 'Docker', 'WHMCS', 'Proxmox', 'Hetzner', 'OCI', 'QEMU']
  }
]

export default function Info() {
  return (
    <Layout
      title="Skills & Technologies | Tomáš K."
      description="Technologies I use across front-end, back-end, databases, and infrastructure."
    >
      <motion.div 
        exit={{ opacity: 0, transition: { duration: 0.6, delay: 0.5 } }} 
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
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h1 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-[#10b981] via-[#34d399] to-[#6ee7b7] bg-clip-text text-transparent">
                My Skills
              </h1>
              <div className="h-1 w-32 bg-linear-to-r from-[#10b981] to-[#059669] mb-6" />
              <p className="text-xl text-gray-300">Tools I use across web development, applications, databases, and infrastructure.</p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              initial={false}
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {skills.map((skill) => (
                <motion.div key={skill.category} variants={itemVariants}>
                  <Card className="h-full bg-[#18181B]/80 backdrop-blur border border-[#10b981]/20 hover:border-[#10b981]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#10b981]/10">
                    <Card.Content className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl">{skill.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white">{skill.category}</h3>
                        </div>
                      </div>

                      <p className="mb-5 text-sm leading-relaxed text-gray-300">{skill.description}</p>
                      <ul className="flex flex-wrap gap-2">
                        {skill.technologies.map((technology) => (
                          <li
                            key={technology}
                            className="rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-3 py-1 text-sm font-medium text-[#d1fae5]"
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </Card.Content>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.section variants={itemVariants} className="mt-16">
              <h2 className="mb-6 text-3xl font-black text-white">See my work</h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://atropol.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#10b981]/30 px-4 py-2 text-sm font-semibold text-[#34d399] hover:border-[#10b981] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34d399]"
                >
                  Atropol website ↗
                </a>
                <a
                  href="https://panel.atropol.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#10b981]/30 px-4 py-2 text-sm font-semibold text-[#34d399] hover:border-[#10b981] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34d399]"
                >
                  Atropol dashboard ↗
                </a>
                <a
                  href="/projects"
                  className="rounded-full border border-[#10b981]/30 px-4 py-2 text-sm font-semibold text-[#34d399] hover:border-[#10b981] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#34d399]"
                >
                  Full project timeline
                </a>
              </div>
            </motion.section>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#059669]/5 rounded-full blur-3xl pointer-events-none" />
      </motion.div>
    </Layout>
  )
}