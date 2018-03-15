import React from 'react'
import Skillslist from './Skillslist'

export default function Profiles({profiles}) {
    return <li>
    {profiles.map(profile => <div className="profile-card">
    <header className="profile-header">
        <img src={profile.image} />
          <h2>{profile.name}</h2> 
          </header>
          <Skillslist />
          </div>
         )}
         </li>
}