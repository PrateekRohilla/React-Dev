import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {

  const [form, setForm] = useState({name:"", email:"", message:""});
  const[submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(form.name);
    setSubmitted(true);
    console.log(form);
    //setForm({name:"", email:"", message:""});
    console.log(userName);
  }

  return (
    <>
      <div className='contact-container'>
        {submitted ? (
          <h3>Thank You {userName}!</h3>
        ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" value={form.name} required onChange={handleChange}/>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={form.email} required onChange={handleChange}/>
          <label htmlFor="message">Message</label>
          <input id="message" type="text" name="message" value={form.message} required onChange={handleChange}/>
          <button type='submit'>Submit</button>
        </form>
        )}
      </div>
    </>
  )
}

export default ContactForm