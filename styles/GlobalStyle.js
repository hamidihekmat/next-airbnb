import { Global, css } from '@emotion/react';

export const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      html,
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        color: #1f2937;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 2.5rem;
      }
      h3,
      h4 {
        font-size: 1.3rem;
        font-weight: 500;
      }

      button:active {
        outline: none;
        border: none;
      }

      button:focus {
        outline: 0;
      }
    `}
  />
);
