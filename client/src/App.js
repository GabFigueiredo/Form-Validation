import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import styles from './app.module.css'

function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')
  
  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name: name,
      number: number
    }

    await axios.post('http://localhost:5000/', data).then(res => setError(res.data))
    console.log(error)

  }

  return (
      <div>
        <form onSubmit={handleSubmit}className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="William" onChange={(e) => setName(e.target.value)}></input>
          <label htmlFor="number">Number</label>
          <input type="text" id="number" name="number" placeholder="11 943699223" onChange={(e) => setNumber(e.target.value)}></input>
          <input type="submit" value='Submit'></input>
        </form>
        {error === 'success' ? <p className={styles.green}>Form filled correctly</p> : <p className={styles.red}>Form filled incorrectly</p>}
      </div>
  );
}

export default App;
