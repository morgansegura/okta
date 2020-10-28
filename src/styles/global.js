import {createGlobalStyle} from 'styled-components'
// import {generateMedia} from 'styled-media-query'
//
// const customMedia = generateMedia({
//     small: '480px',
//     medium: '768px',
//     large: '1024px',
//     huge: '1400px',
// })
const GlobalStyles = createGlobalStyle`

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {}
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  html, body {
    background-color: inherit;
  }
  
  /**
  My Styles start Here
  **/
  
  
  body {    
    font-weight: 600;
    color: white;
    background-color: var(--royal-blue);
    text-size-adjust: 100%;
    font-size: 100%;
    font-family: var(--base-font);
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.85em;    
  }

  body::-webkit-scrollbar {
    position: absolute;
    width: 0.5rem;
    margin-left: -8px;
  }
  
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.2);
  }
  
  body::-webkit-scrollbar-thumb {
    outline: 1px solid slategrey;
    cursor: pointer;
    transition: all 0.3s ease-out;
    
    &:hover {
       
    }    
    &:active {
        
    }
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    &--royal-blue {
        background-color: var(--royal-blue);
    }
  }
  .container {
    flex: 1 0 auto;
    display: block;
    position: relative;
    width: 100%;
    max-width: 1280px;
    margin: auto;
    z-index: 1;  
    padding: 0 24px;
  }
  /* Font Styling */
    h1 {
    
    }
    h2 {
        font-size: 2.90219rem;
    }
    p {
    
    }
    .section {
        h2 {
            border-top: 4px solid #fff;
            display: inline-block;
            padding-top: 12px;
            margin-bottom: 48px;
        }
    }
    .sponsors {
        background: var(--cobalt-blue);
        .icons-wrapper {
            display: grid;
            grid-template-rows: repeat(1, minmax(0, 1fr));
            gap: 1rem;
        }
        .icon-box {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            align-content: stretch;
            transition: transform .25s ease-in-out;  
            padding: 1rem;      
            max-width: 200px;
            min-width: 200px;
            background: red;
        }
    }
        
            
  :root { 
        --base-font: 'Montserrat', sans-serif;
        --royal-blue: #292654;
        --cobalt-blue: #13499e;
  }
`
// Magenta https://www.color-hex.com/color-palette/31535

export default GlobalStyles
