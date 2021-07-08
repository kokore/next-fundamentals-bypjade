import React, { Component } from 'react'
import styled from 'styled-components'
import withFetch from '@lib/withFetch'

const UserList = styled.ul`
  list-style: none;
  margin: 0;
  background: red;
`

const User = styled.li`
  color: #fff;
`

const USERS_URL = '/users'

const Users = ({ data: users, isLoading }) =>
  isLoading ? (
    'Loading...'
  ) : (
    <UserList>
      {users.map(user => (
        <User key={user.id}>{user.name}</User>
      ))}
    </UserList>
  )

export default withFetch(USERS_URL)(Users)
