import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { makeSelectUsers } from './selectors'
import Axios from 'axios'
import { useEffect } from 'react'

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}))

const HomePage = (props) => {
  const { users } = useSelector(stateSelector)
  const fetchUsers = async () => {
    const response = await Axios.get('https://reqres.in/api/users').catch(
      (err) => {
        console.log('Error: ', err)
      },
    )

    console.log('USERS: ', response.data.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div>
      <h1>Hello world from redux!</h1>
    </div>
  )
}

export default HomePage
