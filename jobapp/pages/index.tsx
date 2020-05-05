import React from 'react'
import Login from './Login/Login'

const Home = () => (
  <div className="container">
    <head>
      <title>JobApp</title>
      <link rel="icon" href="/favicon.ico" />
    </head>

    <main>
      <header>
        This is Header!
      </header>
      <Login />
      <footer>
      This is a footer!
    </footer>
    </main>
  </div>
)
export default Home
