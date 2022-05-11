import React from 'react'
import ErrorComponent from '../components/ErrorComponent'

function ErrorPage(props: any) {
    const { code, message } = props
    
  return (
      <ErrorComponent code={code} message={message} />
  )
}

export default ErrorPage