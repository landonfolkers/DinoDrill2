import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Profiles from './components/Profiles'
import Skillslist from './components/Skillslist'
import Footer from './components/Footer'


class App extends Component {

  render() {
    return (
      <body>
        <Header />
          <main>
            <section>
              <ul id='profiles'>
                  <Profiles profiles={this.state.profiles}/>
              </ul>
            </section>
          </main>
        <Footer />
      </body>
    )
  }
}

export default App

