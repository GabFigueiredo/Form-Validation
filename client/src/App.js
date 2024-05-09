import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import styles from './app.module.css'

function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')
  const [path, setPath] = useState('')
  
  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name: name,
      number: number
    }

    await axios.post('http://localhost:5000/', data)
    .then(res => {
      setError(res.data)
      console.log(data)
    })
    .catch(error => {
      console.log(error)
      setError(error.response.data.errors[0].msg)
      setPath(error.response.data.errors[0].path)
    })
  }

  return (
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="William" onChange={(e) => setName(e.target.value)}></input>
          <label htmlFor="number">Number</label>
          <input type="text" id="number" name="number" placeholder="11 943699223" onChange={(e) => setNumber(e.target.value)}></input>
          <input type="submit" value='Submit'></input>
        </form>
        {error === 'success' ? (<p className={styles.green}>Formulário preenchido corretamente</p>)
        : error ? (<p className={styles.red}>{error} on {path}</p>)
        : null}
      </div>
  );
}

export default App;
