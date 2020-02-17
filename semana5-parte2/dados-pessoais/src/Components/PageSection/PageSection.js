import React from 'react'
import './PageSection.css'



function PageSection(props){
    return(
        <section className="PageSection-container">
            <h1>{props.heading}</h1>
            {props.children}
        </section>
    )
}


export default PageSection