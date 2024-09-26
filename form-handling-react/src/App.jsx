import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'

function App() {

  return (
    <div className="App">
    <h1>User Registration</h1>
    <h2>Controlled Components</h2>
    <RegistrationForm />
    <h2>Formik Form</h2>
    <FormikForm />
  </div>
  )
}

export default App
