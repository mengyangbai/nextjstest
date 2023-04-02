import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Premium Dynamic Page #1</title>
        <meta name="description" content="This page is private premium with authentication. Caching." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/">
          <div className={styles.backButton}>
              <h1 className={styles.backButtonArrow}>{"<"}</h1>
          </div>
      </Link>
     
      <main >
      <div className={styles.imageWrapper}>
            <Image
              src="https://www.theandroidportal.com/wp-content/uploads/2017/02/What-is-Cached-Data.jpg"
              alt="Next.js Logo"
              width={957}
              height={538}
            />
          </div>

        <div >
          <h1>Premium Dynamic Page #1</h1>
          
        </div>
        <div className={styles.footer}>
          <p>TestingNextCloudFrontS3Auth0-03.31.2023</p>
        </div>
      </main>
    </>
  )
}
