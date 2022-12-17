import React from 'react'
import Loading from './loading.gif'

export default function Spinner() {
    return (
      <div style={{display:"flex",justifyContent:"center"}}>
        <img src={Loading} alt="loading" />
      </div>
    )
}

