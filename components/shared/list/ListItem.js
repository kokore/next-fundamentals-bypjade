import styled from 'styled-components'

import { Link } from '@routes'

const ListItem = styled.div`
  padding: ${props => props.theme.gutter};
  border: 1px solid ${props => props.theme.borderColor};
  margin-bottom: -1px;
`

export default props =>
  props.url ? (
    <ListItem>
      <Link route={props.url}>
        <a>{props.children}</a>
      </Link>
    </ListItem>
  ) : (
    <ListItem {...props} />
  )
