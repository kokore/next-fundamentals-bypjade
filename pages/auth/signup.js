import React, { Component } from 'react'
import axios from 'axios'
import pick from 'lodash/pick'

import AuthForm from '@components/auth/Form'

class Signup extends Component {
  async signup(formData) {
    const user = pick(formData, ['email', 'password', 'firstName', 'lastName'])

    await axios.post('/users', user)
  }

  render() {
    return <AuthForm formType="SIGN_UP" onSubmit={this.signup} />
  }
}

export default Signup
