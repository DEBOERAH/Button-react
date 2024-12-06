import React from 'react'
import Button from "./Button"

const Comp2 = () => {
    


  return (
    <div>
         <h3>
         <ul> <li> Default </li>


         </ul>
      </h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, earum?</p> 
     <Button bgColor= "gray">This Button</Button>
     <Button bgColor="darkblue">That button</Button>
     <Button text ="black" bgColor ="Lavender"><i class="fa-solid fa-arrow-left"></i>Icon After</Button>
     <Button bgColor ="LightSteelBlue">Icon After<i class="fa-solid fa-arrow-right"></i></Button>
    </div>
  )
}

export default Comp2