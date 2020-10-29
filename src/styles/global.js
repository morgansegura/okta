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
    background-color: rgba(20,73,158, 0.5);
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
    max-width: 1180px;
    padding: 0 24px;
    margin: auto;
    z-index: 1;  
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 2.125rem;
    
    &-nav {
        display: flex;
        a {
            display: inline-flex;
            opacity: 0.65;
            padding: 0.5rem;        
            font-size: 0.85rem;
            transition: all 0.3s ease-out;
            
            &:hover {
                opacity: 0.8;
                text-decoration: underline;
            }            
            &:active {
                opacity: 1;
            }
        }
    }
    .logo {
        font-weight: 800;
        flex: 1 0 auto;
    }
    .logo > span {
        font-weight: 600;
    }
  }
  /* Font Styling */
    h1 {
    
    }
    h2 {
        font-size: 2.90219rem;
    }
    p {
    
    }
    .section-layout {
        padding-top: 96px;
        padding-bottom: 96px;
        
        h2 {
            border-top: 4px solid #fff;
            padding-top: 1.5rem;
            display: inline-block;
            margin-bottom: 48px;
            font-weight: 600;
            font-size: 2.90219rem;
        }    
    }
    .description-block {
        max-width: 90%;
        margin: 0 auto;
        text-align: center;
        
        .contact-phrase {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
        }
        .view-sponsorship {
        
        }
        a {
            color: #f08751;
            text-decoration: none;
            transition: all .25s ease-in-out;
            font-weight: 600;
            letter-spacing: .05rem;
            border-bottom: 1px solid #f08751;   
            
            &:hover {
                color: #f16e2b;
                border-bottom: 1px solid #f16e2b;
            }     
        }    
    }
    .heading-container {
        text-align: center;
        h3 {
            text-align: center;
            color: #f89e1c;
            line-height: 1.25;
            font-size: 2.34521rem;
            font-weight: 700;
            margin-top: 6rem;
            margin-bottom: 3rem;
            
            &:before {
                content: "";
                height: 60px;
                width: 60px;
                position: absolute;
                background: #95446b;
                border-radius: 50%;
                opacity: .7;
                transform: translate3d(-61%,-50%,0);
                z-index: -1;            
            }
        }
    }
    .sponsors {
        background: var(--cobalt-blue);
        .container {
            max-width: 1180px;
            margin: 0 auto;    
            overflow: hidden    
        }
        .icons-wrapper {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;  
            margin: 0 auto;  
        }
        .icon-container {
            cursor: pointer;
            display: flex;
            justify-content:center;
            align-items: center; 
            margin: 0.75rem;          
            min-width: 200px;
            min-height: 200px;
            transform: scale(1);          
            transition: transform .25s ease-in-out;  
            background: #292654;
            
            &:hover {
                transform: scale(1.05);
            }
        }
        .icon-box {
            display: flex;
            height: auto;
            width: 100%;
            max-width: 150px;
            
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .modal {
        position: fixed;        
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        z-index: -1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(20,73,158, 0.98);
        transition: all 0.3s ease-in;
                
        &.modal-is--open {
            width: 100%;
            height: 100%;
            opacity: 1;
            visibility: visible;
            z-index: 1000;
            transition: all 0.3s ease-out;
        }
        &__logo-image {
            margin: 1rem auto;
            width: 100%;
            max-width: 200px;
        }
        .modal-content {
            width: 90%; 
            margin: 0 auto;
            border-radius: 10px;
            padding: 2rem;
            color: #fff;
        }
        p {
            text-align: ceenter;
            color: white;
            font-size: 1rem;
        }
        a {
        
        }
        .close {
            cursor: pointer;
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: #fff;
            opacity: 0.65;
            width: 35px;
            height: 35px;
            padding: 5px;
            outline: none;
            transform: scale(1);
            transition: all 0.3s ease-out;
            
            &:hover {
                opacity: 1;
                transform: scale(1.075);            
            }            
            &:active {
                opacity: 0.8;            
            }
        }
    }    
            
  :root { 
        --base-font: 'Open Sans', sans-serif;
        --royal-blue: #292654;
        --cobalt-blue: #13499e;
  }
`
// Magenta https://www.color-hex.com/color-palette/31535

export default GlobalStyles
