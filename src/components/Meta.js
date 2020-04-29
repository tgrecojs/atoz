import Head from 'next/head'

export default function Meta(props) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>{props.siteTitle}</title>
        <meta name="Description" content={props.description}></meta>
        <link rel="alternate" hrefLang="en" href="https://atozinfp.com" />
        <link rel="alternate" hrefLang="de" href="https://de.atozinfp.com" />
        <link rel="alternate" hrefLang="pt" href="https://pt.atozinfp.com" />
        <link rel="alternate" hrefLang="ru" href="https://ru.atozinfp.com" />
        <link rel="alternate" hrefLang="es" href="https://es.atozinfp.com" />
        <link href="favicon-16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="favicon-32.png" rel="icon" type="image/png" sizes="32x32" />
        <link href="favicon-48.png" rel="icon" type="image/png" sizes="48x48" />
        <link href="touch-icon-iphone.png" rel="apple-touch-icon" />
        <link href="touch-icon-ipad.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="touch-icon-iphone-retina.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="touch-icon-ipad-retina.png" rel="apple-touch-icon" sizes="152x152" />
        {/* <!-- Startup Image  --> */}
        <link href="touch-icon-start-up-320x480.png" rel="apple-touch-startup-image" />

        {/* <!-- Pinned Tab  --> */}
        <link href="path/to/icon.svg" rel="mask-icon" size="any" color="red" />

        {/* <!-- Android  --> */}
        <link href="icon-192x192.png" rel="icon" sizes="192x192" />
        <link href="icon-128x128.png" rel="icon" sizes="128x128" />
        {/* <!-- Others --> */}
        <link href="favicon.icon" rel="shortcut icon" type="image/x-icon" />

        {/* <!-- UC Browser  --> */}
        <link href="images/icon-52x52.png" rel="apple-touch-icon-precomposed" sizes="57x57" />
        <link href="images/icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
        <link rel="manifest" href="/static/manifest.json" />
        {/* <script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script> */}
      </Head>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Work+Sans&display=swap');

          * {
            box-sizing: inherit;
          }
          html {
            box-sizing: border-box;
            overflow-y: scroll;
          }
          body {
            margin: 0;
            font-family: 'Work Sans', 'Helvetica Neue', Helvetica, sans-serif;
            overflow-x: hidden;
            color: #000;
            font-size: 16px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          a {
            text-decoration: none;
            color: inherit;
            transition: opacity 0.2s ease;
          }
          a:hover {
            transition: opacity 0.2s ease;
            opacity: 0.5;
            text-decoration-color: inherit;
          }
          ul {
            list-style: none;
            margin: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            list-style-position: outside;
            list-style-image: none;
          }
          ol {
            margin: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            list-style-position: outside;
            list-style-image: none;
          }
          ul,
          ol,
          p {
            margin-bottom: 1.45rem;
          }
          img {
            max-width: 100%;
          }
          img,
          figure,
          table,
          fieldset {
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            margin-bottom: 1.45rem;
          }
          pre {
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            margin-bottom: 1.45rem;
            font-size: 0.85rem;
            line-height: 1.42;
            background: hsla(0, 0%, 0%, 0.04);
            border-radius: 3px;
            overflow: auto;
            word-wrap: normal;
            padding: 1.45rem;
          }
          table {
            font-size: 1rem;
            line-height: 1.45rem;
            border-collapse: collapse;
            width: 100%;
          }
          blockquote {
            margin-left: 1.45rem;
            margin-right: 1.45rem;
            margin-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            margin-bottom: 1.45rem;
          }
          strong {
            font-weight: bold;
          }
          li {
            margin-bottom: calc(1.45rem / 2);
          }
          ol li {
            padding-left: 0;
          }
          ul li {
            padding-left: 0;
          }
          li > ol {
            margin-left: 1.45rem;
            margin-bottom: calc(1.45rem / 2);
            margin-top: calc(1.45rem / 2);
          }
          li > ul {
            margin-left: 1.45rem;
            margin-bottom: calc(1.45rem / 2);
            margin-top: calc(1.45rem / 2);
          }
          blockquote *:last-child {
            margin-bottom: 0;
          }
          li *:last-child {
            margin-bottom: 0;
          }
          p *:last-child {
            margin-bottom: 0;
          }
          li > p {
            margin-bottom: calc(1.45rem / 2);
          }
          code {
            font-size: 0.85rem;
            line-height: 1.45rem;
          }

           {
            /* //TYPOGRAPHY------------------------------------- */
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            font-family: 'Work Sans', 'Helvetica Neue', Helvetica, sans-serif;
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            margin-bottom: 1.45rem;
            color: inherit;
            text-rendering: optimizeLegibility;
          }

          h1,
          h2 {
            font-weight: 500;
          }

          h1 {
            font-size: 2rem;
            letter-spacing: -1px;
            line-height: 1.1875;
          }

          h2 {
            font-size: 1.7rem;
            letter-spacing: -0.75px;
            line-height: 1.2;
          }

          h3 {
            font-size: 1.2rem;
            letter-spacing: -0.5px;
            line-height: 1.1875;
            color: #fff;
            font-weight: normal;
          }

          p {
            font-size: 1.2rem;
            letter-spacing: -0.5px;
            line-height: 1.5;
            color: #464646;
          }

          @media (min-width: 1280px) {
            h1 {
              font-size: 2rem;
              letter-spacing: -1px;
              line-height: 1.1875;
            }

            h2 {
              font-size: 1.5rem;
              letter-spacing: -0.75px;
              line-height: 1.1667;
            }

            h3 {
              font-size: 1rem;
              letter-spacing: -0.5px;
              line-height: 1.1875;
              color: #a0a0a0;
              font-weight: normal;
            }

            p {
              line-height: 1.4375;
            }
          }
        `}
      </style>
    </>
  )
}
