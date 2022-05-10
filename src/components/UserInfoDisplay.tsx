import React from 'react'

function UserInfoDisplay(props: any) {
    const { userData } = props
  return (
    <div className='box has-background-warning'>
        <p className="title has-text-left">
            {userData.firstName} {userData.lastName}
        </p>

    </div>
  )
}

export default UserInfoDisplay