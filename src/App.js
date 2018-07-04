import React from 'react'
import { Router, Link, Head } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import 'normalize.css'
import './app.scss'

const App = () => (
  <Router>
    <div>
      <Head>
        <title>Bryan's Tech Blogger</title>
        <link href="https://fonts.googleapis.com/css?family=Gaegu" rel="stylesheet"></link>
      </Head>
      <div className="paper">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <section className="body">
          <Routes />
        </section>
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
