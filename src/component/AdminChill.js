import React from 'react'
import { Link } from 'react-router-dom'

function AdminChill() {
  return (
    <section>
        <h1>Admin Chill</h1>
        <p>
            admin is enjoying the sunset with a cup of coffee and a line of code...
        </p>

        <div className="flexGrow" style={{ marginTop: '20px' }}>
            <Link to="/">Go Back Home</Link>
        </div>
    </section>
  )
}

export default AdminChill