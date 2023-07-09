import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { Team } from '@/components/Team'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Team Fab - Providing Solutions for a Connected World.</title>
        <meta
          name="description"
          content="Information Technology services company."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        <SecondaryFeatures />
        {/* <CallToAction /> */}
        <Reviews />
        <Team />
        <Projects />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
