import React from 'react'

const Button = ( { text,bgColor,children}) => {
    const Butt={
        backgroundColor:bgColor||"red" ,
        color: text||"white" ,
        padding:"10px",
        border:"none",
        borderRadius:"5px",
        margin:"5px"

        
    }



  return (
    <button style={Butt}> {children}</button>
  )
}

export default Button