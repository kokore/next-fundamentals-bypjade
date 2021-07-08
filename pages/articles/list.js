import React from 'react'

import withFetch from '@lib/withFetch'
import ListGroup from '@components/shared/list/ListGroup'
import ListItem from '@components/shared/list/ListItem'

const ARTICLES_URL = '/articles'

const Articles = ({ data: { articles }, isLoading }) =>
  isLoading ? (
    'Loading'
  ) : (
    <ListGroup cols={2}>
      {articles.map(({ id, title }) => (
        <ListItem key={id} url={`/articles/${id}`}>
          {title}
        </ListItem>
      ))}
    </ListGroup>
  )

Articles.defaultProps = {
  data: { articles: [] }
}

export default withFetch(ARTICLES_URL)(Articles)
