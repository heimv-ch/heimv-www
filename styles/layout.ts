import { css } from "@emotion/react";

export const container = css`
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;

& > * {
  max-width: 960px;
  width: 100%;
}
`
export const box = css`
  border-radius: 0.65em;
  background: var(--background-circle);
  color: white;
  padding: 1.8em;
  margin-bottom: 4em;
`
