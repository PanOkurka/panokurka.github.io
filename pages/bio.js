import Layout from '../components/layout'
import { motion } from 'framer-motion'
import { Card, Button } from "@heroui/react"

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
    content: 'I\'m Thomas K. from the Czech Republic, known as Pan_Okurka. I\'m a student, athlete, and passionate developer with a love for creating beautiful digital experiences. For more about my life, check out my Instagram!'
  },
  {
    icon: '💻',
    title: 'My Journey',
    content: 'I\'ve been coding for 6 years, constantly learning and growing. Currently, I\'m working on several exciting projects that I\'ll be sharing soon. My expertise focuses on front-end development, though I\'m comfortable with back-end technologies too.'
  },
  {
    icon: '🚀',
    title: 'Let\'s Connect',
    content: 'Check out my projects in the Projects tab. You can reach me via Discord (Pan_Okurka) or email (okurka@baby-cucumber.com). I\'m always open to collaborations and new opportunities!'
  }
]

export default function Bio() {
  return (
    <Layout>
      <motion.div 
        exit={{ opacity: 0, transition: { duration: 0.6 } }} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        className="w-full min-h-screen bg-gradient-to-b from-[#27272a] via-[#27272a] to-[#1a1a1e] relative overflow-hidden"
      >
        {/* Main Content */}
        <div className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[#10b981] via-[#34d399] to-[#6ee7b7] bg-clip-text text-transparent">
                My Story
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-[#10b981] to-[#059669] mb-6" />
              <p className="text-xl text-gray-300">Get to know more about me, my journey, and what I love doing.</p>
            </motion.div>

            {/* Bio Sections Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
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
                        {section.content.split(/(\w+(?:\s+\w+)?)/).map((part, i) => {
                          const highlights = ['Pan_Okurka', 'Thomas K.', '6 years', 'front-end', 'back-end', 'Instagram', 'Projects', 'Discord', 'okurka@baby-cucumber.com']
                          if (highlights.includes(part)) {
                            return <span key={i} className="text-[#10b981] font-semibold">{part}</span>
                          }
                          return part
                        })}
                      </p>
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
                  { label: 'Years Coding', value: '6+' },
                  { label: 'Projects', value: 'Multiple' },
                  { label: 'Specialization', value: 'Front-End' }
                ].map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-[#10b981]/20 to-[#059669]/10 border border-[#10b981]/30 rounded-lg p-6 text-center hover:border-[#10b981]/50 transition-all"
                  >
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent mb-2">
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