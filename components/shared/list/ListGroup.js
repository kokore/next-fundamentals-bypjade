import styled, { css } from 'styled-components'

const ListGroup = styled.div`
  display: grid;
  grid-template-columns: ${props => css`
    repeat(${props.cols}, 1fr)
  `};
`

ListGroup.defaultProps = {
  cols: 1
}

export default ListGroup
