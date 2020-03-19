import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>JobApp</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to JobApp
      </h1>

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>
    </main>

    <footer>
      This is a footer!
    </footer>
  </div>
)
export default Home
