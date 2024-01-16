import React from 'react'

const PersonCard = ({ userData = [] }) => {
  return userData.map((user) => {
    return (
      <div className="user_card" key={user?.id}>
        <h3 className="user_details">{`Name: ${user?.name}`}</h3>
        <h3 className="user_details">{`Age: ${user?.age}`}</h3>
        <h3 className="user_details">{`Job: ${user?.job}`}</h3>
        <h3 className="user_details">{`YOE: ${user?.yoe}`}</h3>
        <h3 className="user_details">{`Company: ${user?.company}`}</h3>
      </div>
    )
  })
}

export default PersonCard
