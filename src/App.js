import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Profiles from './components/Profiles'
import Skillslist from './components/Skillslist'
import Footer from './components/Footer'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {profiles: []}
  }

  findProfiles() {
    fetch('/dinosaurs.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      } 
    })
    .then(response => response.json())
    .then(profiles => this.setState({profiles}))
  }

  componentWillMount() {
    this.findProfiles()
  }

  render() {
    return (
      <body>
        <Header />
          <main>
            <section>
              <ul id='profiles'>
                  <Profiles profiles={this.state.profiles}/>
                  <Skillslist profiles={this.state.profiles}/>
              </ul>
            </section>
          </main>
        <Footer />
      </body>
    )
  }
}

export default App
