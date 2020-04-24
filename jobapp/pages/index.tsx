import React from 'react'
import Login from './Login/Login'
import Header from '../src/Header/Header'
import Footer from '../src/Footer/Footer'

const Home = () => (
  <div className="container">
    <head>
      <title>JobApp</title>
      <link rel="icon" href="/favicon.ico" />
    </head>

    <main>
      <header>
        <Header />
      </header>
      <Login />
      <footer>
        <Footer />
    </footer>
    </main>
    
  </div>
)
export default Home
