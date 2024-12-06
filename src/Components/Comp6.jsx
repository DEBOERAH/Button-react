import React from 'react'
import Button from "./Button"

const Comp6 = () => {
  return (
    <div>
                 <h3>
         <ul> <li> Small/default </li>


         </ul>
      </h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, earum?</p>
     <Button bgColor= "gray"> primary next </Button>
     <Button bgColor="darkblue"> Prev</Button>
     <Button text="black" bgColor ="Lavender">  Default small<i class="fa-solid fa-arrow-left"></i> </Button>
     <Button bgColor ="LightSteelBlue">Go this way<i class="fa-solid fa-arrow-right"></i></Button>
    </div>
  )
}

export default Comp6