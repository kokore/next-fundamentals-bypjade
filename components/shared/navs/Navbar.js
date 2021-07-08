import styled, { css } from 'styled-components'

const Navbar = styled.header`
  display: flex;
  background: ${props => props.theme.primaryColor};
  padding: ${props => props.theme.gutter};
`

export default Navbar
