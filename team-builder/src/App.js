// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Form from './Form'


function App() {
  const initialForm = {firstname: '', lastname: '', email: ''}
  
  const [formData, setFormData] = useState(initialForm)

  const updateForm = event => {
    setFormData({
      ...formData, [event.target.name]: event.target.value
    })
  }

  return (
    <Form>
      <form>
        <input type='text' placeholder="First Name" name='firstname' onChange={(updateForm)}></input>
        <input type='text' placeholder="Last Name" name='lastname' onChange={(updateForm)}></input>
        <input type='text' placeholder="Email" name='email' onChange={(updateForm)}></input>
      </form>
    </Form>
  );
}

export default App;
