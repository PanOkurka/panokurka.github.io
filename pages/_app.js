import '../styles/tailwind.css'
import '../styles/global.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setIsReady(router.isReady)
    }, [router.isReady])

    return (
        <AnimatePresence mode="wait">
          {isReady && <Component {...pageProps} key={router.route} />}
        </AnimatePresence>
    )
  }