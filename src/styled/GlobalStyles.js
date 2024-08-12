import GlobalStylesMui from '@mui/material/GlobalStyles';

function GlobalStyles() {
  return (
    <GlobalStylesMui
      styles={({ palette }) => `
        html {
          font-family: 'Poppins', system-ui, Helvetica, Arial, sans-serif;
          line-height: 1.8;
        }

        body {
          background: ${palette.background.body};
          color: ${palette.text.primary};
        }

        .container-fluid {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 12px;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          line-height: 1.2;
        }

        h1 {
          margin: 0 0 48px;
          font-size: 40px;
          font-weight: 600;
          text-align: center;
        }

        h2 {
          margin: 0 0 16px;
          font-size: 32px;
        }

        /* h3 {
          margin: 0 0 16px;
          font-size: 32px;
          font-weight: 400;
        } */

        h3 {
          margin: 0 0 10px;
          font-size: 28px;
          font-weight: 500;
        }

        .h2-decoration {
          border-bottom: 3px solid #f5df4e;
          font-weight: 700;
        }

        .text {
          p {
            margin: 0 0 16px;
            font-size: 21px;
          }

          > *:last-child {
            margin-bottom: 0 !important;
          }
        }

        .main-colors {
          color: ${
            palette.mode === 'dark'
              ? palette.common.pumpkin
              : palette.common.yellow
          }
        }
        `}
    />
  );
}

export default GlobalStyles;
