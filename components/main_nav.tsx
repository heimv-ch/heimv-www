import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
import { container } from '../styles/layout'

const styles = {
  nav: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  button: css`
    padding: 0.5rem;
    border-radius: 0.25rem;
    text-align: center;
    text-decoration: none;
    flex: 0;
    margin-left: 1em;
    white-space: nowrap;
    text-shadow: 0 0 0.25em var(--color-light-gray);

    &:hover {
      text-shadow: 0 0 0.25em var(--color-black);
      color: white;
      text-decoration: none;
    }`
}

export default function MainNav() {
  return (
    <header css={container}>
      <nav css={styles.nav}>
        <Link href='/'>
          <Image src="/assets/logo.svg" alt="HeimV Logo" width={150} height={48} />
        </Link>
        <div>
          <a css={styles.button} href="https://github.com/diegosteiner/heimv">zum Code</a>
          <a css={styles.button} className="bold" href="https://app.heimv.ch">zur App</a>
        </div>
      </nav>
    </header>
  )
}
