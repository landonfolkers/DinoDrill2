import React from 'react';

export default function Skillslist({profiles}) {
    return <section className="skills-container">
        <h4>Skills</h4>
        <ul className="skills-list"> 
            {profiles.map(profile => <li>{profile.skills}</li>
            )}
        </ul>
      </section>
}