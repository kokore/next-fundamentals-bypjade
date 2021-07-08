import withFetch from '@lib/withFetch'

const Article = ({ data: { article }, isLoading }) =>
  isLoading ? (
    'Loading...'
  ) : (
    <ul>
      <li>Title: {article.title}</li>
      <li>Content: {article.content}</li>
    </ul>
  )

Article.defaultProps = {
  data: { article: {} }
}
export default withFetch(ctx => `/articles/${ctx.query.id}`)(Article)
