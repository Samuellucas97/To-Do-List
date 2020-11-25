import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle ` 

body {
    background-color: #302a26;
    color:#ecd1b3 !important;
    line-height: normal;
    font: 400 14px Roboto, sans-serif;
    -webkit-font-smooting: antialiased;
    text-align: left;
}

a, li, button {
    text-decoration: none !important;
} 

input {
    color: white !important;
}
`

export default globalStyle;