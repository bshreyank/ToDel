import { useState } from 'react'
import Content from './Content';

const Modal = () => {


    const [show,setShow]=useState(false);
    
   function toggle(data)
   {
    setShow(data);
   }
    

  return (
    <div >
         <button onClick={()=>setShow(!show)}>Toggle</button>

         {
            show? <Content toggle={toggle} show={show}/>:''
         }
    </div>
  )
}

export default Modal