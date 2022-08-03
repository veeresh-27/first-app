import React ,{useState} from 'react'
import './popup.css'

function Popup({name, des,price,close}) {

    
  return (
    <div className={close ? 'closed' : 'pop-container'}>
        <div className='popup'>
            <div className='head'>

                <div className='close' onClick={close}>
                   Close
                    </div>

            </div>

<div className='content'>
    <p>Your Order {name} is Placed Successfully</p>
    <p>{des} </p>
    <p>Total Price: {price}</p>
    <p>Your Order will be delivered in 30 minutes</p>
    <p>Thank You for Choosing Us</p>
     
    </div>
        

    <div className='close' onClick={()=>setClose(true)}>
                   Add More 
                    </div>
    </div>

</div>
    
  )
}

export default Popup
