import React from 'react'

export default function Skillslist({ profile }) {
    return <section className="skills-container">
        <h4>Skills</h4>
        <ul>
            {profile.skills.map(skill => <li className="skills-list" key={skill}>{skill}</li>)}
        </ul>
    </section>
}