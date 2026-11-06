import Head from 'next/head'
import { useState } from 'react'
import { Navbar } from './Navbar'

export const siteTitle = 'PanOkurka'

export default function Layout({
  children,
  title = 'Tomáš K. | Pan_Okurka',
  description = 'I build web applications and infrastructure. Explore my projects and experience.',
}) {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/panokurka.jpeg" />
        <meta
          name="description"
          content={description}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <title>{title}</title>
      </Head>
      <Navbar open={navOpen} onToggle={() => setNavOpen(open => !open)} />
      <main className={`min-w-0 pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0 md:transition-[margin-left] md:duration-300 motion-reduce:transition-none ${navOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        {children}
      </main>
    </div>
  )
}