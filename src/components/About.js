import React from 'react'
import { Container } from 'semantic-ui-react'
const About = (props) => {
    return (
        <Container>
            <h1 style={{ fontFamily: 'Covered By Your Grace, cursive' }}>About that...</h1>
            <p style={{fontSize: '20px'}}>
                Welcome to Dimes!  We're glad you checked us out. Dimes comes from the love of pickup basketball -
                 <br/>being able to walk on a court without knowing anybody and being able to connect and compete in a
                  <br/>game of basetball.  Sure sometimes things get testy and heated, but that's what it's about.  <br/>Play hard.  Stay fresh.  Drop dimes.
                <br/>- Drew
            </p>
        </Container>
        
    )
}

export default About