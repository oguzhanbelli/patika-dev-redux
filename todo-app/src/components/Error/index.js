import React from 'react'

function Error({message}) {
  return (
    <div style={{padding:"15px",fontSize:16,color:"red"}}>Error: {message}</div>
  )
}

export default Error