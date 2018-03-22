import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Profiles from './components/Profiles'
import Footer from './components/Footer'


class App extends Component {

  render() {
    return (
      <div id="mainbody">
        <Header />
          <main>
            <section id="dinos">
              <ul id='profiles'>
                  <Profiles />
              </ul>
            </section>
          </main>
        <Footer />
      </div>
    )
  }
}

export default App

