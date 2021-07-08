import { createGlobalStyle, css } from 'styled-components'

import variables from './variables'

const { fontSizes, breakpoints } = variables

const setFontSizes = () =>
  Object.entries(fontSizes).map(
    ([breakpoint, fontSize]) => css`
      @media screen and (min-width: ${breakpoints[breakpoint]}px) {
        font-size: ${fontSize}px;
      }
    `
  )

const ResetCSS = createGlobalStyle`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    box-sizing: border-box;
  }

  body {
    ${setFontSizes()}
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.normalColor};
  }
`

export default ResetCSS
