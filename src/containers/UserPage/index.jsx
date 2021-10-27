import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { setUser } from './action'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { createSelector } from 'reselect'
import { makeSelectUser } from './selectors'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const UserImage = styled.div`
  width: 12rem;
  height: 12rem;

  img {
    width: 100%;
    height: 100%;
  }
`
const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const UserName = styled.h3`
  font-size: 1.8rem;
  color: #000;
  margin: 0;
`

const stateSelector = createSelector(makeSelectUser, (user) => ({
  user,
}))

const actionDispatch = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
})
const UserPage = () => {
  const { user } = useSelector(stateSelector)
  const { setUser } = actionDispatch(useDispatch())
  const { userId } = useParams()

  const fetchUser = async (id) => {
    const response = await Axios.get(`https://reqres.in/api/users/${id}`).catch(
      (err) => {
        console.log('ERROR: ', err)
      },
    )

    if (response) setUser(response.data.data)
  }

  useEffect(() => {
    if (userId && userId !== '') {
      fetchUser(userId)
    }
  }, [userId])
  return (
    <div>
      <h1>user page</h1>
    </div>
  )
}

export default UserPage
