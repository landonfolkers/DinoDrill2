import React, { Component } from 'react'
import Skillslist from './Skillslist'

class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dinos: []
        }
    }

    componentDidMount() {
        fetch('./dinosaurs.json')
            .then(response => {
                return response.json()
            })
            .then(dinosaurs => {
                let dinos = JSON.parse(JSON.stringify(dinosaurs))
                dinos.map((dino) => {
                    return dino.SkillsListVisible = true
                })
                this.setState({
                    dinos
                })
            })
    }

    clickHandler(index) {
        let newState = JSON.parse(JSON.stringify(this.state.dinos))
        newState[index].SkillsListVisible = !newState[index].SkillsListVisible
        this.setState({
            dinos: newState
        })
    }

 
    render() {
        return (
            <section id="profiles-container">
                <h2>Profiles</h2>
                <ul id="profiles">
                    {this.state.dinos.map((dinosaur, index) => {
                        return (
                            <li key={index} onClick={() => this.clickHandler(index)}>
                                <div className="profile-card">
                                    <header className="profile-header" >
                                        <img src={dinosaur.image} alt={dinosaur.name} />
                                        <h2>{dinosaur.name}</h2>
                                    </header>
                                    <div>
                                        {
                                            dinosaur.SkillsListVisible
                                                ? false :
                                                <Skillslist profile={dinosaur} />
                                        }
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
} 

        export default Profiles
   