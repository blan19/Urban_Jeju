import { css, Global } from '@emotion/react';
import { FC } from 'react';

const styles = css`
  @font-face {
    font-family: 'Gmaket Sans';
    font-display: fallback;
    src: url('./GmarketSansTTFBold.ttf') format('truetype');
    font-weight: 600;
    font-style: bold;
  }

  @font-face {
    font-family: 'Gmaket Sans';
    font-display: fallback;
    src: url('./GmarketSansTTFMedium.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gmaket Sans';
    font-display: fallback;
    src: url('./GmarketSansTTFLight.ttf') format('truetype');
    font-weight: 300;
    font-style: light;
  }
  html,
  body {
    font-size: 62.5%;
    font-family: -apple-system, Gmaket Sans, sans-serif;
    background: #ffffff;
    @media screen and (max-width: 1280px) {
      font-size: 56.25%;
    }
    @media screen and (max-width: 1024px) {
      font-size: 50%;
    }
    @media screen and (max-width: 768px) {
      font-size: 37.5%;
    }
    @media screen and (max-width: 480px) {
      font-size: 25%;
    }
    @media screen and (max-width: 480px) {
      font-size: 20%;
    }
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  ul,
  li {
    padding: 0;
    list-style: none;
  }
`;

const GlobalStyles: FC = ({ children }) => {
  return <Global styles={styles} />;
};

export default GlobalStyles;
