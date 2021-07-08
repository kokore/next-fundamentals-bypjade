import React, { Component } from 'react'

class Form extends Component {
  state = {
    ...this.props.initialValues
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    return this.props.children({
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
      values: this.state
    })
  }
}

export default Form
