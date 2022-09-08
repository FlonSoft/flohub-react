import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/index.css'
import Home from './Home'
import Layout from './Layout'
import NoPage from './pages/NoPage'
import Login from './pages/Login'

export default function App() {
  function getCookie(name) {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
  }

  async function checkSess() {
    if (!getCookie('sess') || getCookie('sess') === '') {
      return false
    }
    fetch('https://api.flohub.xyz/v1/auth', {
      headers: {
        authorization: getCookie('sess')
      }
    }).then((response) => response.json()).then((data) => {
      console.log(JSON.stringify(data.status))
      if (data.status === 'authorized') {
        return true
      } else {
        return false
      }
    })
  }

  useEffect(() => {
    checkSess()
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))