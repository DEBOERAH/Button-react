import Button from "./Button"

const Compcont = ({ bgcolor,children} ) => {
  const Styles = {
      color:"white",
      backgroundColor: bgcolor|| "blue",
      padding:"10px",
      border:'none',
      borderRadius:"5px",
      margin:"5px"
      

  }

return (
  <div>
      <h3>
         <ul> <li> primary </li>


         </ul>
      </h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, earum?</p> 
     <Button bgColor="Blue">Prmary Button</Button>
     <Button bgColor="darkblue">Secondary button</Button>
     <Button bgColor="green">Hello</Button>
  



   </div>
  
  
  
   
)
}

export default Compcont