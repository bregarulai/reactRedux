import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createSelector } from 'reselect'
import styled from 'styled-components'
import { makeSelectUsers } from './selectors'

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
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

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}))
const UserList = () => {
  const { users } = useSelector(stateSelector)
  const isEmptyUser = !users || (users && users.length === 0)
  const history = useHistory()
  const goToUserPage = (id) => {
    history.push(`/user/${id}`)
  }
  if (isEmptyUser) return null

  return (
    <UserContainer>
      {users.map((user, index) => {
        return (
          <UserWrapper key={index} onClick={() => goToUserPage(user.id)}>
            <UserImage>
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
            </UserImage>
            <UserName>{`${user.first_name} ${user.last_name}`}</UserName>
          </UserWrapper>
        )
      })}
    </UserContainer>
  )
  {
    users.map((user, index) => {})
  }
}

export default UserList
