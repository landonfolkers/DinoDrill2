import React, {Component} from 'react'
import Skillslist from './Skillslist'

class Profiles extends Component() {
    constructor(props) {
        super(props)
        this.state = {profiles: [],
        listPop: false
        }
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

    showList(e) {
        e.preventDefault()
        this.setState({listPop: !this.state.listPop})
    }
    
    render() {
    return <li>
        {this.state.profiles.map(profile => <div className="profile-card" onClick={showList}>
        <header className="profile-header">
            <img src={profile.image} />
            <h2>{profile.name}</h2> 
            </header>
            <Skillslist profile={profile}/>
            </div>
            )}
            </li>
    }
}

export default Profiles