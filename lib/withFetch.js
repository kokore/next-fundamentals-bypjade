import { Component } from 'react'
import axios from 'axios'

export default url => WrappedComponent =>
  class extends Component {
    static async getInitialProps(ctx) {
      if (process.browser) return { isLoading: true, ctx }

      return { ...(await this.fetchData(ctx)), isLoading: false }
    }

    state = {
      isLoading: this.props.isLoading
    }

    async componentDidMount() {
      if (!this.props.isLoading) return

      const props = await this.constructor.fetchData(this.props.ctx)

      this.setState({ ...this.state, ...props, isLoading: false })
    }

    static fetchData = async ctx => {
      const { data } = await axios.get(
        typeof url === 'function' ? url(ctx) : url
      )

      return { data }
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
