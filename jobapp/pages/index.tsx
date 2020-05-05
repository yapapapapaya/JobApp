import React from 'react'
import Link from 'next/link'

const Home = () => {
  console.log('this is index page')
  return (
    <div className="container">
      <main>
        <h1>
          This is Landing Page
        </h1>
          <p><Link href={'/login/login'}>Login</Link></p>
      </main>
    </div>
  )
  
}
export default Home
