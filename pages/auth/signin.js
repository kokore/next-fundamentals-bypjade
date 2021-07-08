import React, { Component } from 'react'
import axios from 'axios'
import pick from 'lodash/pick'
import { toast } from 'react-toastify'

import AuthForm from '@components/auth/Form'

class Signin extends Component {
  state = {
    formError: []
  }
  async signin(formData) {
    const user = pick(formData, ['email', 'password'])

    const res = await axios.post('/users/signin', user)
    localStorage.setItem('access-token', res.data.accessToken)
    toast.success('ลอคอินเสร็จแหล่ว')
  }

  render() {
    return <AuthForm formType="SIGN_IN" onSubmit={this.signin} />
  }
}

export default Signin
