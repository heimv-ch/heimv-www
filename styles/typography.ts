import { css } from "@emotion/react";

export const title = css`
  font-size: min(max(2rem, 4vw), 4rem);
  text-align: center;
  margin: 3em;
  margin-left: 1em;
  margin-right: 1em;
  text-shadow: 0 0 0.5em rgba(0, 0, 0, 0.15);
}

& strong {
  color: var(--color-dark);
}`
