import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import MainNav from '../components/main_nav'
import { box, container } from '../../styles/layout'
import { title } from '../../styles/typography'


export default function Home() {
  return (
    <>
      <Head>
        <title>HeimV - Die Heimverwaltungssoftware</title>
      </Head>
      <MainNav></MainNav>

      <section css={[container]}>
        <h2 css={title}>AGB</h2>
      </section>
    </>
  )
}
