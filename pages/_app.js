import React from 'react'
import App, { Container } from 'next/app'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import config from '../config'
import theme from '@theme/variables'
import ResetCSS from '@theme/ResetCSS'
import Layout from '@components/shared/Layout'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'nprogress/nprogress.css'

axios.defaults.baseURL = config.backendUrl

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <Layout>
            <ResetCSS />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    )
  }
}
