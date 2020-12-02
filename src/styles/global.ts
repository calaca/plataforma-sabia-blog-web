import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	${({ theme: { colors } }) => css`
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    *:focus {
      outline: 0;
    }

    html {
      font-size: 62.5%;
    }

    body {
      -webkit-font-smoothing: antialiased;
      font-family: -apple-system, BlinkMacSystemFont, Montserrat, sans-serif;
      overflow-x: hidden;
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
      :hover {
        cursor: pointer;
      }
    }

    ul {
      list-style: none;
    }

    button {
      cursor: pointer;
    }

    iframe {
      border: none;
    }

    /* NProgress Styles */
    #nprogress {
      pointer-events: none;
    }

    #nprogress .bar {
      background: ${colors.darkGreen};

      position: fixed;
      z-index: 1100;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    /* Fancy blur effect */
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #29d, 0 0 5px #29d;
      opacity: 1;

      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1100;
      top: 15px;
      right: 15px;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${colors.darkGreen};
      border-left-color: ${colors.darkGreen};
      border-radius: 50%;

      -webkit-animation: nprogress-spinner 400ms linear infinite;
      animation: nprogress-spinner 400ms linear infinite;
    }

    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }

    @-webkit-keyframes nprogress-spinner {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes nprogress-spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;

export default GlobalStyles;
