import Head from 'next/head'

export const siteTitle = 'PanOkurka'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/profile.png" />
        <meta
          name="description"
          content="Pan_Okurka's website!"
        />
        <meta name="og:title" content={siteTitle} />
        <title>Pan_Okurka</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}