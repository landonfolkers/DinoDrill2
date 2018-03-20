import React, {Component} from 'react'
import Skillslist from './Skillslist'

class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {profiles: [],
        isHidden: true
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
        this.setState({isHidden: !this.state.isHidden})

    }
    
    render() {
    return <li>
        {this.state.profiles.map(profile => <div className="profile-card" onClick={this.showList.bind(this)}>
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