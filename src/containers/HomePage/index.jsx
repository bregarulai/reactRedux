import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { makeSelectUsers } from './selectors'
import Axios from 'axios'
import { useEffect } from 'react'
import { setUsers } from './actions'
import UserList from './UserList'

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
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div>
      <UserList />
    </div>
  )
}

export default HomePage
