import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle ` 
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background-color: #302a26;
    color:#ecd1b3 !important;
    line-height: normal;
    font: 400 14px Roboto, sans-serif;
    -webkit-font-smooting: antialiased;
}

html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
}

a, li, button {
    text-decoration: none;
}
`

export default globalStyle;