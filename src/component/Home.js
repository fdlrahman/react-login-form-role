import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import UseAuth from '../hooks/UseAuth'
import {useNavigate} from 'react-router-dom'

function Home() {
  const { auth, setAuth } = UseAuth()
  const navigate = useNavigate()

  const handleSignout = () => {
    setAuth({})
    navigate('/linkpage');
  }

  return (
    <section>
        <h1>Home</h1>
          <br />
        <p>You are logged in as {auth.role}!</p>
          <br />
        <Link to="/editor">Go to the Editor page</Link>
          <br />
        <Link to="/admin">Go to the Admin page</Link>
          <br />
        <Link to="/lounge">Go to the Lounge</Link>
          <br />
        <Link to="/linkpage">Go to the link page</Link>
        <div className="flexGrow">
          <button onClick={handleSignout}>Sign Out</button>
        </div>
    </section>
  )
}

export default Home