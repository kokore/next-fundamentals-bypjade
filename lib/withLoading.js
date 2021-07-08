import { Component } from 'react'

export default WrappedComponent =>
  class extends Component {
    static async getInitialProps(ctx) {
      const asyncFn = WrappedComponent.getInitialProps
      let props = { isLoading: !!process.browser }

      if (!asyncFn) return { isLoading: false }
      if (process.browser) return { ...props, asyncFn, ctx }

      props = { ...props, ...(await asyncFn(ctx)) }

      return { ...props }
    }

    state = { isLoading: this.props.isLoading }

    async componentDidMount() {
      const { asyncFn, ctx } = this.props

      if (!asyncFn) return

      const asyncProps = await asyncFn(ctx)

      this.setState({ ...asyncProps, isLoading: false })
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
