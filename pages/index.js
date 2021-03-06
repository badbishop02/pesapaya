import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
const pay = () => {

  fetch('https://tinypesa.com/api/v1/express/initialize', {
      method: 'POST',
      body: "amount=1&msisdn=0111225811&account_no=200",
      headers: {
        'Apikey': "62c9e6b670a7b",
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(objectWithData),
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="404">Atom NFT's!</a>
        </h1>
        <div className={styles.grid}>
          <a href="404" className={styles.card}>
            <h2>Elephant NFT &rarr;</h2>
            <img 
            src="https://imgs.search.brave.com/gvrq5ZnsUP9kbjq_7e-2tGPCgbvyGPCXmJDVCiQbdPM/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/S2RsMDJ1NmJsYnBV/cWEtLVlOV0ZBSGFI/YSZwaWQ9QXBp" 
            alt="elephant nft" 
            />
            <button onclick={pay}>
              Buy it
            </button>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
