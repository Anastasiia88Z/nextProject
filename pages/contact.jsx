import { Navbar } from '../components/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function ContactPage() {
    return (
        <div className={styles.container}>

            <Navbar />

            <Head>
                <title>About - Anastasiia</title>
                <meta name="description" content="Contact Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <h1>Contact page</h1>

                <h1 className={styles.title}>
                    Ir a <Link href="/">Home</Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/contact.jsx</code>
                </p>

            </main>

        </div>
    )
}
