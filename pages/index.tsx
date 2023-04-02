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
        <title>Public Page</title>
        <meta name="description" content="This page is public without authentication. No caching." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <div className={styles.textTitle}>
          
          <br></br>
          <h1>Public Page</h1>
          <br></br>

          <div>
            <Link href="/premium/1">
              <button className={styles.premiumButton}>
                Premium Page #1
              </button>
            </Link>

            <Link href="/premium/2">
              <button className={styles.premiumButton}>
                Premium Page #2
              </button>
            </Link>

            <Link href="/premium/3">
              <button className={styles.premiumButton}>
                Premium Page #3
              </button>
            </Link>
          </div>

          <br></br>
          <br></br>

          <div>
            <Link href="/premiumDynamic/1">
              <button className={styles.premiumButton}>
                Premium Dynamic  #1
              </button>
            </Link>
            <Link href="/static">
              <button className={styles.premiumButton}>
                Static Page
              </button>
            </Link>
          </div>

          <div className={styles.footer}>
            <p>TestingNextCloudFrontS3Auth0-03.31.2023</p>
          </div>
        </div>
      </main>
    </>
  )
}
