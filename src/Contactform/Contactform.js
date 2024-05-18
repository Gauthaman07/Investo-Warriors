import React from 'react'
import './contact.css'

function Contactform() {
  return (
    <>
      <div className='formcon'>
        <h3>Register with us!</h3>
        <div >
          <form>
            {/* <label for="fname">First Name</label> */}
            <input type="text" id="fname" name="firstname" placeholder="Enter your full name" />

            {/* <label for="lname">Last Name</label> */}
            <input type="text" id="lname" name="lastname" placeholder="Enter your mobile number" />
            <input type="text" id="lname" name="lastname" placeholder="Enter your email" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Contactform