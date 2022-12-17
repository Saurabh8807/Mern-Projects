import React from 'react'

export default function Alert(props) {
  // const capitalize=(word)=>{
  //     const lower = word.toLowerCase();
  //     return lower.charAt(0).toUppercase() +lower.slice(1);
  // }
  return (
    <div style={{height:'10vh'}}>
    {props.alert &&<div>
      <div class={`alert alert-${props.alert.type} `} role="alert">
        <strong>{(props.alert.type)}</strong> {props.alert.msg}
    </div>
    </div>}
    </div>
  )
}
