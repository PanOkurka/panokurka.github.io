import Layout from '../components/layout'
import { motion } from 'framer-motion'
import { Card } from '@heroui/react'
import { Icon } from '@iconify/react'

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

const projects = [
  {
    id: 18,
    title: 'OkurkaCraft V2',
    type: 'Minecraft whitelist server',
    date: '2026 - present',
    icon: <Icon icon="vscode-icons:file-type-minecraft" />,
    description: 'Founder and Developer'
  },
  {
    id: 19,
    title: 'InPacket Network',
    type: 'Rack & Housing provider',
    date: '2026 - present',
    icon: <Icon icon="streamline-freehand-color:network" />,
    description: 'CTO & Dev'
  },
  {
    id: 17,
    title: 'Atropol Hosting',
    type: 'Game, VPS, Dedicated Server and more',
    date: '2023 - present',
    icon: <Icon icon="streamline-stickies-color:server-network" />,
    description: 'CTO & Dev'
  },
  {
    id: 14,
    title: 'Greenex Network',
    type: 'Soon... | Currently paused.',
    date: '2023 - present',
    icon: <Icon icon="vscode-icons:file-type-minecraft" />,
    description: 'Founder, Technik'
  },
  {
    id: 15,
    title: 'Freelancer',
    type: 'Various Projects',
    date: '2022 - present',
    icon: <Icon icon="devicon:nextjs" />,
    description: 'Web development, network consulting'
  },
  {
    id: 16,
    title: 'OkurkaCraft S2',
    type: 'Minecraft whitelist server',
    date: '2022 - 2024',
    icon: <Icon icon="vscode-icons:file-type-minecraft" />,
    description: 'Founder and Developer'
  },
  {
    id: 12,
    title: 'Ethernal',
    type: 'Minecraft Server',
    date: '2022 - 2022',
    icon: <Icon icon="devicon:nextjs" />,
    description: 'Website Developer'
  },
  {
    id: 13,
    title: 'Mejs.cz',
    type: 'Minecraft Server',
    date: '2022 - 2022',
    icon: <Icon icon="devicon:javascript" />,
    description: 'Discord bot Developer'
  },
  {
    id: 9,
    title: 'Plugin Translation',
    type: 'Minecraft - TechsCode',
    date: '2021 - present',
    icon: <Icon icon="streamline-sharp-color:translate-text-flat" />,
    description: 'Translations of TechsCode minecraft plugins'
  },
  {
    id: 10,
    title: 'Cucumber/Dragonex Radio',
    type: 'Discord Bot',
    date: '2021 - 2025',
    icon: <Icon icon="devicon:javascript" />,
    description: 'Simple 24/7 radio of lofi music'
  },
  {
    id: 11,
    title: 'Dragonex Network',
    type: 'Minecraft Server',
    date: '2021 - 2022',
    icon: <Icon icon="vscode-icons:file-type-minecraft" />,
    description: 'Website Developer, Technik'
  },
  {
    id: 8,
    title: 'Okurka Images',
    type: 'Docker',
    date: '2021 - 2022',
    icon: <Icon icon="devicon:docker" />,
    description: 'Some docker images for minecraft'
  },
  {
    id: 5,
    title: 'Baby-Cucumber v2.0',
    type: 'Discord Bot',
    date: '2020 - present',
    icon: <Icon icon="devicon:javascript" />,
    description: 'Advanced Discord Bot with lot of features.'
  },
  {
    id: 6,
    title: 'OkurkaCraft S1',
    type: 'Minecraft server',
    date: 'late 2019 - early 2021',
    icon: <Icon icon="vscode-icons:file-type-minecraft" />,
    description: 'My own minecraft server with whitelist'
  },
  {
    id: 7,
    title: 'Atropol',
    type: 'MC, Hosting, Other',
    date: '2019 - 2021',
    icon: <Icon icon="streamline-stickies-color:server-network" />,
    description: 'Technik and Developer'
  },
  {
    id: 2,
    title: 'Baby-Cucumber v1.0',
    type: 'Discord Bot',
    date: '2019 - 2020',
    icon: <Icon icon="devicon:javascript" />,
    description: 'Basic Discord Bot with features for moderation, fun and more.',
  },
  {
    id: 4,
    title: 'DarkMines (VIPCraft)',
    type: 'Minecraft Server',
    date: '2019 - 2020',
    icon: <Icon icon="vscode-icons:file-type-minecraft" />,
    description: 'Builder, Admin, Technik'
  },
  {
    id: 3,
    title: 'AdvancedCraft',
    type: 'Minecraft Server',
    date: '2019 - 2019',
    icon: <Icon icon="vscode-icons:file-type-minecraft" />,
    description: 'Technik of this server'
  },
  {
    id: 1,
    title: 'Website Developer',
    type: 'Career',
    date: '2017 - present',
    icon: <Icon icon="devicon:html5" />,
    description: 'At this time only HTML, CSS and basic JS. After some time moved to ReactJS. And now NextJS, TailwindCSS and more.',
    location: 'Czechia'
  },
]

