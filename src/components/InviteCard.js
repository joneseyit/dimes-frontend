import React from 'react'
import {Card, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { showGame } from '../redux/actions'

// accept button needs to: create a join fetch request to the game, push history to game show page
// post request to show invite as responded.  Remove invite from user profile page
// decline button needs to update invite to responded 



const InviteCard = (props) => {
    const gameId = props.invited.game.id
    const userId = parseInt(localStorage.user_id)
    const invitedId = props.invited.id



    const joinGame = (userId, gameId) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_game: {
                    user_id: userId,
                    game_id: gameId
                }
            })
        }

        fetch('http://localhost:3000/user_games', options)
        .then(res => res.json())
        .then( game =>{
            if(game.error){
                this.setState({ error: game.error})
            } else {
                return this.props.dispatch(showGame(game))
            }
        }) 
    }

    const acceptInvite = (invitedId, gameId, userId) => {
        let options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                responded: true
             })
        }

        fetch(`http://localhost:3000/invitations/${invitedId}`, options)

        joinGame(userId, gameId)
    }

    const declineInvite = (inviteId) => {

    }
    return (
        <Card>
            <Card.Content as={Link} to={`/games/${gameId}`} >
                <Image floated='right' size='mini' src='https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
                <Card.Header>Let's Run!</Card.Header>
                <Card.Meta>  </Card.Meta>
                <Card.Description>
                <strong>{props.invited.user.username} </strong> has invited you to play in <strong>{props.invited.game.title}</strong>
                </Card.Description>
                    </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green' onClick={(e) => acceptInvite(invitedId, gameId, userId)}>
                        Heck yeah!
                    </Button>
                    <Button basic color='red' onClick={declineInvite}>
                        Nope
                    </Button>
                    </div>
            </Card.Content>
        </Card> 
    )
}

export default InviteCard