import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { makeSelectUsers } from './selectors'
import Axios from 'axios'
import { useEffect } from 'react'
import { setUsers } from './actions'

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}))

const actionDispatch = (dispatch) => ({
  setUsers: (users) => dispatch(setUsers(users)),
})

const HomePage = (props) => {
  const { users } = useSelector(stateSelector)
  const { setUsers } = actionDispatch(useDispatch())
  const fetchUsers = async () => {
    const response = await Axios.get('https://reqres.in/api/users').catch(
      (err) => {
        console.log('Error: ', err)
      },
    )

    setUsers(response.data.data)
  }
  console.log('USERS: ', users)
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
