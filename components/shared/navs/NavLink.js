import styled, { css } from 'styled-components'

import { Link } from '@routes'

const marginLeft = props => {
  if (props.right) return 'auto'
  if (props.brand) return 0

  return props.theme.gutter
}

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;

  ${props => css`
    &:hover {
      color: ${props.theme.normalColor};
    }

    margin-left: ${marginLeft(props)};
    font-weight: ${props.brand && 'bold'};
  `}
`

NavLink.defaultProps = {
  brand: false,
  right: false
}

export default props => (
  <Link route={props.to}>
    <NavLink {...props} />
  </Link>
)
