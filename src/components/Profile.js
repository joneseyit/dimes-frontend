import React from 'react'
import { Card, Image, Container } from 'semantic-ui-react'

class Profile extends React.Component {
    render() {
        return(
            <div>
                <Container style={{padding: '20px', display: 'flex',justifyContent: 'center'}}>
                    <Card style={{ padding: '20px' }}>
                        <Image src='https://images.unsplash.com/photo-1518479044931-404a93dcaf0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' style={{ height: '200px' }} />
                        <Card.Content>
                        <Card.Header><span style={{color: 'blue'}}>Name:</span> Junior</Card.Header>
                        <Card.Meta>
                            <span className='date'>Username: Howdy</span>
                        </Card.Meta>
                        <Card.Description>Member since: 2019</Card.Description>
                        <Card.Description>Bio: mad handle</Card.Description>
                        </Card.Content>

                    </Card>
                </Container>

            </div>
        )
    }
}

export default Profile