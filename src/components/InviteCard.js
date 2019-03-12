import React from 'react'
import {Card, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const InviteCard = (props) => {
    return (
        <Card>
            <Card.Content as={Link} to='/games/10' >
                <Image floated='right' size='mini' src='https://images.unsplash.com/photo-1505666287802-931dc83948e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
                <Card.Header>Let's Run:</Card.Header>
                <Card.Meta>  </Card.Meta>
                <Card.Description>
                <strong>{props.invited.user.username} </strong> has invited you to play in <strong>{props.invited.game.title}</strong>
                </Card.Description>
                    </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>
                        Approve
                    </Button>
                    <Button basic color='red'>
                        Decline
                    </Button>
                    </div>
            </Card.Content>
        </Card> 
    )
}

export default InviteCard