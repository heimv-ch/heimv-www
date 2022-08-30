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
