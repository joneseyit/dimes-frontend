import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

let image = `https://images.unsplash.com/photo-1527527753602-fb58e749276a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`;

const homeBg = {
  backgroundImage: `url(${image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh"
};

const text = {
    display: "flex",
    justifyContent: "center",
    color: "white"
  };
  

class Home extends Component {
    render() {
        return (
            <div style={homeBg}>
                <Container style={text}>
                    <h1 style={{
                        fontSize: '80px', 
                        fontFamily: 'Covered By Your Grace, cursive',
                        marginTop: '20px'
                    }}
                    >
                     Welcome to Dimes
                    </h1>
                </Container>
            </div>
        )
    }
}

export default Home