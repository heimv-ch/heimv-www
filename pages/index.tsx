import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from '../node_modules/next/link'
import MainNav from '../components/main_nav'
import { box, container } from '../styles/layout'
import { css } from '@emotion/react'
import { title } from '../styles/typography'
import Intro from '../components/intro'


export default function Home() {
  return (
    <>
      <Head>
        <title>HeimV - Die Heimverwaltungssoftware</title>
      </Head>
      <Intro>
        <MainNav></MainNav>
        <h1 css={[title]} className="text-white">
          <strong>Das Verwaltungs&shy;werkzeug</strong><br />für Pfadi- und Gruppen&shy;häuser
        </h1>
        <div css={[container]} className="relative">
          <div className="absolute top-0">
            <Image src="/assets/screen-home.png" alt='HeimV' width={1542} height={1138} />
          </div>
        </div>
      </Intro>

      <section css={[container]}>
        <h2 css={title}>
          Reservations&shy;verwaltung<br />
          von <strong>A</strong>nfrage bis <strong>Z</strong>ahlung
        </h2>
        <h3>Features</h3>
        <ul>
          <li>Reservationsanfragen verwalten</li>
          <li>Verträge und Anzahlungen erstellen</li>
          <li>Tarife für Buchungen festlegen</li>
          <li>Verbrauch abrechnen</li>
          <li>Rechnungen versenden</li>
          <li>Zahlungen via ESR-Standard einlesen und verwalten</li>
        </ul>
        <p>... alles bequem über den Browser.</p>
        <h4 className="center">Reservationsanfragen</h4>
        <figure>
          <Image src="/assets/screen-book-1.png" alt="" width={1542} height={1138} />
          <figcaption>Reservationsformular Schritt 1</figcaption>
        </figure>
        <figure>
          <Image src="/assets/screen-book-2.png" alt="" width={1542} height={1138} />
          <figcaption>Reservationsformular Schritt 2</figcaption>
        </figure>
        <figure>
          <Image src="/assets/screen-bookings.png" alt="" width={1542} height={1138} />
          <figcaption>Verwaltungsansicht</figcaption>
        </figure>
        <h4 className="center">Tarife und Verbrauch</h4>
        <figure>
          <Image src="/assets/screen-booking.png" alt="" width={1542} height={1138} />
          <figcaption>Buchungsansicht</figcaption>
        </figure>
        <figure>
          <Image src="/assets/screen-usages.png" alt="" width={1542} height={1138} />
          <figcaption>Verbrauch</figcaption>
        </figure>
        <figure>
          <Image src="/assets/screen-tenant.png" alt="" width={1542} height={1138} />
          <figcaption>Mieterübersicht</figcaption>
        </figure>
        <h4 className="center">Rechnungen und Zahlungen</h4>
        <figure>
          <Image src="/assets/screen-invoices.png" alt="" width={1542} height={1138} />
          <figcaption>Rechnungsübersicht</figcaption>
        </figure>
        <h4 className="center">Prozess</h4>
        <figure>
          <Image src="/assets/screen-processes.png" alt="" width={1542} height={1138} />
        </figure>
      </section>
      <section css={[container]}>
        <h3>Die Story</h3>
        <p>
          HeimV wurde als Werkzeug für den gesamten Buchungs- und Abrechnungsprozess für die Heime des
          &nbsp;<a href="https://pfadi-heime.ch">Vereins Pfadiheime St. Georg</a> konzipiert und 2019 umgesetzt.
        </p>
        <p>
          2020 kamen weitere Heimvereine dazu. Seit 2021 wird HeimV von der
          &nbsp;<a href="https://stiftung-pfadiheime.ch/">Stiftung Pfadiheime Schweiz unterstützt</a>.
        </p>
        <p>HeimV ist open source Software (<a href="https://github.com/diegosteiner/heimv">GitHub</a>) und wird stetig
          weiterentwickelt.</p>
      </section>
      <section css={[container]}>
        <div css={box}>
          <h2 className="text-dark">Demonstration gefällig?</h2>
          <p>Hat HeimV dein Interesse geweckt? <a href="mailto:info@heimv.ch">Demozugang jetzt beantragen</a></p>
        </div>
      </section>
    </>
  )
}
