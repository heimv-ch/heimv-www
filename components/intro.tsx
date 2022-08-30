
import React from 'react'
import { css } from '@emotion/react'

const style =
	css`
  margin-bottom: 50vw;

	&>div {
		min-height: 100vh;
		background: var(--background-circle);
	}
`



export interface IntroProps {
	children?: React.ReactNode;
}

export default function Intro({ children }: IntroProps) {
	return (
		<section css={style}>
			<div>
				{children}
			</div>
			<svg className="w-100" viewBox="0 0 1192 120" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M484 102.5C224.5 173.5 0 0 0 0H1192V74C1192 74 743.5 31.5 484 102.5Z" fill="#BABAD9" />
			</svg>
		</section >)
}
