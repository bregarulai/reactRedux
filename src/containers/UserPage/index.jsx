import React from 'react'
import { useParams } from 'react-router-dom'

const UserPage = () => {
  const { userId } = useParams()
  return (
    <div>
      <h1>user page</h1>
    </div>
  )
}

export default UserPage