export default function Projects() {
  return (
    <Layout
      title="Projects & Experience | Tomáš K."
      description="Explore Tomáš K.'s project history, from recent hosting and network work to earlier web and community projects."
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
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h1 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-[#10b981] via-[#34d399] to-[#6ee7b7] bg-clip-text text-transparent">
                My Projects
              </h1>
              <div className="h-1 w-32 bg-linear-to-r from-[#10b981] to-[#059669] mb-6" />
              <p className="text-xl text-gray-300">Recent work and projects first, followed by earlier milestones.</p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              variants={containerVariants}
              initial={false}
              animate="visible"
              className="relative"
            >
              {/* Vertical line - centered */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#10b981] to-[#059669] opacity-30 transform -translate-x-1/2" />
              {/* Mobile vertical line on left */}
              <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#10b981] to-[#059669] opacity-30" />

              {/* Timeline items */}
              <div className="space-y-16">
                {projects.map((project, idx) => {
                  const isEven = idx % 2 === 0;
                  
                  return (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="relative"
                    >
                      {/* Desktop layout - alternating sides */}
                      <div className={`hidden md:flex md:items-start md:gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        {/* Card - takes up left/right side */}
                        <div className="flex-1">
                          <Card className="bg-[#18181B]/80 backdrop-blur border border-[#10b981]/20 hover:border-[#10b981]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#10b981]/10">
                            <Card.Content className="p-6">
                              <span className="text-xs font-semibold text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full inline-block mb-3">
                                {project.date}
                              </span>
                              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                              <p className="text-[#34d399] font-semibold text-sm mb-3">{project.type}</p>
                              <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                            </Card.Content>
                          </Card>
                        </div>

                        {/* Icon - centered on timeline */}
                        <div className="flex justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 rounded-full bg-linear-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-white text-xl shadow-lg shadow-[#10b981]/30 relative z-10 shrink-0"
                          >
                            {project.icon}
                          </motion.div>
                        </div>

                        {/* Spacer for alignment */}
                        <div className="flex-1" />
                      </div>

                      {/* Mobile layout - single column */}
                      <div className="md:hidden flex gap-4 items-start">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-12 h-12 rounded-full bg-linear-to-br from-[#10b981] to-[#059669] flex items-center justify-center text-white text-lg shadow-lg shadow-[#10b981]/30 relative z-10 shrink-0 mt-1"
                        >
                          {project.icon}
                        </motion.div>
                        
                        <Card className="flex-1 bg-[#18181B]/80 backdrop-blur border border-[#10b981]/20 hover:border-[#10b981]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#10b981]/10">
                          <Card.Content className="p-4">
                            <span className="text-xs font-semibold text-[#10b981] bg-[#10b981]/10 px-3 py-1 rounded-full inline-block mb-2">
                              {project.date}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                            <p className="text-[#34d399] font-semibold text-xs mb-2">{project.type}</p>
                            <p className="text-gray-300 text-xs leading-relaxed">{project.description}</p>
                          </Card.Content>
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
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