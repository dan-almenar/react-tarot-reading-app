import React from 'react'

function UserInfoDisplay(props: any) {
    const { firstName, lastName, birthDate } = props
  return (
    <div className='box has-background-warning'>
        <p className="title has-text-centered">
            {firstName} {lastName}
        </p>
        <span className="tag is-medium is-warning">
            (Born on {new Date(birthDate).toUTCString().slice(0, 16)})
        </span>

    </div>
  )
}

export default UserInfoDisplay