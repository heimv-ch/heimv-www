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
`
}

export default function MainNav() {
  return (
    <header css={container}>
      <nav css={styles.nav}>
        <Link href='/'>
          <Image src="/assets/logo.svg" alt="HeimV Logo" width={150} height={48} />
        </Link>
        <div>
          <a className="action-button" href="https://github.com/diegosteiner/heimv">zum Code</a>
          <a className="action-button bold" href="https://app.heimv.ch">zur App</a>
        </div>
      </nav>
    </header>
  )
}
