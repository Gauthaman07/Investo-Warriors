import React, { useState } from "react";
import './contact.css'

function Contactform() {

  const [form, setForm] = useState({
    firstname: '',
    mobile: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setForm({
  //     ...form,
  //     [name]: value,
  //   })
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const validate = () => {
    let errors = {};

    if (!form.firstname.trim()) {
      errors.firstname = 'Full name is required';
    }

    if (!form.lastname.trim()) {
      errors.lastname = 'Mobile number is required';
    } else if (!/^\d+$/.test(form.lastname)) {
      errors.lastname = 'Mobile number is invalid';
    }

    if (!form.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Email is invalid';
    }

    return errors;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const errors = validate();
  //   if (Object.keys(errors).length === 0) {
  //     sendEmail();
  //   } else {
  //     setErrors(errors);
  //   }
  // };


  return (
    <>
      <div className='formcon'>
        <h3>Register with us!</h3>
        <div >
          <form>
            <input type="text" id="firstname" name="firstname" value={form.firstname} onChange={handleChange} placeholder="Enter your full name" />
            <input type="text" id="mobile" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Enter your mobile number" />
            <input type="text" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Contactform